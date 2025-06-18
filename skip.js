const SKIP_TIME = 90; // SECOND
const BUTTON_ID = 'skip-opener-btn';

function createSkipButton(video) {
    if(document.getElementById(BUTTON_ID)) return;
    
    const btn = document.createElement('button');
    btn.id = BUTTON_ID;
    btn.innerText = "⏭️ Skip";

    btn.onclick = () => {
        video.currentTime = Math.min(video.duration, video.currentTime + SKIP_TIME);
        btn.remove(); // Hide button before clicked
    };

    // paste button in the DOM
    document.body.appendChild(btn);

    // Hide before 10 sec
    setTimeout(() => {
        if(btn && btn.parentNode) btn.remove();
    }, 10000);
}

function tryAttach() {
    const video = document.querySelector('video');

    if(video) {
        video.addEventListener('play', () => {
            createSkipButton(video);
        });
    } else {
        setTimeout(tryAttach, 1000); // Wait if video not found
    }
}

tryAttach();