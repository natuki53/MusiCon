<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>MUSICON 採用情報</title>
    <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="<%= request.getContextPath() %>/css/recruit.css">
</head>
<body>
<div class="container">
  <!-- header -->
  <header class="header">
  <img src="${pageContext.request.contextPath}/png/MusiConLogo.png"
		class="icon" width="80" alt="ロゴアイコン">
    <div class="logo">MUSICON Co.</div>
    <div class="sub">採用情報</div>
  </header>

  <!-- hero -->
  <section class="hero">
    <div class="hero-text">
      <h1>
        Singing people.<br>
        Singing the future.
      </h1>
      <p>
        音楽で未来を創る。<br>
        音楽で可能性を拓く。
      </p>
    </div>
    <div class="hero-image"></div>
  </section>

  <!-- info grid -->
  <section class="info-grid">
    <div class="card">
      <div class="label">募集職種</div>
      <div class="value">
        ミュージシャン<br>
        SE / Webデザイナー<br>
        広報職（広報ツールの作成）
      </div>
    </div>

    <div class="card">
      <div class="label">募集人数</div>
      <div class="value">大多数</div>
    </div>

    <div class="card">
      <div class="label">応募資格</div>
      <div class="value">
        2026年3月31日に修了・卒業見込みの<br>
        高校・中学校の方
      </div>
    </div>

    <div class="card">
      <div class="label">形態</div>
      <div class="value">正職員 / パート・アルバイト</div>
    </div>

    <div class="card">
      <div class="label">勤務時間</div>
      <div class="value">09:15〜10:45（遅刻禁止）</div>
    </div>

    <div class="card">
      <div class="label">給与</div>
      <div class="value">
        高卒：421,980円<br>
        中卒：381,980円
      </div>
    </div>
  </section>
</div>

</body>
</html>
