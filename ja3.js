document.querySelector('button').addEventListener('click', function() {
    alert('Added to cart!');
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    if (video) {
        video.play(); // เริ่มเล่นวิดีโอ
    }
});