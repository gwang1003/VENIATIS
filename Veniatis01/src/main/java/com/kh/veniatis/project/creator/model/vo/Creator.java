package com.kh.veniatis.project.creator.model.vo;

public class Creator {

	private int creNo;
	private int mNo;
	private String creName;
	private String creContent;
	private int creType;
	private String creEmail;
	private String crePhone;
	private String creAddress;
	private String creUrl;
	private String creStatus;

	public Creator () {}

	public Creator(int creNo, int mNo, String creName, String creContent, int creType, String creEmail, String crePhone,
			String creAddress, String creUrl, String creStatus) {
		super();
		this.creNo = creNo;
		this.mNo = mNo;
		this.creName = creName;
		this.creContent = creContent;
		this.creType = creType;
		this.creEmail = creEmail;
		this.crePhone = crePhone;
		this.creAddress = creAddress;
		this.creUrl = creUrl;
		this.creStatus = creStatus;
	}

	public int getCreNo() {
		return creNo;
	}

	public void setCreNo(int creNo) {
		this.creNo = creNo;
	}

	public int getmNo() {
		return mNo;
	}

	public void setmNo(int mNo) {
		this.mNo = mNo;
	}

	public String getCreName() {
		return creName;
	}

	public void setCreName(String creName) {
		this.creName = creName;
	}

	public String getCreContent() {
		return creContent;
	}

	public void setCreContent(String creContent) {
		this.creContent = creContent;
	}

	public int getCreType() {
		return creType;
	}

	public void setCreType(int creType) {
		this.creType = creType;
	}

	public String getCreEmail() {
		return creEmail;
	}

	public void setCreEmail(String creEmail) {
		this.creEmail = creEmail;
	}

	public String getCrePhone() {
		return crePhone;
	}

	public void setCrePhone(String crePhone) {
		this.crePhone = crePhone;
	}

	public String getCreAddress() {
		return creAddress;
	}

	public void setCreAddress(String creAddress) {
		this.creAddress = creAddress;
	}

	public String getCreUrl() {
		return creUrl;
	}

	public void setCreUrl(String creUrl) {
		this.creUrl = creUrl;
	}

	public String getCreStatus() {
		return creStatus;
	}

	public void setCreStatus(String creStatus) {
		this.creStatus = creStatus;
	}

	@Override
	public String toString() {
		return "Creator [creNo=" + creNo + ", mNo=" + mNo + ", creName=" + creName + ", creContent=" + creContent
				+ ", creType=" + creType + ", creEmail=" + creEmail + ", crePhone=" + crePhone + ", creAddress="
				+ creAddress + ", creUrl=" + creUrl + ", creStatus=" + creStatus + "]";
	}

	
	
	
}
