const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
});

yesBtn.addEventListener("click", () => {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("yesScreen").classList.remove("hidden");
});
