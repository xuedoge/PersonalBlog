package com.xue.learn.blog.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Classes and articles
 * 
 * @author xx57
 * @since 8.15
 * @version 0.01
 */
@Entity() // 告知JPA这是一个实体类
@Table(catalog = "Intern_test", schema = "xx57", name = "blog_Articles") // 告知JPA将这个实体类映射到数据表
public class ApiArticleBean {

	@Id
	private int articleID; // 告知JPA这是主键，文章id
	@Column
	private int classID; // 所属类别
	@Column
	private String title;
	@Column
	private String createTime;
	@Column
	private String lastEditDate;

	@Column
	private int viewNum;
	@Column
	private int likeNum;
	@Column
	private int comNum;;

	private String content;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getArticleID() {
		return articleID;
	}

	public void setArticleID(int articleID) {
		this.articleID = articleID;
	}

	public int getClassID() {
		return classID;
	}

	public void setClassID(int classID) {
		this.classID = classID;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public String getLastEditDate() {
		return lastEditDate;
	}

	public void setLastEditDate(String lastEditDate) {
		this.lastEditDate = lastEditDate;
	}

	public int getViewNum() {
		return viewNum;
	}

	public void setViewNum(int viewNum) {
		this.viewNum = viewNum;
	}

	public int getLikeNum() {
		return likeNum;
	}

	public void setLikeNum(int likeNum) {
		this.likeNum = likeNum;
	}

	public int getComNum() {
		return comNum;
	}

	public void setComNum(int comNum) {
		this.comNum = comNum;
	}

}
