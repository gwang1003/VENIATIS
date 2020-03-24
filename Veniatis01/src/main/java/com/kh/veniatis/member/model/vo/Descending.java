package com.kh.veniatis.member.model.vo;

import java.util.ArrayList;
import java.util.Comparator;

public class Descending implements Comparator<ProjectTotal>{

	@Override
    public int compare(ProjectTotal o1, ProjectTotal o2) {
		Integer a = o1.getPercent();
		Integer b = o2.getPercent();
        return b.compareTo(a);
    }
}
