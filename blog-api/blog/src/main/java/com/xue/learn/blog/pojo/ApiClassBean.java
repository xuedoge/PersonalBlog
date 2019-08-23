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
@Table(catalog = "Intern_test", schema = "xx57", name = "blog_Classes") // 告知JPA将这个实体类映射到数据表
public class ApiClassBean {

	@Id private int classID;   // 告知JPA这是主键
	@Column private String className;

	public int getClassID() {
        return classID;
    }
    public void setClassID(int classID) {
        this.classID = classID;
    }
    public String getClassName() {
        return className;
    }
    public void setClassName(String className) {
        this.className = className;
    }

}
