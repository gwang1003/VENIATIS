package com.kh.veniatis.project.creator.model.vo;

import java.util.Date;

public class Project {
	private int pNo;		// 프로젝트 번호
	private int creNo;		// 크리에이터 번호
	private int pcNo;		// 프로젝트 카테고리
	private String pUrl;	
	private String pTitle;
	private String pText;
	private String pDesc;
	private String pVideo;
	private String pHashTag;
	private Date pStartDate;
	private Date pEndDate;
	private int pTargetAmount;	// 목표금액
	private int pSumAmount;		// 모인금액
	private String pAccount;
	private String pStatus;
	
	public Project() {}

	public Project(int pNo, int creNo, int pcNo, String pUrl, String pTitle, String pText, String pDesc, String pVideo,
			String pHashTag, Date pStartDate, Date pEndDate, int pTargetAmount, int pSumAmount, String pAccount,
			String pStatus) {
		super();
		this.pNo = pNo;
		this.creNo = creNo;
		this.pcNo = pcNo;
		this.pUrl = pUrl;
		this.pTitle = pTitle;
		this.pText = pText;
		this.pDesc = pDesc;
		this.pVideo = pVideo;
		this.pHashTag = pHashTag;
		this.pStartDate = pStartDate;
		this.pEndDate = pEndDate;
		this.pTargetAmount = pTargetAmount;
		this.pSumAmount = pSumAmount;
		this.pAccount = pAccount;
		this.pStatus = pStatus;
	}

	public int getpNo() {
		return pNo;
	}

	public void setpNo(int pNo) {
		this.pNo = pNo;
	}

	public int getCreNo() {
		return creNo;
	}

	public void setCreNo(int creNo) {
		this.creNo = creNo;
	}

	public int getPcNo() {
		return pcNo;
	}

	public void setPcNo(int pcNo) {
		this.pcNo = pcNo;
	}

	public String getpUrl() {
		return pUrl;
	}

	public void setpUrl(String pUrl) {
		this.pUrl = pUrl;
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

	public String getpVideo() {
		return pVideo;
	}

	public void setpVideo(String pVideo) {
		this.pVideo = pVideo;
	}

	public String getpHashTag() {
		return pHashTag;
	}

	public void setpHashTag(String pHashTag) {
		this.pHashTag = pHashTag;
	}

	public Date getpStartDate() {
		return pStartDate;
	}

	public void setpStartDate(Date pStartDate) {
		this.pStartDate = pStartDate;
	}

	public Date getpEndDate() {
		return pEndDate;
	}

	public void setpEndDate(Date pEndDate) {
		this.pEndDate = pEndDate;
	}

	public int getpTargetAmount() {
		return pTargetAmount;
	}

	public void setpTargetAmount(int pTargetAmount) {
		this.pTargetAmount = pTargetAmount;
	}

	public int getpSumAmount() {
		return pSumAmount;
	}

	public void setpSumAmount(int pSumAmount) {
		this.pSumAmount = pSumAmount;
	}

	public String getpAccount() {
		return pAccount;
	}

	public void setpAccount(String pAccount) {
		this.pAccount = pAccount;
	}

	public String getpStatus() {
		return pStatus;
	}

	public void setpStatus(String pStatus) {
		this.pStatus = pStatus;
	}

	@Override
	public String toString() {
		return "Project [pNo=" + pNo + ", creNo=" + creNo + ", pcNo=" + pcNo + ", pUrl=" + pUrl + ", pTitle=" + pTitle
				+ ", pText=" + pText + ", pDesc=" + pDesc + ", pVideo=" + pVideo + ", pHashTag=" + pHashTag
				+ ", pStartDate=" + pStartDate + ", pEndDate=" + pEndDate + ", pTargetAmount=" + pTargetAmount
				+ ", pSumAmount=" + pSumAmount + ", pAccount=" + pAccount + ", pStatus=" + pStatus + "]";
	}
	
	
	
}
