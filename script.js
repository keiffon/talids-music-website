const musicList = [
    {
        title: "Track 1",
        file: "music/track1.mp3"
    },
    {
        title: "Track 2",
        file: "music/track2.mp3"
    }
    // Add more tracks here
];

const ul = document.getElementById('musicList');
const audioPlayer = document.getElementById('audioPlayer');
const nowPlaying = document.getElementById('nowPlaying');

musicList.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.title;
    li.addEventListener('click', () => {
        audioPlayer.src = track.file;
        audioPlayer.play();
        nowPlaying.textContent = `Now Playing: ${track.title}`;
    });
    ul.appendChild(li);
});
