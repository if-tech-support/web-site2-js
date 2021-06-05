'use strict'
{
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  const modal = document.getElementById('modal');

  // モーダル表示
  openBtn.addEventListener('click', function() {
    modal.classList.remove('close-modal')
  })

  // モーダル削除
  closeBtn.addEventListener('click', function() {
    modal.classList.add('close-modal')
  })

}
