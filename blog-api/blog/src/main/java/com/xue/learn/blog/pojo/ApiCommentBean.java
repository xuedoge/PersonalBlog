package com.xue.learn.blog.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Comment bean
 * 
 * @author xx57
 * @since 8.15
 * @version 0.01
 */
@Entity() // 告知JPA这是一个实体类
@Table(catalog = "Intern_test", schema = "xx57", name = "blog_Comment") // 告知JPA将这个实体类映射到数据表
public class ApiCommentBean {

	@Id
	private int commentID; // 告知JPA这是主键，文章id
	@Column
	private int articleID; // 所属文章
	@Column
	private int fatherID; // 回复评论ID
	@Column
	private String createTime;
	@Column
	private String userName;
	@Column
	private String content;

	public int getCommentID() {
		return commentID;
	}

	public void setCommentID(int commentID) {
		this.commentID = commentID;
	}

	public int getArticleID() {
		return articleID;
	}

	public void setArticleID(int articleID) {
		this.articleID = articleID;
	}

	public int getFatherID() {
		return fatherID;
	}

	public void setFatherID(int fatherID) {
		this.fatherID = fatherID;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getContent() {
		return content;
	}

	public void setConten(String content) {
		this.content = content;
	}

}
