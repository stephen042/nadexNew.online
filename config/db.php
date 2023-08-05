<?php

@define('DBSERVER', 'localhost');
@define('DBUSERNAME', 'root');
@define('DBPASSWORD', '');
@define('DBNAME', 'astromine');

 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}



?>

