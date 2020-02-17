package com.kh.veniatis.blog.model.vo;

import java.sql.Date;

public class BlogAlert {
	public BlogAlert() {}
	
	private int baNo; //알림번호
	private int bNo; //게시글번호
	private int rNo; //댓글번호
	private int lNo; //좋아요번호
	private int mNo; //회원번호
	private Date inDate; // 알림등록일
	public BlogAlert(int baNo, int bNo, int rNo, int lNo, int mNo, Date inDate) {
		super();
		this.baNo = baNo;
		this.bNo = bNo;
		this.rNo = rNo;
		this.lNo = lNo;
		this.mNo = mNo;
		this.inDate = inDate;
	}
	public int getBaNo() {
		return baNo;
	}
	public void setBaNo(int baNo) {
		this.baNo = baNo;
	}
	public int getbNo() {
		return bNo;
	}
	public void setbNo(int bNo) {
		this.bNo = bNo;
	}
	public int getrNo() {
		return rNo;
	}
	public void setrNo(int rNo) {
		this.rNo = rNo;
	}
	public int getlNo() {
		return lNo;
	}
	public void setlNo(int lNo) {
		this.lNo = lNo;
	}
	public int getmNo() {
		return mNo;
	}
	public void setmNo(int mNo) {
		this.mNo = mNo;
	}
	public Date getInDate() {
		return inDate;
	}
	public void setInDate(Date inDate) {
		this.inDate = inDate;
	}
	@Override
	public String toString() {
		return "BlogAlert [baNo=" + baNo + ", bNo=" + bNo + ", rNo=" + rNo + ", lNo=" + lNo + ", mNo=" + mNo
				+ ", inDate=" + inDate + "]";
	}

	
	
	
	
}
