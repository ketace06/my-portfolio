import React, { useState } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState<string>("");
  const [isSending, setIsSending] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/; 

  if (!nameRegex.test(name)) {
    setStatus("❌ Please enter a valid name (letters and spaces only, min 2 characters).");
    return;
  }

  if (!emailRegex.test(email)) {
    setStatus("❌ Please enter a valid email address.");
    return;
  }

  if (message.length < 10) {
    setStatus("❌ Please enter a message of at least 10 characters.");
    return;
  }

  const lastSent = localStorage.getItem("lastSent");
  const now = Date.now();

  if (lastSent && now - parseInt(lastSent) < 60000) {
    setStatus("⏳ Please wait at least 1 minute between submissions.");
    return;
  }

  setStatus("Sending...");
  setIsSending(true);

  fetch("688c47ab08ee9c08902b47ee88062446", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then(async (response) => {
      if (response.ok) {
        setStatus("✅ Message sent! Thanks for contacting me.");
        form.reset();
        localStorage.setItem("lastSent", now.toString());
      } else {
        const data = await response.json();
        setStatus("❌ Error: " + (data.message || "Unknown error"));
      }
    })
    .catch(() => {
      setStatus("❌ An error occurred while sending the message.");
    })
    .finally(() => setIsSending(false));
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
            required
            autoComplete="off"
            disabled={isSending}
          />
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          autoComplete="off"
          disabled={isSending}
        />
        <input
          type="hidden"
          name="_subject"
          value="New message via contact form from portfolio"
        />
        <button type="submit" disabled={isSending}>
          Send
        </button>
      </form>
      {status && <p style={{ marginTop: "1em" }}>{status}</p>}
    </section>
  );
};

export default ContactForm;
