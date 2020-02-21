package com.kh.veniatis.project.creator.model.exception;

public class ProjectException extends RuntimeException {
	// Exception을 상속 받지 않고 RuntimeException을 상속 받기
	public ProjectException(String message) {
		super(message);
	}

}
