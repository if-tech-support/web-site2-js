'use strict'

{
  //  slideshow
  // 変数宣言
  //

  // SlideShowに持ち入る画像を格納
  const images = [
    'slideshow-images/image1.jpg',
    'slideshow-images/image2.jpg',
    'slideshow-images/image3.jpg',
    'slideshow-images/image4.jpg',
  ];

  // メイン画像に描画されるimagesのindexを指定する変数
  // 初期値はimages[0]を設定
  let currentIndex = 0;
  // html の img要素
  const slideImage = document.getElementById('slide-image');
  // Slideshowをスタートさせるボタン要素
  const startBtn = document.getElementById('start-btn');
  // Slideshowをストップさせるボタン要素
  const stopBtn = document.getElementById('stop-btn');
  // setTimeoutを止める為の変数
  let timeoutId;


  //
  // Slideshow イベント
  //

  // Slideshowをスタートさせるイベント
  startBtn.addEventListener('click', function startSlide() {
    startBtn.disabled = true
    stopBtn.disabled = false
    
    timeoutId = setInterval(() => {
      slideImage.src = images[currentIndex]; // img の src 書き換え
      currentIndex++;
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
    }, 1000);
  });

  // Slideshowを止めるイベント
  stopBtn.addEventListener('click', function stopSlide() {
    startBtn.disabled = false
    stopBtn.disabled = true
    clearInterval(timeoutId);
  });

}