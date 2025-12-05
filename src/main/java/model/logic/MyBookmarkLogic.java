package model.logic;

import java.util.List;

import dao.BookmarkDAO;
import model.Bookmark;
import model.Music;
import model.User;

public class MyBookmarkLogic {
	private BookmarkDAO dao = new BookmarkDAO();
	
	public boolean execute(User user, Music music) {
		return dao.registerBookmark(user, music);
	}
	
	public List<Bookmark> getBookmark(User user) {
		// DAO でランキング全件取得
		List<Bookmark> bookmarkList = dao.getBookmark(user);
		System.out.println("Logicでリスト取得:" + bookmarkList);
		return bookmarkList;
	}
}
