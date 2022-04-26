<?php
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Origin: *');
// executes given query
function executeQuery()
{
    $host = "localhost";
    $username = "root";
    $password = "";
    $db = "health";
    // connect to database
    $mysqli = mysqli_connect($host, $username, $password, $db);
    if (!isset($status)) $status = new stdClass();
    if ($mysqli->connect_errno) {
        $status->status_code = 500;
        $status->response = "internal server error";
        $status->error = $mysqli->connect_errno;
        echo json_encode($status);
        exit();
    }


    if ($result = mysqli_query($mysqli, $_GET["QUERY"])) {
        if (!isset($response)) $response = new stdClass();
        $response->query = $_GET["QUERY"];
        $response->query_type = $_GET["TYPE"];
        $response->status = $result;
        if ($_GET["TYPE"] == "GET") {
            $response->data = $result->fetch_all(MYSQLI_ASSOC);
        }
        echo json_encode($response);
    } else {
        if (!isset($response)) $response = new stdClass();
        $response->query = $_GET["QUERY"];
        $response->query_type = $_GET["TYPE"];
        $response->status = false;
        $response->error = mysqli_error($mysqli);
        echo json_encode($response);
    }
    // close connection
    mysqli_close($mysqli);
    exit();
}

executeQuery();


?>