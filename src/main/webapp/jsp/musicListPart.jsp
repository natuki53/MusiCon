<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.List"%>
<%@ page import="model.Music"%>

<%
List<Music> list = (List<Music>) request.getAttribute("musicList");
if (list == null || list.isEmpty()) {
%>
    <p class="empty">曲がありません</p>
<%
} else {
    for (Music m : list) {
        String playLink;
        if (m.getUrl() != null && !m.getUrl().isEmpty()) {
            playLink = request.getContextPath() + "/PlayMusic?url="
                + java.net.URLEncoder.encode(m.getUrl(), "UTF-8");
        } else {
            playLink = request.getContextPath() + "/PlayMusic?id=" + m.getId();
        }
%>

<a href="<%=playLink%>" class="music-area btn-flat">
    <div class="title"><%=m.getTitle()%></div>
    <div class="artist"><%=m.getArtist()%></div>
    <div class="time">
        再生時間：<%=m.getMusicTime() / 60%>:<%=String.format("%02d", m.getMusicTime() % 60)%>
    </div>
    <div class="like">いいね：<%=m.getLikes()%></div>
</a>

<%
    }
}
%>
