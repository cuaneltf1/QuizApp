package com.fdesign.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fdesign.daos.UserDao;
import com.fdesign.models.User;
import com.fdesign.models.UserSecure;

public class UserServlet extends HttpServlet{
	
	private UserDao userDao = UserDao.currentImplementation;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		List<UserSecure> users;
		
		users = userDao.findRegularUsers();
		
		ObjectMapper om = new ObjectMapper();
		String json = om.writeValueAsString(users);
		
		resp.addHeader("content-type", "application/json");
		resp.getWriter().write(json);
	}

}
