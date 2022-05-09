const http = require('https');           
            
const requestURLUsers = "https://jsonplaceholder.typicode.com/users";
const requestURLComments = "https://jsonplaceholder.typicode.com/comments";


function sendRequestAsyncObject (method, url, elem){
    return new Promise(function(resolve, reject) {
        const req = http.request(url, res => {
            var fullData = "";

            res.on(
                'data',
                chunk => {
                    fullData += chunk.toString();
                }
            );

            res.on('error', reject);
            res.on('end', ()=> resolve((JSON.parse(fullData)).map(base =>base[elem])));
        })
        req.end()
    })
}



async function getResultsAsyncObj() {
    var value1 = await sendRequestAsyncObject("GET", requestURLUsers, "name");
    var value2 = await sendRequestAsyncObject("GET", requestURLComments, "body");
    var removedArray2 = value1.map((user, i) => ({user: user, comments: value2.splice(0,3)}));
    return removedArray2;
}

getResultsAsyncObj();

module.exports = getResultsAsync;


var objAsync = {
    method : "GET",
    url : " "
}
