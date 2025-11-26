<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>検索結果</title>

<%-- cssの連携 --%>
<link rel="stylesheet"
	href="${pageContext.request.ContextPath}/css/style.css">
</head>
<body>
	<%-- ページタイトル --%>
	<div class="header">searchResult</div>
	<div class="main">
		<a href="top.jsp" class="top">TOP</a>
	</div>
	<div class="context">

		<%-- ページの見出し部分 --%>
		<div class="result-title">"無記入"の検索結果</div>

		<%-- ランキング一覧 --%>
		<ul class="result-list">
			<c:choose>
				<c:when test="${not empty 無記入}">
					<c:forEach var="s" items="${無記入}" varStatus="st">
						<li class="result-item"><c:out value="${s.title}" />-<c:out
								value="${s.artist}" /></li>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<li class="rank-item">なんか曲1-なんかアーティスト</li>
					<li class="rank-item">なんか曲2-なんかアーティスト</li>
					<li class="rank-item">なんか曲3-なんかアーティスト</li>
					<li class="rank-item">なんか曲4-なんかアーティスト</li>
					<li class="rank-item">なんか曲5-なんかアーティスト</li>
					<li class="rank-item">なんか曲6-なんかアーティスト</li>
					<li class="rank-item">なんか曲7-なんかアーティスト</li>
				</c:otherwise>
			</c:choose>
		</ul>
</body>
</html>