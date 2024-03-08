window.onload = () => {
  if (window.innerWidth < 768) {
    // トグルメニューボタンを追加
    let element = document.getElementById("menu");
    element.insertAdjacentHTML(
      "beforebegin",
      '<button id="toggle-menu" class="open-line"><div></div></button>'
    );

    const toggle = document.getElementById("toggle-menu");
    const menus = document.querySelectorAll("header #menu li");
    const menuLines = document.querySelectorAll(".open-line");

    toggle.addEventListener("click", () => {
      menus.forEach((x) => (x.style.display = x.style.display == "block" ? "none" : "block"));
      toggle.classList.contains("open-line")
        ? toggle.classList.remove("open-line")
        : toggle.classList.add("open-line");
      toggle.classList.contains("close-line")
        ? toggle.classList.remove("close-line")
        : toggle.classList.add("close-line");
    });
  }
};
