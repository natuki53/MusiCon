package model.logic;

import java.util.List;

public class MyBookmarkLogic {
	private BookmarkDAO dao = new BookmarkDAO();
	
	//マイページ情報の取得
	public List<Bookmark> get( ) {
		List<Bookmark> allList = dao.get();
	}
}
