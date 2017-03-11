<?php
	$data = file_get_contents('https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=365');
	echo $_GET['callback'].'('.$data.')';

?>