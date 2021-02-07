var openModal = false;

window.onload = function() {
  var soButton = document.getElementById("so-button");
  var token = soButton.getAttribute('data-token');
  console.log(token);
  var modal = `
    <div class="modal modal-closed" id="so-modal">
      <span class="close" onclick="closeModal()">&times;</span>
      <div class="center text-center launch-form">
        <iframe class="launch-form" src="https://script.google.com/macros/s/AKfycbyfOvzb0-sDv0lGMXBxa-BNtwBgkHxKYr0BWGl57ufmU3B_BEAP/exec?folderId=challengeId&token=token" title="submit-form" width="100%" frame-border="0" margin-height="0" margin-width="0" >Loading...</iframe>
      </div>
     </div>
  `;
  soButton.insertAdjacentHTML('afterend', modal);
  soButton.addEventListener('click', openModal);
}

var openModal = function() {
  document.body.style.overflowY = 'hidden';
  var modal = document.getElementById("so-modal");
  modal.classList.remove('modal-closed');
}

function closeModal() {
  document.body.style.overflowY = 'scroll';
  var modal = document.getElementById("so-modal");
  modal.classList.add('modal-closed');
}
