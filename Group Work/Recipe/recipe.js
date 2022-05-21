function enlargeImg(img) {
    img.style.transform = "scale(1.1)";
    img.style.transition =
      "transform 0.25s ease";
}

function decreaseImg(img) {
    img.style.transform = "scale(1)";
    img.style.transition =
      "transform 0.25s ease";
}