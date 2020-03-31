package com.kh.veniatis.member.model.vo;

import java.sql.Date;

public class SupportView {
	
	private int pNo;	// 프로젝트 번호
	private String oNo;    // 오더 번호
	private String cate;	//프로젝트 카테고리
	private String pTitle;	// 프로젝트 제목
	private String pText;	// 프로젝트 간단 소개
	private String pDesc;	// 프로젝트 소개
	private Date startDate;	// 프로젝트 시작 날짜
	private Date endDate;	// 프로젝트 마감 날짜
	private int targetAmount;	// 목표금액
	private int sumAmount;	// 모인금액
	private String thumbnail;	// 프로젝트 썸네일 이미지 주소
	private String pStatus;	// 프로젝트 상태
	private String progress;	// 진행 상태
	private Date pEnrollDate; // 프로젝트 시작일
	private Date attendDate; // 참여일
	private int attendAmount; // 참여금액
	
	public SupportView() {}

	public SupportView(int pNo, String oNo, String cate, String pTitle, String pText, String pDesc, Date startDate,
			Date endDate, int targetAmount, int sumAmount, String thumbnail, String pStatus, String progress,
			Date pEnrollDate, Date attendDate, int attendAmount) {
		super();
		this.pNo = pNo;
		this.oNo = oNo;
		this.cate = cate;
		this.pTitle = pTitle;
		this.pText = pText;
		this.pDesc = pDesc;
		this.startDate = startDate;
		this.endDate = endDate;
		this.targetAmount = targetAmount;
		this.sumAmount = sumAmount;
		this.thumbnail = thumbnail;
		this.pStatus = pStatus;
		this.progress = progress;
		this.pEnrollDate = pEnrollDate;
		this.attendDate = attendDate;
		this.attendAmount = attendAmount;
	}

	public int getpNo() {
		return pNo;
	}

	public void setpNo(int pNo) {
		this.pNo = pNo;
	}

	public String getoNo() {
		return oNo;
	}

	public void setoNo(String oNo) {
		this.oNo = oNo;
	}

	public String getCate() {
		return cate;
	}

	public void setCate(String cate) {
		this.cate = cate;
	}

	public String getpTitle() {
		return pTitle;
	}

	public void setpTitle(String pTitle) {
		this.pTitle = pTitle;
	}

	public String getpText() {
		return pText;
	}

	public void setpText(String pText) {
		this.pText = pText;
	}

	public String getpDesc() {
		return pDesc;
	}

	public void setpDesc(String pDesc) {
		this.pDesc = pDesc;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getTargetAmount() {
		return targetAmount;
	}

	public void setTargetAmount(int targetAmount) {
		this.targetAmount = targetAmount;
	}

	public int getSumAmount() {
		return sumAmount;
	}

	public void setSumAmount(int sumAmount) {
		this.sumAmount = sumAmount;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getpStatus() {
		return pStatus;
	}

	public void setpStatus(String pStatus) {
		this.pStatus = pStatus;
	}

	public String getProgress() {
		return progress;
	}

	public void setProgress(String progress) {
		this.progress = progress;
	}

	public Date getpEnrollDate() {
		return pEnrollDate;
	}

	public void setpEnrollDate(Date pEnrollDate) {
		this.pEnrollDate = pEnrollDate;
	}

	public Date getAttendDate() {
		return attendDate;
	}

	public void setAttendDate(Date attendDate) {
		this.attendDate = attendDate;
	}

	public int getAttendAmount() {
		return attendAmount;
	}

	public void setAttendAmount(int attendAmount) {
		this.attendAmount = attendAmount;
	}

	@Override
	public String toString() {
		return "SupportView [pNo=" + pNo + ", oNo=" + oNo + ", cate=" + cate + ", pTitle=" + pTitle + ", pText=" + pText
				+ ", pDesc=" + pDesc + ", startDate=" + startDate + ", endDate=" + endDate + ", targetAmount="
				+ targetAmount + ", sumAmount=" + sumAmount + ", thumbnail=" + thumbnail + ", pStatus=" + pStatus
				+ ", progress=" + progress + ", pEnrollDate=" + pEnrollDate + ", attendDate=" + attendDate
				+ ", attendAmount=" + attendAmount + "]";
	}

	
}
