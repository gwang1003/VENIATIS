package com.kh.veniatis.blog.model.vo;

public class BlogSub {
	
	public BlogSub () {}
	
	private String mId; //본인아이디
	private String subId; //구독하는 인간 아이디
	public BlogSub(String mId, String subId) {
		super();
		this.mId = mId;
		this.subId = subId;
	}
	public String getmId() {
		return mId;
	}
	public void setmId(String mId) {
		this.mId = mId;
	}
	public String getSubId() {
		return subId;
	}
	public void setSubId(String subId) {
		this.subId = subId;
	}
	@Override
	public String toString() {
		return "BlogSub [mId=" + mId + ", subId=" + subId + "]";
	}
	
	
	
	
}
