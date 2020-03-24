package com.kh.veniatis.member.model.vo;

import java.sql.Date;

public class Revenue {
	private Date day;
	private int amount;
	private int realMoney;
	private int revenue;
	
	public Revenue() {}

	public Revenue(Date day, int amount, int realMoney, int revenue) {
		super();
		this.day = day;
		this.amount = amount;
		this.realMoney = realMoney;
		this.revenue = revenue;
	}

	public Date getDay() {
		return day;
	}

	public void setDay(Date day) {
		this.day = day;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getRealMoney() {
		return realMoney;
	}

	public void setRealMoney(int realMoney) {
		this.realMoney = realMoney;
	}

	public int getRevenue() {
		return revenue;
	}

	public void setRevenue(int revenue) {
		this.revenue = revenue;
	}

	@Override
	public String toString() {
		return "Revenue [day=" + day + ", amount=" + amount + ", realMoney=" + realMoney + ", revenue=" + revenue + "]";
	}
	
	
}
