package com.kh.veniatis.project.user.model.vo;

import java.sql.Date;

public class Funding {
	private int rNo;		// 리워드 번호
	private int pNo;		// 프로젝트 번호
	private String rItem;	// 리워드 구성	
	private int rPrice;		// 리워드 금액
	private Date rDelivery;	// 배송예정일
	private int quantity;	// 주문 수량
	private String option;	// 옵션 사항 작성
	
	public Funding() {}

	public Funding(int rNo, int pNo, String rItem, int rPrice, Date rDelivery, int quantity, String option) {
		super();
		this.rNo = rNo;
		this.pNo = pNo;
		this.rItem = rItem;
		this.rPrice = rPrice;
		this.rDelivery = rDelivery;
		this.quantity = quantity;
		this.option = option;
	}

	public int getrNo() {
		return rNo;
	}

	public void setrNo(int rNo) {
		this.rNo = rNo;
	}

	public int getpNo() {
		return pNo;
	}

	public void setpNo(int pNo) {
		this.pNo = pNo;
	}

	public String getrItem() {
		return rItem;
	}

	public void setrItem(String rItem) {
		this.rItem = rItem;
	}

	public int getrPrice() {
		return rPrice;
	}

	public void setrPrice(int rPrice) {
		this.rPrice = rPrice;
	}

	public Date getrDelivery() {
		return rDelivery;
	}

	public void setrDelivery(Date rDelivery) {
		this.rDelivery = rDelivery;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getOption() {
		return option;
	}

	public void setOption(String option) {
		this.option = option;
	}

	@Override
	public String toString() {
		return "Funding [rNo=" + rNo + ", pNo=" + pNo + ", rItem=" + rItem + ", rPrice=" + rPrice + ", rDelivery="
				+ rDelivery + ", quantity=" + quantity + ", option=" + option + "]";
	}
}
