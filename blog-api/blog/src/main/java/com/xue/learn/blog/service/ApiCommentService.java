package com.xue.learn.blog.service;

import com.xue.learn.blog.pojo.ApiCommentBean;

public interface ApiCommentService {

	public ApiCommentBean[] showComments(int articleID);

	public void addComment(ApiCommentBean commentBean);
}
