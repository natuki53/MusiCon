package model;



public class Bookmark {
	private int bookmark_id;
	private String title ;//ブックマークへ登録したユーザの番号
	private String artist;//ブックマークへ登録した曲の番号
	
    // コンストラクタ : フィールド設定
	public Bookmark(int bookmark_id,String title,String artist){
		this.bookmark_id = bookmark_id;
		this.title = title;
		this.artist = artist;
	}
	public int getBookmark_id() { return bookmark_id; }
	public String getTitle() { return title; }
	public String getArtist() { return artist; }
}
