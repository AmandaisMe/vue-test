<?php
  $data = file_get_contents('https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=365');
	echo $_GET['callback'].'('.$data.')';

?>