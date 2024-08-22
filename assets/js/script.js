document.getElementById('overlay').addEventListener('click', function () {
    this.style.display = 'none';
    var video = document.getElementById('video');
    video.style.display = 'block'; 
    video.play(); 

    var top_left_button = document.getElementById('top-left-button');
    top_left_button.style.display = 'block'; 
});

function startAnimation() {
    const overlay = document.getElementById('overlay');
    const card = document.getElementById('card');
    overlay.style.display = 'none';
    card.classList.add('show');
}

document.getElementById('top-left-button').addEventListener('click', function () {
    var video = document.getElementById('video');
    var icon = this.querySelector('i');

    if (video.muted) {
        video.muted = false;
        icon.classList.remove('bi-volume-mute-fill');
        icon.classList.add('bi-volume-up-fill');
    } else {
        video.muted = true;
        icon.classList.remove('bi-volume-up-fill');
        icon.classList.add('bi-volume-mute-fill');
    }
});
