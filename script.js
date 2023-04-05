const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

/*activar el dark mode*/ 
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".fa-moon");
let isDark = false;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  toggleIcon.classList.toggle('fa-sun')
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};