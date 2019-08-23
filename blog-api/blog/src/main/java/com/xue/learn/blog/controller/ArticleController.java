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
import com.xue.learn.blog.service.ApiArticleService;

/**
 * Article控制类
 * 
 * @author xx57
 * @since 8.14
 * @version 0.01
 */
@RestController
@RequestMapping("/articles")
public class ArticleController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ClassesController.class);

	@Autowired
	private ApiArticleService articleService;

	@GetMapping("/show/{classID}")
	public ApiArticleBean[] showArticles(@PathVariable int classID) {
		return articleService.showArticles(classID);
	}

	@GetMapping("/content/{articleID}")
	public String showContent(@PathVariable int articleID) {
		return articleService.showContent(articleID);
	}
	
	@GetMapping("/showan/{articleID}")
	public ApiArticleBean showAnArticle(@PathVariable int articleID) {
		ApiArticleBean article = new ApiArticleBean();
		article = articleService.showAnArticle(articleID);
		String content = articleService.showContent(articleID);
		article.setContent(content);
		return article;
	}

	@PostMapping("/addarticle")
	public void addArticle(HttpServletResponse response, @RequestBody ApiArticleBean articleBean) {
		articleService.addArticle(articleBean);
	}
	@GetMapping("/add/test/151")
	public void addArticle() {

		ApiArticleBean articleBean = new ApiArticleBean();
		articleBean.setClassID(2);
		articleBean.setTitle("test标题");
		articleBean.setContent("test 正文");
		articleService.addArticle(articleBean);
	}

	@GetMapping("/del/{articleID}")
	public void delArticle(@PathVariable int articleID) {
		articleService.delArticle(articleID);
	}
	
	@GetMapping("/update")
	public void updateArticle() {

		ApiArticleBean articleBean = new ApiArticleBean();
		articleBean.setClassID(2);
		articleBean.setArticleID(7);
		articleBean.setTitle("API改标题");
		articleBean.setContent("API改 正文");
		articleService.updateArticle(articleBean);
	}
}