package com.kh.veniatis.common.files.model.vo;

import java.sql.Date;

public class Files {
	private int fileNo; // 파일번호
	private int bNo; //블로그 글 번호
	private int pNo; // 프로젝트 번호
	private int mNo; // 유저 번호
	private int conNo; // 공모전 번호
	private int gNo; // 가이드 번호
	private int category; // 카테고리 1_블로그 2_프로젝트 3_유저  4_공모전 5_가이드
	private String originName; //원래이름
	private String changeName; //바뀐이름
	private String filePath; // 수정날짜
	private Date uploadDate; // 수정날짜
	private String status; //상태
	private int fileLevel; // 파일레벨 1_썸네일 2_기본
	
	
	public Files() {}


	public Files(int category, String originName, String changeName, String filePath) {
		super();
		this.category = category;
		this.originName = originName;
		this.changeName = changeName;
		this.filePath = filePath;
	}


	public int getFileNo() {
		return fileNo;
	}


	public void setFileNo(int fileNo) {
		this.fileNo = fileNo;
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


	public int getmNo() {
		return mNo;
	}


	public void setmNo(int mNo) {
		this.mNo = mNo;
	}


	public int getConNo() {
		return conNo;
	}


	public void setConNo(int conNo) {
		this.conNo = conNo;
	}


	public int getgNo() {
		return gNo;
	}


	public void setgNo(int gNo) {
		this.gNo = gNo;
	}


	public int getCategory() {
		return category;
	}


	public void setCategory(int category) {
		this.category = category;
	}


	public String getOriginName() {
		return originName;
	}


	public void setOriginName(String originName) {
		this.originName = originName;
	}


	public String getChangeName() {
		return changeName;
	}


	public void setChangeName(String changeName) {
		this.changeName = changeName;
	}


	public String getFilePath() {
		return filePath;
	}


	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}


	public Date getUploadDate() {
		return uploadDate;
	}


	public void setUploadDate(Date uploadDate) {
		this.uploadDate = uploadDate;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public int getFileLevel() {
		return fileLevel;
	}


	public void setFileLevel(int fileLevel) {
		this.fileLevel = fileLevel;
	}


	public Files(int fileNo, int bNo, int pNo, int mNo, int conNo, int gNo, int category, String originName,
			String changeName, String filePath, Date uploadDate, String status, int fileLevel) {
		super();
		this.fileNo = fileNo;
		this.bNo = bNo;
		this.pNo = pNo;
		this.mNo = mNo;
		this.conNo = conNo;
		this.gNo = gNo;
		this.category = category;
		this.originName = originName;
		this.changeName = changeName;
		this.filePath = filePath;
		this.uploadDate = uploadDate;
		this.status = status;
		this.fileLevel = fileLevel;
	}


	@Override
	public String toString() {
		return "Files [fileNo=" + fileNo + ", bNo=" + bNo + ", pNo=" + pNo + ", mNo=" + mNo + ", conNo=" + conNo
				+ ", gNo=" + gNo + ", category=" + category + ", originName=" + originName + ", changeName=" + changeName
				+ ", filePath=" + filePath + ", uploadDate=" + uploadDate + ", status=" + status + ", fileLevel="
				+ fileLevel + "]";
	};
	

	
	
}
