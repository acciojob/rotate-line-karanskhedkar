//your JS code here. If required.
let angle = 0;

const rotate = () => {
  const line = document.getElementById("line");
  console.log(line)
  if (line) {
    setInterval(() => {
      angle = angle + 2;
      line.style.transform += `rotate(${angle}deg)`;
    }, 2000);
  }
};
rotate();
