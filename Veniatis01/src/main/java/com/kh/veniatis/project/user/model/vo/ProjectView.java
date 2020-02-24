package com.kh.veniatis.project.user.model.vo;

import java.sql.Date;

public class ProjectView {
	
	private int pNo;	// 프로젝트 번호
	private String cate;	//프로젝트 카테고리
	private String pTitle;	// 프로젝트 제목
	private String pText;	// 프로젝트 간단 소개
	private String pDesc;	// 프로젝트 소개
	private String pUrl;	// 홈페이지
	private String pVideo;	// 동영상 주소
	private String hashtag;	// 해시태그
	private Date startDate;	// 프로젝트 시작 날짜
	private Date endDate;	// 프로젝트 마감 날짜
	private int targetAmount;	// 목표금액
	private int sumAmount;	// 모인금액
	private String thumbnail;	// 프로젝트 썸네일 이미지 주소
	private int creNo;		// 크리에이터 번호
	private String creId;	// 크리에이터 아이디
	private String creName;	// 크리에이터 이름
	private String creEmail;// 크리에이터 이메일
	private String creProfile;	// 프로필이미지 경로
	private String pStatus;	// 프로젝트 상태
	private String progress;	// 진행 상태
	
	public ProjectView() {}

	public ProjectView(int pNo, String cate, String pTitle, String pText, String pDesc, String pUrl, String pVideo,
			String hashtag, Date startDate, Date endDate, int targetAmount, int sumAmount, String thumbnail, int creNo,
			String creId, String creName, String creEmail, String creProfile, String pStatus, String progress) {
		super();
		this.pNo = pNo;
		this.cate = cate;
		this.pTitle = pTitle;
		this.pText = pText;
		this.pDesc = pDesc;
		this.pUrl = pUrl;
		this.pVideo = pVideo;
		this.hashtag = hashtag;
		this.startDate = startDate;
		this.endDate = endDate;
		this.targetAmount = targetAmount;
		this.sumAmount = sumAmount;
		this.thumbnail = thumbnail;
		this.creNo = creNo;
		this.creId = creId;
		this.creName = creName;
		this.creEmail = creEmail;
		this.creProfile = creProfile;
		this.pStatus = pStatus;
		this.progress = progress;
	}



	public int getpNo() {
		return pNo;
	}

	public void setpNo(int pNo) {
		this.pNo = pNo;
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

	public String getpUrl() {
		return pUrl;
	}

	public void setpUrl(String pUrl) {
		this.pUrl = pUrl;
	}

	public String getpVideo() {
		return pVideo;
	}

	public void setpVideo(String pVideo) {
		this.pVideo = pVideo;
	}

	public String getHashtag() {
		return hashtag;
	}

	public void setHashtag(String hashtag) {
		this.hashtag = hashtag;
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

	public int getCreNo() {
		return creNo;
	}

	public void setCreNo(int creNo) {
		this.creNo = creNo;
	}

	public String getCreId() {
		return creId;
	}

	public void setCreId(String creId) {
		this.creId = creId;
	}

	public String getCreName() {
		return creName;
	}

	public void setCreName(String creName) {
		this.creName = creName;
	}

	public String getCreEmail() {
		return creEmail;
	}

	public void setCreEmail(String creEmail) {
		this.creEmail = creEmail;
	}

	public String getCreProfile() {
		return creProfile;
	}

	public void setCreProfile(String creProfile) {
		this.creProfile = creProfile;
	}

	public String getpStatus() {
		return pStatus;
	}

	public void setpStatus(String pStatus) {
		this.pStatus = pStatus;
	}
	
	public String getProgress(){
		return progress;
	}
	
	public void setProgress(String progress) {
		this.progress = progress;
	}

	@Override
	public String toString() {
		return "ProjectView [pNo=" + pNo + ", cate=" + cate + ", pTitle=" + pTitle + ", pText=" + pText + ", pDesc="
				+ pDesc + ", pUrl=" + pUrl + ", pVideo=" + pVideo + ", hashtag=" + hashtag + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", targetAmount=" + targetAmount + ", sumAmount=" + sumAmount
				+ ", thumbnail=" + thumbnail + ", creNo=" + creNo + ", creId=" + creId + ", creName=" + creName
				+ ", creEmail=" + creEmail + ", creProfile=" + creProfile + ", pStatus=" + pStatus + ", progress="
				+ progress + "]";
	}

	
}
