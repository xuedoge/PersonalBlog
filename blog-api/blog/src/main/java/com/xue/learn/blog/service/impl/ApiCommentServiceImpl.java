package com.xue.learn.blog.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xue.learn.blog.mapper.ApiCommentMapper;
import com.xue.learn.blog.pojo.ApiCommentBean;
import com.xue.learn.blog.service.ApiCommentService;

@Service
public class ApiCommentServiceImpl implements ApiCommentService {

	@Autowired
	private ApiCommentMapper commentMapper;

	@Override
	public ApiCommentBean[] showComments(int articleID) {
		// TODO Auto-generated method stub
		return commentMapper.showComments(articleID);
	}

	@Override
	public void addComment(ApiCommentBean commentBean) {
		// TODO Auto-generated method stub
		commentMapper.addComment(commentBean);
	}

}
