package com.xue.learn.blog.controller;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xue.learn.blog.pojo.ApiArticleBean;
import com.xue.learn.blog.pojo.ApiCommentBean;
import com.xue.learn.blog.service.ApiCommentService;

/**
 * Comment控制类
 * 
 * @author xx57
 * @since 8.14
 * @version 0.01
 */
@RestController
@RequestMapping("/comments")
public class CommentController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CommentController.class);

	@Autowired
	private ApiCommentService commentService;

	@GetMapping("/show/{articleID}")
	public ApiCommentBean[] showComments(@PathVariable int articleID) {
		return commentService.showComments(articleID);
	}
	@PostMapping("/addcomment")
	public void addComment(HttpServletResponse response, @RequestBody ApiCommentBean commentBean) {
		commentService.addComment(commentBean);
	}
}