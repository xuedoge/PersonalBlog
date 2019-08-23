package com.xue.learn.blog.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xue.learn.blog.mapper.ApiArticleMapper;
import com.xue.learn.blog.pojo.ApiArticleBean;
import com.xue.learn.blog.service.ApiArticleService;

@Service
public class ApiArticleServiceImpl implements ApiArticleService {

	@Autowired
	private ApiArticleMapper articleMapper;

	@Override
	public ApiArticleBean[] showArticles(int classID) {
		// TODO Auto-generated method stub
		return articleMapper.showArticles(classID);
	}

	@Override
	public String showContent(int articleID) {
		// TODO Auto-generated method stub
		return articleMapper.getContent(articleID);
	}

	@Override
	public ApiArticleBean showAnArticle(int articleID) {
		// TODO Auto-generated method stub
		return articleMapper.showAnArticle(articleID);
	}

	@Override
	public void addArticle(ApiArticleBean articleBean) {
		// TODO Auto-generated method stub
		articleMapper.addArticle(articleBean);
	}

	@Override
	public void delArticle(int articleID) {
		// TODO Auto-generated method stub
		articleMapper.delArticle(articleID);
	}

	@Override
	public void updateArticle(ApiArticleBean articleBean) {
		// TODO Auto-generated method stub
		articleMapper.updateArticle(articleBean);
	}

}
