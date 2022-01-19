const menu = document.getElementById("menu");
document.getElementsByClassName("animasyon")[0].style.left = "0";
menu.addEventListener("change", () => {
  let menuValue = menu.options[menu.selectedIndex].value;
  let selectedMenu = document.getElementsByClassName(`${menuValue}`);
  console.log(selectedMenu);
  selectedMenu.style.left = "0";
});
