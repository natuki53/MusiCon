document.addEventListener("DOMContentLoaded", () => {

  const minYear = document.getElementById("minYear");
  const maxYear = document.getElementById("maxYear");
  const minLabel = document.getElementById("minYearLabel");
  const maxLabel = document.getElementById("maxYearLabel");
  const rangeSelected = document.getElementById("rangeSelected");

  const min = parseInt(minYear.min);
  const max = parseInt(maxYear.max);

  function updateUI(minVal, maxVal) {
    minLabel.textContent = minVal;
    maxLabel.textContent = maxVal;

    const left = ((minVal - min) / (max - min)) * 100;
    const right = ((maxVal - min) / (max - min)) * 100;

    rangeSelected.style.left = left + "%";
    rangeSelected.style.width = (right - left) + "%";
  }

  // ▼ min を動かしたとき
  minYear.addEventListener("input", () => {
    const minVal = parseInt(minYear.value);
    const maxVal = parseInt(maxYear.value);

    if (minVal > maxVal) {
      // 超えたら止める（相手は動かさない）
      minYear.value = maxVal;
      updateUI(maxVal, maxVal);
      return;
    }

    updateUI(minVal, maxVal);
  });

  // ▼ max を動かしたとき
  maxYear.addEventListener("input", () => {
    const minVal = parseInt(minYear.value);
    const maxVal = parseInt(maxYear.value);

    if (maxVal < minVal) {
      // 超えたら止める（相手は動かさない）
      maxYear.value = minVal;
      updateUI(minVal, minVal);
      return;
    }

    updateUI(minVal, maxVal);
  });

  // 初期表示
  updateUI(parseInt(minYear.value), parseInt(maxYear.value));
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

