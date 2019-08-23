package com.xue.learn.blog.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.xue.learn.blog.pojo.ApiCommentBean;

/**
 * MyBatis Mapper 接口
 * 
 * @author xx57
 * @since 7-31
 */
@Mapper // 申明这是一个Mapper接口，Mybatis扫描到它后将去寻找Mapper.xml文件以生成这个接口的实现
public interface ApiCommentMapper {

	/**
	 * show all comment by articleID
	 * 
	 * @param articleID
	 * @return
	 */
	public ApiCommentBean[] showComments(int articleID);

	/**
	 * add by reply who(fatherID)
	 * 
	 * @param fatherID
	 */
	public void addComment(ApiCommentBean commentBean);

	/**
	 * del by commentID
	 * 
	 * @param commentID
	 */
	public void delComment(int commentID);
}
