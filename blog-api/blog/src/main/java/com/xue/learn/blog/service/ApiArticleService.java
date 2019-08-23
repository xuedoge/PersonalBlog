package com.xue.learn.blog.service;

import com.xue.learn.blog.pojo.ApiArticleBean;

public interface ApiArticleService {

	public ApiArticleBean[] showArticles(int classID);

	public String showContent(int articleID);

	public ApiArticleBean showAnArticle(int articleID);
	
	public void addArticle(ApiArticleBean articleBean);
	public void updateArticle(ApiArticleBean articleBean);
	public void delArticle(int articleID);
}
