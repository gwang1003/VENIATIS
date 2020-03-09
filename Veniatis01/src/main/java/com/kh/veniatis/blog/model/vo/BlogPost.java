package com.kh.veniatis.blog.model.vo;

import java.sql.Date;

public class BlogPost {
	private int bNo;
	private String mId;
	private String bTitle;
	private String bContent;
	private Date bEnrollDate;
	private Date bUpdateDate;	
	private String bTag;
	private int cateNo;
	private int uniNo; //회원별 고유번호!!
	
	
	private String cateName;
	private String changeName;
	private String searchValue; //검색어
	private String bTContent; // 글요약
	private int countLike; //좋아요 수
	private String mName; // 이름
	
	
	
	public String getmName() {
		return mName;
	}

	public void setmName(String mName) {
		this.mName = mName;
	}

	public BlogPost(int bNo, String mId, String bTitle, String bContent, Date bEnrollDate, Date bUpdateDate,
			String bTag, int cateNo, int uniNo, String cateName, String changeName, String searchValue,
			String bTContent, int countLike, String mName) {
		super();
		this.bNo = bNo;
		this.mId = mId;
		this.bTitle = bTitle;
		this.bContent = bContent;
		this.bEnrollDate = bEnrollDate;
		this.bUpdateDate = bUpdateDate;
		this.bTag = bTag;
		this.cateNo = cateNo;
		this.uniNo = uniNo;
		this.cateName = cateName;
		this.changeName = changeName;
		this.searchValue = searchValue;
		this.bTContent = bTContent;
		this.countLike = countLike;
		this.mName = mName;
	}

	public BlogPost() {}

	public int getbNo() {
		return bNo;
	}

	public void setbNo(int bNo) {
		this.bNo = bNo;
	}

	public String getmId() {
		return mId;
	}

	public void setmId(String mId) {
		this.mId = mId;
	}

	public String getbTitle() {
		return bTitle;
	}

	public void setbTitle(String bTitle) {
		this.bTitle = bTitle;
	}

	public String getbContent() {
		return bContent;
	}

	public void setbContent(String bContent) {
		this.bContent = bContent;
	}

	public Date getbEnrollDate() {
		return bEnrollDate;
	}

	public void setbEnrollDate(Date bEnrollDate) {
		this.bEnrollDate = bEnrollDate;
	}

	public Date getbUpdateDate() {
		return bUpdateDate;
	}

	public void setbUpdateDate(Date bUpdateDate) {
		this.bUpdateDate = bUpdateDate;
	}

	public String getbTag() {
		return bTag;
	}

	public void setbTag(String bTag) {
		this.bTag = bTag;
	}

	public int getCateNo() {
		return cateNo;
	}

	public void setCateNo(int cateNo) {
		this.cateNo = cateNo;
	}

	public int getUniNo() {
		return uniNo;
	}

	public void setUniNo(int uniNo) {
		this.uniNo = uniNo;
	}

	public String getCateName() {
		return cateName;
	}

	public void setCateName(String cateName) {
		this.cateName = cateName;
	}

	public String getChangeName() {
		return changeName;
	}

	public void setChangeName(String changeName) {
		this.changeName = changeName;
	}

	public String getSearchValue() {
		return searchValue;
	}

	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}

	public String getbTContent() {
		return bTContent;
	}

	public void setbTContent(String bTContent) {
		this.bTContent = bTContent;
	}

	public int getCountLike() {
		return countLike;
	}

	public void setCountLike(int countLike) {
		this.countLike = countLike;
	}

	public BlogPost(int bNo, String mId, String bTitle, String bContent, Date bEnrollDate, Date bUpdateDate,
			String bTag, int cateNo, int uniNo, String cateName, String changeName, String searchValue,
			String bTContent, int countLike) {
		super();
		this.bNo = bNo;
		this.mId = mId;
		this.bTitle = bTitle;
		this.bContent = bContent;
		this.bEnrollDate = bEnrollDate;
		this.bUpdateDate = bUpdateDate;
		this.bTag = bTag;
		this.cateNo = cateNo;
		this.uniNo = uniNo;
		this.cateName = cateName;
		this.changeName = changeName;
		this.searchValue = searchValue;
		this.bTContent = bTContent;
		this.countLike = countLike;
	}

	@Override
	public String toString() {
		return "BlogPost [bNo=" + bNo + ", mId=" + mId + ", bTitle=" + bTitle + ", bContent=" + bContent
				+ ", bEnrollDate=" + bEnrollDate + ", bUpdateDate=" + bUpdateDate + ", bTag=" + bTag + ", cateNo="
				+ cateNo + ", uniNo=" + uniNo + ", cateName=" + cateName + ", changeName=" + changeName
				+ ", searchValue=" + searchValue + ", bTContent=" + bTContent + ", countLike=" + countLike + ", mName="
				+ mName + "]";
	}

}
