function navigate(section) {
  document.querySelectorAll(".content").forEach(function (content) {
    content.classList.remove("active");
  });
  document.getElementById(section).classList.add("active");
}

function toggleMode() {
  const bodyElement = document.body;
  const allCards = document.querySelectorAll(".cards"); // Select all cards
  const allCardsText = document.querySelectorAll(".cardstext");
  const allCardsButton = document.querySelectorAll(".cardsbutton");

  bodyElement.classList.toggle("light-mode");
  allCards.forEach((cards) => cards.classList.toggle("light-mode")); // Apply light mode to all cards
  allCardsText.forEach((cardstext) => cardstext.classList.toggle("light-mode"));
  allCardsButton.forEach((cardsbutton) =>
    cardsbutton.classList.toggle("light-mode")
  );
}
