package com.xue.learn.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

/**
 * Blog入口类
 * 
 * @author xx57
 * @since 2019-08-14
 * @version 0.01
 */
@SpringBootApplication
@ServletComponentScan
public class BlogMain {

	public static void main(String[] args) {
		SpringApplication.run(BlogMain.class, args);
	}
}
