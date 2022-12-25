$(".carousel-section-1 .owl-carousel").owlCarousel({
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

$(".carousel-section-2 .owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 25, // 外距 10px
  nav: true, // 顯示點點
  autoplay:true,
  autoplayTimeout:3000,
  responsive: {
    0: {
      items: 1.5,
      center:true // 螢幕大小為 0~600 顯示 1 個項目
    },
    1024:{
      items: 3
    }
  }
});
$(".carousel-section-4 .owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 25, // 外距 10px
  nav: true, // 顯示點點
  autoplay:true,
  autoplayTimeout:3000,
  responsive: {
    0: {
      items: 1.5,
      center:true // 螢幕大小為 0~600 顯示 1 個項目
    },
    1024:{
      items: 3
    }
  }
});