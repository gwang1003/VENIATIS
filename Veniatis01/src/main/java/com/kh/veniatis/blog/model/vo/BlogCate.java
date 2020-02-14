package com.kh.veniatis.blog.model.vo;

public class BlogCate {
	private int cateNo;
	private String mId;
	private String bCateName;
	
	public BlogCate() {}

	public BlogCate(int cateNo, String mId, String bCateName) {
		super();
		this.cateNo = cateNo;
		this.mId = mId;
		this.bCateName = bCateName;
	} 

	public int getCateNo() {
		return cateNo;
	}

	public void setCateNo(int cateNo) {
		this.cateNo = cateNo;
	}

	public String getmId() {
		return mId;
	}

	public void setmId(String mId) {
		this.mId = mId;
	}

	public String getbCateName() {
		return bCateName;
	}

	public void setbCateName(String bCateName) {
		this.bCateName = bCateName;
	}

	@Override
	public String toString() {
		return "BlogCate [cateNo=" + cateNo + ", mId=" + mId + ", bCateName=" + bCateName + "]";
	}

	
}
