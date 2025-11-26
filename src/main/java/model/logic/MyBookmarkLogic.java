package model.logic;

public class MyBookmarkLogic {
	
	//マイページ情報の取得
	public boolean execute( ) {
		BookmarkDAO dao = new BookmarkDAO();
		if(dao./*メソッド名*/()) {
			return true;
		}
		return false;
	}
}
