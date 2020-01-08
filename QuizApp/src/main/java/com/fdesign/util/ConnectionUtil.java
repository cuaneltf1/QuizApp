package com.fdesign.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionUtil {
	static {
		try {
			Class.forName("oracle.jdbc.OracleDriver");
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
		}
	}
	
	public static Connection getConnection() throws SQLException {
		String url = System.getenv("QUIZ_DB_URL");
		String username = System.getenv("QUIZ_DB_USERNAME");
		String password = System.getenv("QUIZ_DB_PASSWORD");
		return DriverManager.getConnection(url, username, password);
	}
}
