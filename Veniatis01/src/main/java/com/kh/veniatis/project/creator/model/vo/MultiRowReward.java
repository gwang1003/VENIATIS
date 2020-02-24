package com.kh.veniatis.project.creator.model.vo;

import java.util.List;

public class MultiRowReward {
	
	private List<Reward> rewards;

	public MultiRowReward(List<Reward> rewards) {
		super();
		this.rewards = rewards;
	}

	public List<Reward> getRewards() {
		return rewards;
	}

	public void setRewards(List<Reward> rewards) {
		this.rewards = rewards;
	}

	@Override
	public String toString() {
		return "MultiRowRewoard [rewards=" + rewards + "]";
	}
	
	

}
