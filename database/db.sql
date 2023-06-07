create database myurl;
use myurl;

create table hashurl(

	hash varchar(10) primary key,
	count int(0),
	url varchar(600) unique not null 
); 
