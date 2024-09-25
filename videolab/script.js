console.log("page loaded...");

const mainVideo = document.getElementById('mainVideo');
const videoTitle = document.getElementById('videoTitle');
const videoInfo = document.getElementById('videoInfo');
const smallVideos = document.querySelectorAll('.video-small');

function playVideo(src, title, info) {
    mainVideo.src = src;
    mainVideo.load();
    mainVideo.play();
    videoTitle.textContent = title;
    videoInfo.textContent = info;
}

mainVideo.addEventListener('mouseover', function() {
    this.play();
});

mainVideo.addEventListener('mouseout', function() {
    this.pause();
});

smallVideos.forEach(video => {
    const thumbnail = video.querySelector('.vid-s');
    const previewVideo = document.createElement('video');
    previewVideo.src = video.getAttribute('data-src');
    previewVideo.muted = true;
    previewVideo.loop = true;
    previewVideo.classList.add('preview-video');
    video.appendChild(previewVideo);

    video.addEventListener('mouseover', function() {
        previewVideo.play();
    });

    video.addEventListener('mouseout', function() {
        previewVideo.pause();
        previewVideo.currentTime = 0;
    });

    video.addEventListener('click', function() {
        const src = this.getAttribute('data-src');
        const title = this.getAttribute('data-title');
        const info = this.getAttribute('data-info');
        playVideo(src, title, info);
    });
});