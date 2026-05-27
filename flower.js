onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Back to gift screen
function goBackToGift() {

    // redirect back to index.html
    window.location.href = "index.html?screen=giftScreen";
}