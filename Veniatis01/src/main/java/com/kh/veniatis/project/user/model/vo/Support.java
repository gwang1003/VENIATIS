package com.kh.veniatis.project.user.model.vo;

public class Support {
	private int sNo;
	private int pNo;
	private int mNo;
	private int rNo;
	private int sAddPrice;
	private String sName;
	private String sAddress;
	private String sPhone;
	private String sDelMemo;
	private int sCount;
	
	public Support() {}

	public Support(int sNo, int pNo, int mNo, int rNo, int sAddPrice, String sName, String sAddress, String sPhone,
			String sDelMemo, int sCount) {
		super();
		this.sNo = sNo;
		this.pNo = pNo;
		this.mNo = mNo;
		this.rNo = rNo;
		this.sAddPrice = sAddPrice;
		this.sName = sName;
		this.sAddress = sAddress;
		this.sPhone = sPhone;
		this.sDelMemo = sDelMemo;
		this.sCount = sCount;
	}

	public int getsNo() {
		return sNo;
	}

	public void setsNo(int sNo) {
		this.sNo = sNo;
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

	public int getrNo() {
		return rNo;
	}

	public void setrNo(int rNo) {
		this.rNo = rNo;
	}

	public int getsAddPrice() {
		return sAddPrice;
	}

	public void setsAddPrice(int sAddPrice) {
		this.sAddPrice = sAddPrice;
	}

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	public String getsAddress() {
		return sAddress;
	}

	public void setsAddress(String sAddress) {
		this.sAddress = sAddress;
	}

	public String getsPhone() {
		return sPhone;
	}

	public void setsPhone(String sPhone) {
		this.sPhone = sPhone;
	}

	public String getsDelMemo() {
		return sDelMemo;
	}

	public void setsDelMemo(String sDelMemo) {
		this.sDelMemo = sDelMemo;
	}

	public int getsCount() {
		return sCount;
	}

	public void setsCount(int sCount) {
		this.sCount = sCount;
	}

	@Override
	public String toString() {
		return "Support [sNo=" + sNo + ", pNo=" + pNo + ", mNo=" + mNo + ", rNo=" + rNo + ", sAddPrice=" + sAddPrice
				+ ", sName=" + sName + ", sAddress=" + sAddress + ", sPhone=" + sPhone + ", sDelMemo=" + sDelMemo
				+ ", sCount=" + sCount + "]";
	}
}
