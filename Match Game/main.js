let score = 0;
let matched_pairs = 0;
let firstImage = null;
let secondImage = null;
let clickable = true;

let scoreOutput = document.getElementById("score");

const onCardClicked = (event) => {
  if (!clickable) return;

  const imgElement = event.target;

  if (!imgElement.src.includes("hidden_icon.jpg")) return;

  imgElement.src = imgElement.getAttribute("data-real");

  firstImage === null
    ? (firstImage = imgElement)
    : secondImage === null
    ? ((secondImage = imgElement), checkMatch())
    : null;

  score++;
  scoreOutput.innerHTML = score;

  setTimeout(() => {
    checkWin();
  }, 500);
};

function reset() {
  const allImages = document.querySelectorAll(".card img");
  allImages.forEach((img) => {
    img.src = "images/hidden_icon.jpg";
  }, 1000);

  score = 0;
  matched_pairs = 0;
  scoreOutput.innerHTML = score;
  firstImage = null;
  secondImage = null;
}

function checkMatch() {
  clickable = false;

  firstImage.src === secondImage.src
    ? ((firstImage = null),
      (secondImage = null),
      (clickable = true),
      matched_pairs++)
    : setTimeout(() => {
        firstImage.src = "images/hidden_icon.jpg";
        secondImage.src = "images/hidden_icon.jpg";
        firstImage = null;
        secondImage = null;
        clickable = true;
      }, 1000);
}

const checkWin = () => {
  if (matched_pairs === 8) {
    alert(`You won! Your final score is ${score}`);
  }
};
