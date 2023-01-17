let textSizeButton = document.querySelector(".js-textSize");
let textSizeButtonSecond = document.querySelector(".js-textSize");
let bodyTextSize = document.querySelector(".body");
let styleButton = document.querySelector(".js-styleColor");
let styleButtonSecond = document.querySelector(".js-styleColor");
let bodyStyle = document.querySelector(".js-body");
let navDivStyleSecond = document.querySelector(".js-nav__div--style");
let navDivStyle = document.querySelectorAll(".js-nav__div");
let navLinkStyle = document.querySelectorAll(".js-nav__link");
let tableCellHeader = document.querySelectorAll(".js-table__cell--header");

textSizeButton.addEventListener("click", () => {
  bodyTextSize.classList.toggle("body--textSize");
});

styleButton.addEventListener("click", () => {
  bodyStyle.classList.toggle("bodyDark");
  navDivStyleSecond.classList.toggle("navDark__div--style");
  textSizeButtonSecond.classList.toggle("navDark__button");
  styleButtonSecond.classList.toggle("navDark__button");
  for (let element of navDivStyle) {
    element.classList.toggle("navDark__div")
  }
  for (let element of navLinkStyle) {
    element.classList.toggle("navDark__link")
  }
  for (let element of tableCellHeader) {
    element.classList.toggle("tableDark__cell--header")
  }
});