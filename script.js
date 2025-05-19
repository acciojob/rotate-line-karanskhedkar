//your JS code here. If required.
let angle = 0;

document.addEventListener("DOMContentLoaded",()=>{
  const line = document.getElementById("line");
  if (line) {
	angle = angle + 2;
    line.style.transform = `rotate(${angle}deg)`;
    setInterval(() => {
      angle = angle + 2;
      line.style.transform = `rotate(${angle}deg)`;
    }, 20);
  }
})
