function show(data) {
	var div = data.querySelector(".overlay");
	div.className = "overlay-show";
	setTimeout(() => {
		div.classList.remove("overlay-show");
		div.className = "overlay";
	}, 5000);
}

const header = `<h1>More about me</h1>
<p>My interests</p>
<p id="mobile" class="text-center">Tap on each picture to reveal something about me</p></div>`;

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("header").innerHTML = header;

	AOS.init();
});
