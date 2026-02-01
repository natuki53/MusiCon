package servlet;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import model.Music;
import service.PlayMusicService;

@WebServlet("/MusicList")
public class MusicList extends HttpServlet {
	private static final long serialVersionUID = 1L;

protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

    HttpSession session = request.getSession();
    String userName = (String) session.getAttribute("user_name");
    if (userName == null) {
        response.sendRedirect(request.getContextPath() + "/jsp/login.jsp");
        return;
    }

    // パラメータ取得
    String minYearStr = request.getParameter("minYear");
    String maxYearStr = request.getParameter("maxYear");
    String genre = request.getParameter("genre");
    String mode = request.getParameter("mode");

    PlayMusicService service = new PlayMusicService();
    List<Music> musicList;

    if (minYearStr != null && maxYearStr != null) {
        int minYear = Integer.parseInt(minYearStr);
        int maxYear = Integer.parseInt(maxYearStr);
        musicList = service.searchByYearAndGenre(minYear, maxYear, genre);
    } else {
        musicList = service.getMusicListByIdOrder();
    }

    request.setAttribute("musicList", musicList);

    if ("ajax".equals(request.getParameter("mode"))) {
        RequestDispatcher rd =
            request.getRequestDispatcher("/jsp/musicList.jsp");
        rd.forward(request, response);
        return;
    }


    // 通常表示
    RequestDispatcher dispatcher =
        request.getRequestDispatcher("/jsp/musicList.jsp");
    dispatcher.forward(request, response);
}
}