const title = document.getElementById('title');
const text = title.textContent;
title.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 500);
};
