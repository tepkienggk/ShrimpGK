let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'OrDB4jpA1g8',
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'loop': 1,
            'playlist': 'OrDB4jpA1g8'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(100); // Set volume to 100
}
