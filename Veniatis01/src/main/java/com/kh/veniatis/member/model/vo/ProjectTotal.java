package com.kh.veniatis.member.model.vo;

public class ProjectTotal {
	private int pcNo;
	private String pcName;
	private int amount;
	private int percent;
	
	public ProjectTotal() {}

	public ProjectTotal(int pcNo, String pcName, int amount, int percent) {
		super();
		this.pcNo = pcNo;
		this.pcName = pcName;
		this.amount = amount;
		this.percent = percent;
	}

	public int getPcNo() {
		return pcNo;
	}

	public void setPcNo(int pcNo) {
		this.pcNo = pcNo;
	}

	public String getPcName() {
		return pcName;
	}

	public void setPcName(String pcName) {
		this.pcName = pcName;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getPercent() {
		return percent;
	}

	public void setPercent(int percent) {
		this.percent = percent;
	}

	@Override
	public String toString() {
		return "ProjectTotal [pcNo=" + pcNo + ", pcName=" + pcName + ", amount=" + amount + ", percent=" + percent
				+ "]";
	}
	
	
	
}
