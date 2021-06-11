'use strict'
{
  // Modalの変数宣言
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  const modal = document.getElementById('modal');


  // Modal の表示/非表示を切り替える処理(関数)
  function changeModal(isClosed) {
    if (isClosed) {
      modal.classList.add('show-modal')
    } else {
      modal.classList.remove('show-modal')
    }
  }

  // クリックしたらModalを表示する処理
  openBtn.addEventListener('click', function () { changeModal(true)})

  // クリックしたらModalを削除する処理
  closeBtn.addEventListener('click', function () { changeModal(false)})

}
