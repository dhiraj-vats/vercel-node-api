let score = 0;
const scoreEl = document.getElementById("score");
document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", () => {
    score += 10;
    scoreEl.textContent = score;
    // simple animation
    box.style.transform = "scale(1.2)";
    setTimeout(() => box.style.transform = "scale(1)", 200);
  });
});