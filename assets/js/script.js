const toast = document.getElementById("toast");
const copyButtons = document.querySelectorAll(".copy-btn");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard!");
  } catch (error) {
    showToast("Copy failed. Please try again.");
    console.error("Clipboard error:", error);
  }
}

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.getAttribute("data-copy");
    copyToClipboard(command);
  });
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}