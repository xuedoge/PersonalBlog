package com.xue.learn.blog.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xue.learn.blog.pojo.ApiClassBean;
import com.xue.learn.blog.service.ApiClassService;

/**
 * Classes控制类
 * 
 * @author xx57
 * @since 8.14
 * @version 0.01
 */
@RestController
@RequestMapping("/classes")
public class ClassesController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ClassesController.class);

	@Autowired
	private ApiClassService classService;

	@GetMapping("/show")
	public ApiClassBean[] showClasses() {
		return classService.showClasses();
	}

	@PostMapping("/addclass")
	public void addClass(HttpServletResponse response, @RequestBody String className) {
		classService.addClass(className);
	}
}
