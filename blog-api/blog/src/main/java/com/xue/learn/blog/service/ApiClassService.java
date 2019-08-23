package com.xue.learn.blog.service;

import com.xue.learn.blog.pojo.ApiClassBean;

/**
 * ClassService
 * 
 * @author xx57
 * @since 8.15
 * @version 0.01
 */
public interface ApiClassService {

	/**
	 * show all
	 */
	public ApiClassBean[] showClasses();
	
	public void addClass(String className);
}
