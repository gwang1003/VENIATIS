package com.kh.veniatis.common.likes.model.vo;

public class Likes {
	private int likeNo; // 좋아요 번호
	private int mNo; // 유저넘버
	private int bNo; // 블로그 글 번호
	private int pNo; // 프로젝트 글 번호
	public Likes(int likeNo, int mNo, int bNo, int pNo) {
		super();
		this.likeNo = likeNo;
		this.mNo = mNo;
		this.bNo = bNo;
		this.pNo = pNo;
	}
	public Likes() {};
	public int getLikeNo() {
		return likeNo;
	}
	public void setLikeNo(int likeNo) {
		this.likeNo = likeNo;
	}
	public int getmNo() {
		return mNo;
	}
	public void setmNo(int mNo) {
		this.mNo = mNo;
	}
	public int getbNo() {
		return bNo;
	}
	public void setbNo(int bNo) {
		this.bNo = bNo;
	}
	public int getpNo() {
		return pNo;
	}
	public void setpNo(int pNo) {
		this.pNo = pNo;
	}
	@Override
	public String toString() {
		return "Like [likeNo=" + likeNo + ", mNo=" + mNo + ", bNo=" + bNo + ", pNo=" + pNo + "]";
	}
	
	
	
}
