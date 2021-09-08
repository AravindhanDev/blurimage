const btn = document.querySelector(".btn");
const div = document.querySelector("div");

btn.addEventListener("click", () => {
	div.classList.toggle("container");
});
