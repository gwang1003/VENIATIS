package com.kh.veniatis.blog.model.vo;

import java.sql.Date;

public class RewardList {
	
	public RewardList() {};
	private int pNo;
	private String mId;
	private String rName;
	private int totalAmount;
	private Date orderDate;
	private int SumAmount;
	private int targetAmount;
	public int getpNo() {
		return pNo;
	}
	public void setpNo(int pNo) {
		this.pNo = pNo;
	}
	public String getmId() {
		return mId;
	}
	public void setmId(String mId) {
		this.mId = mId;
	}
	public String getrName() {
		return rName;
	}
	public void setrName(String rName) {
		this.rName = rName;
	}
	public int getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	public int getSumAmount() {
		return SumAmount;
	}
	public void setSumAmount(int sumAmount) {
		SumAmount = sumAmount;
	}
	public int getTargetAmount() {
		return targetAmount;
	}
	public void setTargetAmount(int targetAmount) {
		this.targetAmount = targetAmount;
	}
	public RewardList(int pNo, String mId, String rName, int totalAmount, Date orderDate, int sumAmount,
			int targetAmount) {
		super();
		this.pNo = pNo;
		this.mId = mId;
		this.rName = rName;
		this.totalAmount = totalAmount;
		this.orderDate = orderDate;
		SumAmount = sumAmount;
		this.targetAmount = targetAmount;
	}
	@Override
	public String toString() {
		return "RewardList [pNo=" + pNo + ", mId=" + mId + ", rName=" + rName + ", totalAmount=" + totalAmount
				+ ", orderDate=" + orderDate + ", SumAmount=" + SumAmount + ", targetAmount=" + targetAmount + "]";
	}

	
	
}
