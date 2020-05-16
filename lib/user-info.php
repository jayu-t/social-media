<?php

function getUserName($userid) {
  global $connect;
  $query = "
    SELECT firstname, middlename, lastname FROM users WHERE userid = '$userid'
  ";
  $result = mysqli_query($connect, $query);
  $row = mysqli_fetch_array($result);
  $userName = array();
  $userName['firstname'] = $row['firstname'];
  $userName['middlename'] = $row['middlename'];
  $userName['lastname'] = $row['lastname'];
  
  return $userName;

  /*echo $userName['firstname']."<br>";
  echo $userName['middlename']."<br>";
  echo $userName['lastname']."<br>";*/
}
//getUserName('Ganesh/..v02Wy');
?>