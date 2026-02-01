document.addEventListener("DOMContentLoaded", () => {

  const minYear = document.getElementById("minYear");
  const maxYear = document.getElementById("maxYear");
  const minLabel = document.getElementById("minYearLabel");
  const maxLabel = document.getElementById("maxYearLabel");
  const rangeSelected = document.getElementById("rangeSelected");

  const min = parseInt(minYear.min);
  const max = parseInt(maxYear.max);

  function updateRange() {
    let minVal = parseInt(minYear.value);
    let maxVal = parseInt(maxYear.value);

    // 交差防止
    if (minVal > maxVal) {
      minYear.value = maxVal;
      minVal = maxVal;
    }

    minLabel.textContent = minVal;
    maxLabel.textContent = maxVal;

    const left = ((minVal - min) / (max - min)) * 100;
    const right = ((maxVal - min) / (max - min)) * 100;

    rangeSelected.style.left = left + "%";
    rangeSelected.style.width = (right - left) + "%";
  }

  minYear.addEventListener("input", updateRange);
  maxYear.addEventListener("input", updateRange);

  // ★ 初期表示（これが無いと数字が動かない）
  updateRange();
});

function searchMusic() {
  const min = document.getElementById("minYear").value;
  const max = document.getElementById("maxYear").value;
  const genre = document.getElementById("genre").value;

  fetch(`${contextPath}/MusicList?mode=ajax&minYear=${min}&maxYear=${max}&genre=${genre}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("musicList").innerHTML = html;
    })
    .catch(err => console.error(err));
}
function syncHidden() {
  document.getElementById("minYearHidden").value =
    document.getElementById("minYear").value;
  document.getElementById("maxYearHidden").value =
    document.getElementById("maxYear").value;
}

document.getElementById("minYear").addEventListener("input", syncHidden);
document.getElementById("maxYear").addEventListener("input", syncHidden);

// 初期化
syncHidden();

