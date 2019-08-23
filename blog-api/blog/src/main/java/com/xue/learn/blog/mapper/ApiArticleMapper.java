package com.xue.learn.blog.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.xue.learn.blog.pojo.ApiArticleBean;

/**
 * MyBatis Mapper 接口
 * 
 * @author xx57
 * @since 7-31
 */
@Mapper // 申明这是一个Mapper接口，Mybatis扫描到它后将去寻找Mapper.xml文件以生成这个接口的实现
public interface ApiArticleMapper {

	/**
	 * show all by class
	 * 
	 * @param classID
	 * @return bean[]
	 */
	public ApiArticleBean[] showArticles(int classID);

	/**
	 * show an by id
	 * 
	 * @param articleID
	 * @return bean
	 */
	public ApiArticleBean showAnArticle(int articleID);

	/**
	 * show content by id
	 * 
	 * @param articleID
	 * @return string
	 */
	public String getContent(int articleID);

	/**
	 * add by bean
	 * @param articleBean(classID, title, content)
	 */
	public void addArticle(ApiArticleBean articleBean);
	/**
	 * update by bean
	 * @param articleBean
	 */
	public void updateArticle(ApiArticleBean articleBean);
	/**
	 * del by id
	 * @param articleID
	 */
	public void delArticle(int articleID);
}
