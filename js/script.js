{
  const welcome = () => {
    console.log("Witam wszystkich / Hi everyone");
  }

  welcome()

  const toggleBackground = () => {
    const styleButtonSecond = document.querySelector(".js-styleColor");
    const bodyStyle = document.querySelector(".js-body");
    const navDivStyleSecond = document.querySelector(".js-nav__div--style");
    const navDivStyle = document.querySelector(".js-nav__div");
    const navLinkStyle = document.querySelector(".js-nav__link");
    const tableCellHeader = document.querySelector(".js-table__cell--header");
    const textSizeButtonSecond = document.querySelector(".js-textSize");

    bodyStyle.classList.toggle("bodyDark");
    navDivStyleSecond.classList.toggle("navDark__div--style");
    textSizeButtonSecond.classList.toggle("navDark__button");
    styleButtonSecond.classList.toggle("navDark__button");
    navDivStyle.classList.toggle("navDark__div");
    navLinkStyle.classList.toggle("navDark__link");
    tableCellHeader.classList.toggle("tableDark__cell--header");
  }

  const toggleBackgroundButton = () => {
    const styleButton = document.querySelector(".js-styleColor");
    styleButton.addEventListener("click", toggleBackground);
  }

  toggleBackgroundButton();

  

  const toggleSize = () => {
    const bodyTextSize = document.querySelector(".body")
    bodyTextSize.classList.toggle("body--textSize");
  }

  const toggleSizebutton = () => {
  const textSizeButton = document.querySelector(".js-textSize");
  textSizeButton.addEventListener("click", (toggleSize))
  };

  toggleSizebutton();
}