package com.xue.learn.blog.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xue.learn.blog.mapper.ApiClassMapper;
import com.xue.learn.blog.pojo.ApiClassBean;
import com.xue.learn.blog.service.ApiClassService;

@Service
public class ApiClassServiceImpl implements ApiClassService {

	@Autowired
	private ApiClassMapper classMapper;

	@Override
	public ApiClassBean[] showClasses() {
		return classMapper.showClasses();
	}

	@Override
	public void addClass(String className) {
		// TODO Auto-generated method stub
		classMapper.addClass(className);
	}
}
