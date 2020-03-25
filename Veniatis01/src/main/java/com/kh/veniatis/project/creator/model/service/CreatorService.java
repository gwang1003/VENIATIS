package com.kh.veniatis.project.creator.model.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import com.kh.veniatis.common.files.model.vo.Files;
import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.PNotice;
import com.kh.veniatis.project.creator.model.vo.Project;
import com.kh.veniatis.project.creator.model.vo.Reward;

public interface CreatorService {

	int creatorInsert(Creator c);

	Creator selectCreNo(int creNo);

	int projectInsert(Project p);

	int projectDelete(int pNo);


	int creatorDelete(int creNo);

	Project selectOneProject(Project p);

	int pPhotoInsert(ArrayList<Files> files);

	int rewardInsert(ArrayList<Reward> rewardInsertList);

	Project selectProject(Integer pNo);

	int finishProject(Project project);

	Creator selectCreator(int creNo);

	int creatorUpdate(Creator c);

	int selectProjectNo(int creNo);

	int selectCurCreNo();

	List<Files> selectFiles(int pNo);

	int projectUpdate(Project p);

	int pPhotoUpdate(ArrayList<Files> files);

	int fileDelete(int fileNo);

	int pNoticeInsert(PNotice pn);

	List<Reward> selectReward(String pNo);

	int rewardUpdate(ArrayList<Reward> rewardUpdateList);

	List<PNotice> selectPnoticeList(int pNo);

	int deletepNotice(int pnNo);

	int finishProjectUpdate(Project project);



	

}
