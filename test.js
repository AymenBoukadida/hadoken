let konamiCode = [];
const secretCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let hiddenMessage = document.getElementById("hiddenMessage");
let konamiCodeEntered = false;

document.addEventListener("keydown", function (event) {
  if (!konamiCodeEntered) {
    konamiCode.push(event.key);

    if (
      konamiCode.length === secretCode.length &&
      konamiCode.every((key, index) => key === secretCode[index])
    ) {
      hiddenMessage.style.display = "block";
      konamiCode = [];
      konamiCodeEntered = true;

      setTimeout(function () {
        hiddenMessage.style.display = "none";
      }, 1000);
    }
  }
});
