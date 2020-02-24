package com.kh.veniatis.project.creator.model.vo;

import java.util.Date;

public class Reward {
	
	private int rNo;		// 리워드 번호
	private int pNo;		// 프로젝트 번호
	private int rSeq;		// 리워드 순서
	private String rItem;	// 리워드 구성
	private int rPrice;		// 리워드 금액
	private String rLimit;	// 리워드 제한
	private int rCount =0;		// 수량
	private String rOption=null;	// 선택 옵션
	private Date rDelivery;	// 배송예정일
	
	public Reward() {}

	public Reward(int rNo, int pNo, int rSeq, String rItem, int rPrice, String rLimit, int rCount, String rOption,
			Date rDelivery) {
		super();
		this.rNo = rNo;
		this.pNo = pNo;
		this.rSeq = rSeq;
		this.rItem = rItem;
		this.rPrice = rPrice;
		this.rLimit = rLimit;
		this.rCount = rCount;
		this.rOption = rOption;
		this.rDelivery = rDelivery;
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

	public int getrSeq() {
		return rSeq;
	}

	public void setrSeq(int rSeq) {
		this.rSeq = rSeq;
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

	public String getrLimit() {
		return rLimit;
	}

	public void setrLimit(String rLimit) {
		this.rLimit = rLimit;
	}

	public int getrCount() {
		return rCount;
	}

	public void setrCount(int rCount) {
		this.rCount = rCount;
	}

	public String getrOption() {
		return rOption;
	}

	public void setrOption(String rOption) {
		this.rOption = rOption;
	}

	public Date getrDelivery() {
		return rDelivery;
	}

	public void setrDelivery(Date rDelivery) {
		this.rDelivery = rDelivery;
	}

	@Override
	public String toString() {
		return "Reward [rNo=" + rNo + ", pNo=" + pNo + ", rSeq=" + rSeq + ", rItem=" + rItem + ", rPrice=" + rPrice
				+ ", rLimit=" + rLimit + ", rCount=" + rCount + ", rOption=" + rOption + ", rDelivery=" + rDelivery
				+ "]";
	}

	
}
