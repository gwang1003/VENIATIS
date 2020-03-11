package com.kh.veniatis.member.model.vo;

public class CreView {
	private int creNo;
	private String creName;
	private String mId;
	private String creType;
	private String creEmail;
	private String crePhone;
	private int pNo;
	
	public CreView() {}

	public CreView(int creNo, String creName, String mId, String creType, String creEmail, String crePhone, int pNo) {
		super();
		this.creNo = creNo;
		this.creName = creName;
		this.mId = mId;
		this.creType = creType;
		this.creEmail = creEmail;
		this.crePhone = crePhone;
		this.pNo = pNo;
	}

	public int getCreNo() {
		return creNo;
	}

	public void setCreNo(int creNo) {
		this.creNo = creNo;
	}

	public String getCreName() {
		return creName;
	}

	public void setCreName(String creName) {
		this.creName = creName;
	}

	public String getmId() {
		return mId;
	}

	public void setmId(String mId) {
		this.mId = mId;
	}

	public String getCreType() {
		return creType;
	}

	public void setCreType(String creType) {
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

	public int getpNo() {
		return pNo;
	}

	public void setpNo(int pNo) {
		this.pNo = pNo;
	}

	@Override
	public String toString() {
		return "CreView [creNo=" + creNo + ", creName=" + creName + ", mId=" + mId + ", creType=" + creType
				+ ", creEmail=" + creEmail + ", crePhone=" + crePhone + ", pNo=" + pNo + "]";
	}

	
	
	
}
