import axios from 'axios';

async function executioner(Query, type) {
    let URL = `http://localhost/health_db.php?QUERY=${Query}&&TYPE=${type}`;
    // this url goes to the php file with the given query and query type
    let result = await axios.post(URL, {}, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    });
    console.log("Start");
    console.log(Query);
    console.log(result);
    console.log("end");
    return result;
}
export default executioner;