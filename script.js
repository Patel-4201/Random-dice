const ele = document.querySelector("img");
const bot = document.querySelector("button");
console.log(ele);

function getrandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function getrandomUrl() {
  const numWords = ["one", "two", "three", "four", "five", "six"];
  const rn = getrandom() - 1;
  console.log(numWords[rn]);

  const url = `assets/images/dice-${numWords[rn]}.png`;
  return url;
}
ele.src = getrandomUrl();

bot.addEventListener("click", function () {
  ele.src = getrandomUrl();
});
