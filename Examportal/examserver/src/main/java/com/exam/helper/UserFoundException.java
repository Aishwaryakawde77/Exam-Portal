package com.exam.helper;

public class UserFoundException extends Exception
{
   
	public UserFoundException()
	{
		super("user is already in database ! try anotherone");
	}
	
	public UserFoundException(String msg)
	{
		super(msg);
	}
}
