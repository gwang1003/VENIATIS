package com.kh.veniatis.common.reply.model.vo;

import java.sql.Date;

public class Reply {
	private int rNo; // 댓글번호
	private int mNo;
	private int bNo;
	private int pNo;
	private Date wDate;
	private String rContent;
	private String rWriter;
	private String filePath;
	private String mId;
	

	public Reply(int rNo, int mNo, int bNo, int pNo, Date wDate, String rContent, String rWriter, String filePath,
			String mId) {
		super();
		this.rNo = rNo;
		this.mNo = mNo;
		this.bNo = bNo;
		this.pNo = pNo;
		this.wDate = wDate;
		this.rContent = rContent;
		this.rWriter = rWriter;
		this.filePath = filePath;
		this.mId = mId;
	}

	public String getmId() {
		return mId;
	}

	public void setmId(String mId) {
		this.mId = mId;
	}

	public Reply() {}

	public Reply(int rNo, int mNo, int bNo, int pNo, Date wDate, String rContent, String rWriter, String filePath) {
		super();
		this.rNo = rNo;
		this.mNo = mNo;
		this.bNo = bNo;
		this.pNo = pNo;
		this.wDate = wDate;
		this.rContent = rContent;
		this.rWriter = rWriter;
		this.filePath = filePath;
	}

	public int getrNo() {
		return rNo;
	}

	public void setrNo(int rNo) {
		this.rNo = rNo;
	}

	public int getmNo() {
		return mNo;
	}

	public void setmNo(int mNo) {
		this.mNo = mNo;
	}

	public int getbNo() {
		return bNo;
	}

	public void setbNo(int bNo) {
		this.bNo = bNo;
	}

	public int getpNo() {
		return pNo;
	}

	public void setpNo(int pNo) {
		this.pNo = pNo;
	}

	public Date getwDate() {
		return wDate;
	}

	public void setwDate(Date wDate) {
		this.wDate = wDate;
	}

	public String getrContent() {
		return rContent;
	}

	public void setrContent(String rContent) {
		this.rContent = rContent;
	}

	public String getrWriter() {
		return rWriter;
	}

	public void setrWriter(String rWriter) {
		this.rWriter = rWriter;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	@Override
	public String toString() {
		return "Reply [rNo=" + rNo + ", mNo=" + mNo + ", bNo=" + bNo + ", pNo=" + pNo + ", wDate=" + wDate
				+ ", rContent=" + rContent + ", rWriter=" + rWriter + ", filePath=" + filePath + ", mId=" + mId + "]";
	};

	
	
	
	
}
