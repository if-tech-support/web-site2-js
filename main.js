'use strict'

{
  // 変数宣言

  // 開閉されるコンテンツ
  const menuContents = document.querySelectorAll(".menu-content");

  // 下矢印マークの要素
  const downArrow = document.querySelectorAll(".fa-angle-down");

  // 上矢印マークの要素
  const upArrow = document.querySelectorAll(".fa-angle-up");


  // 関数・イベントの用意

  // 下矢印を押した時のイベント
  for (let i = 0; i < downArrow.length; i++) {
    downArrow[i].addEventListener('click', function openContents() {
      menuContents[i].classList.add('is-open');
      menuContents[i].classList.remove('is-close');

      downArrow[i].classList.add('is-close');
      downArrow[i].classList.remove('is-open');

      upArrow[i].classList.add('is-open');
      upArrow[i].classList.remove('is-close');
    })
  }

  // 上矢印を押した時のイベント
  for (let i = 0; i < upArrow.length; i++) {
    upArrow[i].addEventListener('click', function openContents() {
      menuContents[i].classList.add('is-close');
      menuContents[i].classList.remove('is-open');

      downArrow[i].classList.add('is-open');
      downArrow[i].classList.remove('is-close');

      upArrow[i].classList.add('is-close');
      upArrow[i].classList.remove('is-open');
    })
  }

}