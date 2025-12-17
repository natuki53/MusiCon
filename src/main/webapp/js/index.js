function setupMarquee(track) {
  const baseItem = track.children[0];

  // 画面幅×2を超えるまで複製
  while (track.offsetWidth < window.innerWidth * 2) {
    track.appendChild(baseItem.cloneNode(true));
  }

  // 無限スクロール用にもう一度複製
  const items = Array.from(track.children);
  items.forEach(item => {
    track.appendChild(item.cloneNode(true));
  });
}

const topTrack = document.getElementById('track-top');
const bottomTrack = document.getElementById('track-bottom');

setupMarquee(topTrack);
setupMarquee(bottomTrack);

// リサイズ対応
window.addEventListener('resize', () => {
  topTrack.innerHTML = '<span class="item">MUSICON</span>';
  bottomTrack.innerHTML = '<span class="item">MUSICON</span>';
  setupMarquee(topTrack);
  setupMarquee(bottomTrack);
});
