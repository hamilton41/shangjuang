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
    autoplay:true,
    autoplayTimeout:3000,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      }
    }
  });


let itemImg = document.querySelectorAll(".section-2 .content-container .item img");
let item = document.querySelectorAll(".section-2 .content-container .item");
let showImg = document.querySelector(".show_img");
let itemTxt = document.querySelectorAll(".section-2 .content-container .item-txt");
for(let i=0;i<itemImg.length;i++){
  item[i].addEventListener("click",function(){
      let imgSrc = itemImg[i].src;
      showImg.innerHTML='<img src="'+imgSrc+'" alt="" style="width: 40%;">'+ '<p> '+itemTxt[i].textContent+'</p>';
      showImg.classList.add("active");
  });
}

  showImg.addEventListener("click",function(){
        
          showImg.classList.remove("active");
          
        
  });
