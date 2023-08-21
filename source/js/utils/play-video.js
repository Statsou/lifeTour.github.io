const playVideo = function () {
  if (document.querySelector('.video__preview') && document.querySelector('.video__button-play') && document.getElementById('video')) {
    const videoPreview = document.querySelector('.video__preview');
    const buttonPlay = videoPreview.querySelector('.video__button-play');
    const video = document.getElementById('video');

    buttonPlay.addEventListener('click', () => {
      videoPreview.style.visibility = 'hidden';
      video.style.display = 'block';
      video.src += '&autoplay=1';
    });
  }
};

export {playVideo};
