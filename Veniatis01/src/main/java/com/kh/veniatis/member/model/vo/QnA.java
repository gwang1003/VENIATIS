package com.kh.veniatis.member.model.vo;

import java.sql.Date;

public class QnA {
	private int qNo;
	private int pNo;
	private int mNo;
	private int qType;
	private String qCategory;
	private String qContent;
	private String qAnswer;
	private Date enrollDate;
	
	public QnA() {}

	public QnA(int qNo, int pNo, int mNo, int qType, String qCategory, String qContent, String qAnswer,
			Date enrollDate) {
		super();
		this.qNo = qNo;
		this.pNo = pNo;
		this.mNo = mNo;
		this.qType = qType;
		this.qCategory = qCategory;
		this.qContent = qContent;
		this.qAnswer = qAnswer;
		this.enrollDate = enrollDate;
	}

	public int getqNo() {
		return qNo;
	}

	public void setqNo(int qNo) {
		this.qNo = qNo;
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

	public int getqType() {
		return qType;
	}

	public void setqType(int qType) {
		this.qType = qType;
	}

	public String getqCategory() {
		return qCategory;
	}

	public void setqCategory(String qCategory) {
		this.qCategory = qCategory;
	}

	public String getqContent() {
		return qContent;
	}

	public void setqContent(String qContent) {
		this.qContent = qContent;
	}

	public String getqAnswer() {
		return qAnswer;
	}

	public void setqAnswer(String qAnswer) {
		this.qAnswer = qAnswer;
	}

	public Date getEnrollDate() {
		return enrollDate;
	}

	public void setEnrollDate(Date enrollDate) {
		this.enrollDate = enrollDate;
	}

	@Override
	public String toString() {
		return "QnA [qNo=" + qNo + ", pNo=" + pNo + ", mNo=" + mNo + ", qType=" + qType + ", qCategory=" + qCategory
				+ ", qContent=" + qContent + ", qAnswer=" + qAnswer + ", enrollDate=" + enrollDate + "]";
	}

	
	
	
}
