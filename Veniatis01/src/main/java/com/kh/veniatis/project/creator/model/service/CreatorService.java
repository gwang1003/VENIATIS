package com.kh.veniatis.project.creator.model.service;

import java.util.ArrayList;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.creator.model.vo.Reward;

public interface CreatorService {

	int creatorInsert(Creator c);

	Creator selectCreNo(Creator c);

	int projectInsert(Project p);

	int projectUpdate(int pNo);

	int projectDelete(int pNo);

	int creatorUpdate(int creNo);

	int creatorDelete(int creNo);

	Project selectOneProject(Project p);

	int pPhotoInsert(ArrayList<Files> files);

	int rewardInsert(ArrayList<Reward> rewardInsertList);

	Project selectProject(Integer pNo);

	int finishProject(Project project);

	

}
