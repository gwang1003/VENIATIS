package com.kh.veniatis.project.creator.model.service;

import com.kh.veniatis.project.creator.model.vo.Creator;
import com.kh.veniatis.project.creator.model.vo.Project;

public interface StartUpService {

	int startUpCreatorInsert(Creator c);

	int startUpprojectInsert(Project p);

}
