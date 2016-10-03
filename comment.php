<?php
$con=mysql_connect('localhost','root','');
  $table=mysql_select_db('blog',$con);
$name=$_POST["name"];
var_dump($name);
$phone=$_POST["phone"];
$email=$_POST["email"];
$content=$_POST["content"];
$belong=$_POST["belong"];
$insertsql="insert into comment (name,phone,email,content,belong) values ('$name','$phone','$email','$content','$belong')";
$insert=mysql_query($insertsql,$con);
?>
