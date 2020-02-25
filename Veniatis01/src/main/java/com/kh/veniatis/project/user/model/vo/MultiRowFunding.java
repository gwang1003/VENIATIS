package com.kh.veniatis.project.user.model.vo;

import java.util.List;

public class MultiRowFunding {
	private List<Funding> fundings;
	
	public MultiRowFunding() {}

	public MultiRowFunding(List<Funding> fundings) {
		super();
		this.fundings = fundings;
	}

	public List<Funding> getFundings() {
		return fundings;
	}

	public void setFundings(List<Funding> fundings) {
		this.fundings = fundings;
	}

	@Override
	public String toString() {
		return "MultiRowFunding [fundings=" + fundings + "]";
	}
	
	
}
