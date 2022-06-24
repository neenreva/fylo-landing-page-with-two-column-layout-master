document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.previousElementSibling.value.match(/^\S+@\S+\.\S+$/m)) {
      e.target.nextElementSibling.classList.add("hidden");
      e.target.previousElementSibling.style.border = "1px solid";
    } else {
      e.target.previousElementSibling.style.border = "1px solid red";
      e.target.nextElementSibling.classList.remove("hidden");
    }
  });
});
