(() => {

    const shields = document.querySelectorAll('.sigilContainer'),
    lightBox = document.querySelector('.lightbox'),
    lbClose = lightBox.querySelector('.close'),
    houseVideo = lightBox.querySelector('video');

    function popLightbox () {
      lightBox.classList.add('show-lightbox');
      houseVideo.play();
    }

    function closeLightbox() {
      lightBox.classList.remove('show-lightbox');

      houseVideo.pause();
      houseVideo.currentTime = 0;
    }

    shields.forEach(shield => shield.addEventListener('click', popLightbox))

    lbClose.addEventListener('click', closeLightbox);

})();
