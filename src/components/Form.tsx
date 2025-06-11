import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const canSendForm = () => {
    const lastSent = localStorage.getItem('lastSent');
    if (!lastSent) return true;

    const lastSentTime = new Date(lastSent).getTime();
    const now = Date.now();
    const diff = now - lastSentTime;

    return diff > 60000;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSendForm()) {
      setStatus('⏳ Please wait at least 1 minute between submissions.');
      return;
    }

    setIsSending(true);
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Message sent!');
        setFormData({ name: '', email: '', message: '' });
        localStorage.setItem('lastSent', new Date().toISOString());
      } else {
        setStatus('❌ Error while sending the form');
      }
    } catch (error) {
      setStatus('❌ An error occurred');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
            disabled={isSending}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
            disabled={isSending}
          />
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          autoComplete="off"
          disabled={isSending}
        />
        <button type="submit" className="animated-button" disabled={isSending}>
          Send
        </button>
        <p>{status}</p>
      </form>
    </section>
  );
};

export default ContactForm;
