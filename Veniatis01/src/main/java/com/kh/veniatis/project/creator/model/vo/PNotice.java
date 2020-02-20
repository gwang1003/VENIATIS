package com.kh.veniatis.project.creator.model.vo;

import java.sql.Date;

public class PNotice {
	private int pnNo;			// 최근소식 번호
	private int pNo;			// 프로젝트 번호
	private String pnTitle;		// 최근소식 제목
	private String pnContent;	// 최근소식 내용
	private Date pnEnrollDate;	// 최근소식 작성(수정)날짜
	
	public PNotice() {}

	public PNotice(int pnNo, int pNo, String pnTitle, String pnContent, Date pnEnrollDate) {
		super();
		this.pnNo = pnNo;
		this.pNo = pNo;
		this.pnTitle = pnTitle;
		this.pnContent = pnContent;
		this.pnEnrollDate = pnEnrollDate;
	}

	public int getPnNo() {
		return pnNo;
	}

	public void setPnNo(int pnNo) {
		this.pnNo = pnNo;
	}

	public int getpNo() {
		return pNo;
	}

	public void setpNo(int pNo) {
		this.pNo = pNo;
	}

	public String getPnTitle() {
		return pnTitle;
	}

	public void setPnTitle(String pnTitle) {
		this.pnTitle = pnTitle;
	}

	public String getPnContent() {
		return pnContent;
	}

	public void setPnContent(String pnContent) {
		this.pnContent = pnContent;
	}

	public Date getPnEnrollDate() {
		return pnEnrollDate;
	}

	public void setPnEnrollDate(Date pnEnrollDate) {
		this.pnEnrollDate = pnEnrollDate;
	}

	@Override
	public String toString() {
		return "News [pnNo=" + pnNo + ", pNo=" + pNo + ", pnTitle=" + pnTitle + ", pnContent=" + pnContent
				+ ", pnEnrollDate=" + pnEnrollDate + "]";
	}
	
	
}
