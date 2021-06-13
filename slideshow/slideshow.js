'use strict'

{
  //
  // Slideshowの変数宣言
  //

  // Slideshowに持ち入る画像を格納
  const images = [
    '/web-site2/slideshow/images/image1.jpg',
    '/web-site2/slideshow/images/image2.jpg',
    '/web-site2/slideshow/images/image3.jpg',
    '/web-site2/slideshow/images/image4.jpg',
  ];

  // メイン画像に描画されるimagesのindexを指定する変数
  // 初期値はimages[0]を設定
  let currentIndex = 0;
  // html の img要素
  const slideImage = document.getElementById('slide-image');
  // 次の画像に切り替えるボタン要素
  const nextBtn = document.getElementById('next-btn');
  // 前の画像に切り替えるボタン要素
  const prevBtn = document.getElementById('prev-btn');
  // Slideshowをスタートさせるボタン要素
  const startBtn = document.getElementById('start-btn');
  // Slideshowをストップさせるボタン要素
  const stopBtn = document.getElementById('stop-btn');
  // setTimeoutを止める為の変数
  let intervalId;


  //
  // Slideshow の処理 (関数) まとめ
  //

  // 画像を１つ次に進める処理
  function nextSlide() {
    slideImage.src = images[currentIndex];
    currentIndex++;
    if (currentIndex > images.length - 1) currentIndex = 0;
  }

  // 画像を１つ前に戻す処理
  function prevSlide() {
    slideImage.src = images[currentIndex];
    currentIndex--;
    if (currentIndex < 0)  currentIndex = images.length - 1;
  }

  // 画像を1秒ごとに切り替える処理
  function startSlide() {
    startBtn.disabled = true
    stopBtn.disabled = false

    intervalId = setInterval(nextSlide, 1000);
  }

  // 画像が自動切り替えを止める処理
  function stopSlide() {
    startBtn.disabled = false
    stopBtn.disabled = true

    clearInterval(intervalId);
  }

  //
  // Slideshow の 関数を実行する処理まとめ
  //

  // クリックしたら次の画像に切り替える処理
  nextBtn.addEventListener('click', nextSlide);

  // クリックしたら前の画像に切り替える処理
  prevBtn.addEventListener('click', prevSlide);

  // クリックしたらSlideshowをスタートする処理
  startBtn.addEventListener('click', startSlide);

  // クリックしたらSlideshowを止める処理
  stopBtn.addEventListener('click', stopSlide);

}
