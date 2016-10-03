<?php
  $con=mysql_connect('localhost','root','');
  $table=mysql_select_db('blog',$con);
$accept=$_GET["data"];
$sql="select * from articles where articletitle=$accept";
$sqlcomment="select * from comment where belong=$accept";
$responsea=mysql_query($sql,$con);
$responsec=mysql_query($sqlcomment,$con);
$row1=mysql_fetch_object($responsea);
$row2=mysql_fetch_object($responsec);
$row=[];
if($row2!=null){
    array_push($row,$row1,$row2);
}
else{
    array_push($row,$row1);
}

    echo json_encode($row);
?>