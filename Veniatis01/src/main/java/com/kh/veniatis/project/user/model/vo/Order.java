package com.kh.veniatis.project.user.model.vo;

public class Order {
/*
O_NO
M_NO
ADD_AMOUNT
R_NAME
R_PHONE
R_ADDRESS
DELIVERY_OPTION
TOTAL_AMOUNT
ORDER_DATE */
	private double oNo;
	private int mNo;
	private int addAmount;
	private String rName;
	private String rPhone;
	private String rAddress;
	private String deliveryOption;
	private int totalAmount;
	
	public Order(double oNo, int mNo, int addAmount, String rName, String rPhone, String rAddress, String deliveryOption,
			int totalAmount) {
		super();
		this.oNo = oNo;
		this.mNo = mNo;
		this.addAmount = addAmount;
		this.rName = rName;
		this.rPhone = rPhone;
		this.rAddress = rAddress;
		this.deliveryOption = deliveryOption;
		this.totalAmount = totalAmount;
	}
	public double getoNo() {
		return oNo;
	}
	public void setoNo(double oNo) {
		this.oNo = oNo;
	}
	public int getmNo() {
		return mNo;
	}
	public void setmNo(int mNo) {
		this.mNo = mNo;
	}
	public int getAddAmount() {
		return addAmount;
	}
	public void setAddAmount(int addAmount) {
		this.addAmount = addAmount;
	}
	public String getrName() {
		return rName;
	}
	public void setrName(String rName) {
		this.rName = rName;
	}
	public String getrPhone() {
		return rPhone;
	}
	public void setrPhone(String rPhone) {
		this.rPhone = rPhone;
	}
	public String getrAddress() {
		return rAddress;
	}
	public void setrAddress(String rAddress) {
		this.rAddress = rAddress;
	}
	public String getDeliveryOption() {
		return deliveryOption;
	}
	public void setDeliveryOption(String deliveryOption) {
		this.deliveryOption = deliveryOption;
	}
	public int getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}
	@Override
	public String toString() {
		return "Order [oNo=" + oNo + ", mNo=" + mNo + ", addAmount=" + addAmount + ", rName=" + rName + ", rPhone="
				+ rPhone + ", rAddress=" + rAddress + ", deliveryOption=" + deliveryOption + ", totalAmount="
				+ totalAmount + "]";
	}
	
}
