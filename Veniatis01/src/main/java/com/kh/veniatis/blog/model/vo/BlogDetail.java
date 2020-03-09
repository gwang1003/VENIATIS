package com.kh.veniatis.blog.model.vo;

public class BlogDetail {
	public BlogDetail() {};
	
	private int blogNo;
	private int mNo;
	private String blogTitle;
	private String cssBack;
	private String cssWeather;
	private String cssTime;
	private String cssLocation;
	private String blogInto;
	private String blogTag;
	
	private String mId;
	private String mName;
	
	
	public BlogDetail(int blogNo, int mNo, String blogTitle, String cssBack, String cssWeather, String cssTime,
			String cssLocation, String blogInto, String blogTag, String mId, String mName) {
		super();
		this.blogNo = blogNo;
		this.mNo = mNo;
		this.blogTitle = blogTitle;
		this.cssBack = cssBack;
		this.cssWeather = cssWeather;
		this.cssTime = cssTime;
		this.cssLocation = cssLocation;
		this.blogInto = blogInto;
		this.blogTag = blogTag;
		this.mId = mId;
		this.mName = mName;
	}
	public String getmId() {
		return mId;
	}
	public void setmId(String mId) {
		this.mId = mId;
	}
	public String getmName() {
		return mName;
	}
	public void setmName(String mName) {
		this.mName = mName;
	}
	public BlogDetail(int blogNo, int mNo, String blogTitle, String cssBack, String cssWeather, String cssTime,
			String cssLocation, String blogInto, String blogTag) {
		super();
		this.blogNo = blogNo;
		this.mNo = mNo;
		this.blogTitle = blogTitle;
		this.cssBack = cssBack;
		this.cssWeather = cssWeather;
		this.cssTime = cssTime;
		this.cssLocation = cssLocation;
		this.blogInto = blogInto;
		this.blogTag = blogTag;
	}
	public int getBlogNo() {
		return blogNo;
	}
	public void setBlogNo(int blogNo) {
		this.blogNo = blogNo;
	}
	public int getmNo() {
		return mNo;
	}
	public void setmNo(int mNo) {
		this.mNo = mNo;
	}
	public String getBlogTitle() {
		return blogTitle;
	}
	public void setBlogTitle(String blogTitle) {
		this.blogTitle = blogTitle;
	}
	public String getCssBack() {
		return cssBack;
	}
	public void setCssBack(String cssBack) {
		this.cssBack = cssBack;
	}
	public String getCssWeather() {
		return cssWeather;
	}
	public void setCssWeather(String cssWeather) {
		this.cssWeather = cssWeather;
	}
	public String getCssTime() {
		return cssTime;
	}
	public void setCssTime(String cssTime) {
		this.cssTime = cssTime;
	}
	public String getCssLocation() {
		return cssLocation;
	}
	public void setCssLocation(String cssLocation) {
		this.cssLocation = cssLocation;
	}
	public String getBlogInto() {
		return blogInto;
	}
	public void setBlogInto(String blogInto) {
		this.blogInto = blogInto;
	}
	public String getBlogTag() {
		return blogTag;
	}
	public void setBlogTag(String blogTag) {
		this.blogTag = blogTag;
	}
	@Override
	public String toString() {
		return "BlogDetail [blogNo=" + blogNo + ", mNo=" + mNo + ", blogTitle=" + blogTitle + ", cssBack=" + cssBack
				+ ", cssWeather=" + cssWeather + ", cssTime=" + cssTime + ", cssLocation=" + cssLocation + ", blogInto="
				+ blogInto + ", blogTag=" + blogTag + ", mId=" + mId + ", mName=" + mName + "]";
	}
	
		
	
	
	
}
