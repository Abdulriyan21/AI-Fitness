const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");

contactBtn.addEventListener("click", () => {
  message.textContent = "Thanks! We'll contact you with your personalized fitness roadmap.";
});
