package com.kh.veniatis.blog.model.vo;

import java.sql.Date;

public class Compet {
	private int conNo;
	private String conName;
	private String conHost;
	private Date startDate;
	private Date lastDate;
	private String conHp;
	private String conTarget;
	private String conBenefit;
	private String conState;
	private String filePath;
	
	
	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public Compet(int conNo, String conName, String conHost, Date startDate, Date lastDate, String conHp,
			String conTarget, String conBenefit, String conState, String filePath) {
		super();
		this.conNo = conNo;
		this.conName = conName;
		this.conHost = conHost;
		this.startDate = startDate;
		this.lastDate = lastDate;
		this.conHp = conHp;
		this.conTarget = conTarget;
		this.conBenefit = conBenefit;
		this.conState = conState;
		this.filePath = filePath;
	}

	public Compet() {};
	
	public Compet(int conNo, String conName, String conHost, Date startDate, Date lastDate, String conHp,
			String conTarget, String conBenefit, String conState) {
		super();
		this.conNo = conNo;
		this.conName = conName;
		this.conHost = conHost;
		this.startDate = startDate;
		this.lastDate = lastDate;
		this.conHp = conHp;
		this.conTarget = conTarget;
		this.conBenefit = conBenefit;
		this.conState = conState;
	}
	public int getConNo() {
		return conNo;
	}
	public void setConNo(int conNo) {
		this.conNo = conNo;
	}
	public String getConName() {
		return conName;
	}
	public void setConName(String conName) {
		this.conName = conName;
	}
	public String getConHost() {
		return conHost;
	}
	public void setConHost(String conHost) {
		this.conHost = conHost;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getLastDate() {
		return lastDate;
	}
	public void setLastDate(Date lastDate) {
		this.lastDate = lastDate;
	}
	public String getConHp() {
		return conHp;
	}
	public void setConHp(String conHp) {
		this.conHp = conHp;
	}
	public String getConTarget() {
		return conTarget;
	}
	public void setConTarget(String conTarget) {
		this.conTarget = conTarget;
	}
	public String getConBenefit() {
		return conBenefit;
	}
	public void setConBenefit(String conBenefit) {
		this.conBenefit = conBenefit;
	}
	public String getConState() {
		return conState;
	}
	public void setConState(String conState) {
		this.conState = conState;
	}
	@Override
	public String toString() {
		return "Compet [conNo=" + conNo + ", conName=" + conName + ", conHost=" + conHost + ", startDate=" + startDate
				+ ", lastDate=" + lastDate + ", conHp=" + conHp + ", conTarget=" + conTarget + ", conBenefit="
				+ conBenefit + ", conState=" + conState + ", filePath=" + filePath + "]";
	}
	
	
	
}
