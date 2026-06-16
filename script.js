setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.fontSize =
        (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 500);