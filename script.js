document.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.querySelector(".main");      // 메인 메뉴 전체
  const allSubMenus = document.querySelectorAll(".sub"); // 모든 서브 메뉴

  // 메인 메뉴에 마우스를 올렸을 때 모든 서브메뉴 보이기
  mainMenu.addEventListener("mouseenter", () => {
    allSubMenus.forEach(sub => {
      sub.style.display = "block";
    });
  });

  // 메인 메뉴에서 마우스가 빠졌을 때 모두 숨기기
  mainMenu.addEventListener("mouseleave", () => {
    allSubMenus.forEach(sub => {
      sub.style.display = "none";
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
      const images = document.querySelectorAll("#banner_img img");
      let index = 0;

      images[index].classList.add("active");

      setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 3000);
    });

