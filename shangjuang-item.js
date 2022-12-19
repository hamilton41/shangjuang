let btn = document.querySelectorAll(".btn");
let contentContainer = document.querySelectorAll(".content-container");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        let btnActive = document.querySelector(".btn.active");
        btnActive.classList.remove("active");
        let contentContainerActive = document.querySelector(".status-active");
        contentContainerActive.classList.remove("status-active");
        btn[i].classList.add("active");
        contentContainer[i].classList.add("status-active");
    });
}


let infor = document.querySelectorAll(".infor-title");
let plusBtn = document.querySelectorAll(".section-2 .content-container .infor .infor-title h1 span");
for(let q=0;q<infor.length;q++){
    infor[q].addEventListener("click",function(){
        let inforContent = document.querySelectorAll(".infor-content");
        inforContent[q].classList.toggle("infor-content-open");
        plusBtn[q].classList.toggle("btn-scale");
    });
}

$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: true, // 顯示點點
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      }
    }
  });