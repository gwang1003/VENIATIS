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
	private int matchNo; // 상대회원
	private String mName;  // 상대회원이름
	private String bTitle;//게시글제목
	
	private int uniNo; //고유번호

	public BlogAlert(int baNo, int bNo, int rNo, int lNo, int mNo, Date inDate, int matchNo, String mName,
			String bTitle, int uniNo) {
		super();
		this.baNo = baNo;
		this.bNo = bNo;
		this.rNo = rNo;
		this.lNo = lNo;
		this.mNo = mNo;
		this.inDate = inDate;
		this.matchNo = matchNo;
		this.mName = mName;
		this.bTitle = bTitle;
		this.uniNo = uniNo;
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

	public int getMatchNo() {
		return matchNo;
	}

	public void setMatchNo(int matchNo) {
		this.matchNo = matchNo;
	}

	public String getmName() {
		return mName;
	}

	public void setmName(String mName) {
		this.mName = mName;
	}

	public String getbTitle() {
		return bTitle;
	}

	public void setbTitle(String bTitle) {
		this.bTitle = bTitle;
	}

	public int getUniNo() {
		return uniNo;
	}

	public void setUniNo(int uniNo) {
		this.uniNo = uniNo;
	}

	@Override
	public String toString() {
		return "BlogAlert [baNo=" + baNo + ", bNo=" + bNo + ", rNo=" + rNo + ", lNo=" + lNo + ", mNo=" + mNo
				+ ", inDate=" + inDate + ", matchNo=" + matchNo + ", mName=" + mName + ", bTitle=" + bTitle + ", uniNo="
				+ uniNo + "]";
	}

	
	
	
}
