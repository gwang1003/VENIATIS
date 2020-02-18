package com.kh.veniatis.member.model.vo;

import java.sql.Date;

public class Member {
	private int mNo;
	private String mId;
	private String mPwd;
	private String mName;
	private String mPhone;
	private String mEmail;
	private String mAddress;
	private String mBirth;
	private String mInterest;
	private Date mDate;
	private String gender;
	private String filePath;
	
	public Member() {}

	public Member(int mNo, String mId, String mPwd, String mName, String mPhone, String mEmail, String mAddress,
			String mBirth, String mInterest, Date mDate, String gender,String filePath) {
		super();
		this.mNo = mNo;
		this.mId = mId;
		this.mPwd = mPwd;
		this.mName = mName;
		this.mPhone = mPhone;
		this.mEmail = mEmail;
		this.mAddress = mAddress;
		this.mBirth = mBirth;
		this.mInterest = mInterest;
		this.mDate = mDate;
		this.gender = gender;
		this.filePath = filePath;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public int getmNo() {
		return mNo;
	}

	public void setmNo(int mNo) {
		this.mNo = mNo;
	}

	public String getmId() {
		return mId;
	}

	public void setmId(String mId) {
		this.mId = mId;
	}

	public String getmPwd() {
		return mPwd;
	}

	public void setmPwd(String mPwd) {
		this.mPwd = mPwd;
	}

	public String getmName() {
		return mName;
	}

	public void setmName(String mName) {
		this.mName = mName;
	}

	public String getmPhone() {
		return mPhone;
	}

	public void setmPhone(String mPhone) {
		this.mPhone = mPhone;
	}

	public String getmEmail() {
		return mEmail;
	}

	public void setmEmail(String mEmail) {
		this.mEmail = mEmail;
	}

	public String getmAddress() {
		return mAddress;
	}

	public void setmAddress(String mAddress) {
		this.mAddress = mAddress;
	}

	public String getmBirth() {
		return mBirth;
	}

	public void setmBirth(String mBirth) {
		this.mBirth = mBirth;
	}

	public String getmInterest() {
		return mInterest;
	}

	public void setmInterest(String mInterest) {
		this.mInterest = mInterest;
	}

	public Date getmDate() {
		return mDate;
	}

	public void setmDate(Date mDate) {
		this.mDate = mDate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "Member [mNo=" + mNo + ", mId=" + mId + ", mPwd=" + mPwd + ", mName=" + mName + ", mPhone=" + mPhone
				+ ", mEmail=" + mEmail + ", mAddress=" + mAddress + ", mBirth=" + mBirth + ", mInterest=" + mInterest
				+ ", mDate=" + mDate + ", gender=" + gender + ", filePath=" + filePath + "]";
	}

	
		
}
