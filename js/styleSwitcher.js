const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    alert("clicked!");
    document.querySelector(".style-switcher").classList.toggle("open");
})


function test() {
    alert("Hello World!");
}