<?php 
header('Content-type: json/application');
header('Access-Control-Allow-Origin: *');

$db = new SQLite3('mydb.sql');

$type = $_GET['type'];
$count = $_GET['count'];
$users = [];
if ($type === 'users'){
    if ($count == 50){
        $res = $db->query('SELECT * FROM users WHERE id <= '.$count.'');
    }else{
        $res = $db->query('SELECT * FROM users WHERE id > '.($count - 20).' AND id <= '.$count.'');
    }

    while ($row = $res->fetchArray()) {
        $users[] = [
            'id' => $row['id'],
            'name' => $row['name'],
        ];
    }
}
echo json_encode($users);
