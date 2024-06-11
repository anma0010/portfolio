const title = document.querySelector(".title");
const config = {
  wait: 1000,
  speed: 100,
};
const content = title.textContent.trim();
title.textContent = "";
console.log(content);
let count = 0;
setTimeout(() => {
  const counter = setInterval(() => {
    title.textContent += content[count];
    count++;
    if (count >= content.length) {
      clearInterval(counter);
    }
  }, config.speed);
}, config.wait);
