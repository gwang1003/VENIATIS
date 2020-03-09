package com.kh.veniatis.blog.model.vo;

import java.sql.Date;

public class ReReply {
	
	
	
	private int rreplyNo;
	private int rNo;
	private int mNo;
	private String content;
	private Date wDate;
	private String rWriter;
	private String filePath;
	private String mId;
	
	
	
	
	public ReReply(int rreplyNo, int rNo, int mNo, String content, Date wDate, String rWriter, String filePath,
			String mId) {
		super();
		this.rreplyNo = rreplyNo;
		this.rNo = rNo;
		this.mNo = mNo;
		this.content = content;
		this.wDate = wDate;
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


	public ReReply(int rreplyNo, int rNo, int mNo, String content, Date wDate, String rWriter, String filePath) {
		super();
		this.rreplyNo = rreplyNo;
		this.rNo = rNo;
		this.mNo = mNo;
		this.content = content;
		this.wDate = wDate;
		this.rWriter = rWriter;
		this.filePath = filePath;
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


	public ReReply() {};
	
	
	public Date getwDate() {
		return wDate;
	}


	public void setwDate(Date wDate) {
		this.wDate = wDate;
	}


	public ReReply(int rreplyNo, int rNo, int mNo, String content, Date wDate) {
		super();
		this.rreplyNo = rreplyNo;
		this.rNo = rNo;
		this.mNo = mNo;
		this.content = content;
		this.wDate = wDate;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public ReReply(int rreplyNo, int rNo, int mNo, String content) {
		super();
		this.rreplyNo = rreplyNo;
		this.rNo = rNo;
		this.mNo = mNo;
		this.content = content;
	}


	public ReReply(int rreplyNo, int rNo, int mNo) {
		super();
		this.rreplyNo = rreplyNo;
		this.rNo = rNo;
		this.mNo = mNo;
	}
	public int getRreplyNo() {
		return rreplyNo;
	}
	public void setRreplyNo(int rreplyNo) {
		this.rreplyNo = rreplyNo;
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
	@Override
	public String toString() {
		return "ReReply [rreplyNo=" + rreplyNo + ", rNo=" + rNo + ", mNo=" + mNo + ", content=" + content + ", wDate="
				+ wDate + ", rWriter=" + rWriter + ", filePath=" + filePath + ", mId=" + mId + "]";
	}
	
	
	
}
