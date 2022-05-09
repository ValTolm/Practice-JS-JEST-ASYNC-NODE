 const http = require('https');           
            
//https://jsonplaceholder.typicode.com/
const requestURLUsers = "https://jsonplaceholder.typicode.com/users";

//Request to 2 bases
const requestURLComments = "https://jsonplaceholder.typicode.com/comments";


//async await
function sendRequestAsync (method, url, elem){
    return new Promise(function(resolve, reject) {
        const req = http.request(url, res => {
            var fullData = "";

            res.on(
                'data',
                chunk => {
                    fullData += chunk.toString();
                    // resolve(
                    // JSON.parse(data.toString())
                }
            );

            res.on('end', ()=> resolve((JSON.parse(fullData)).map(base =>base[elem])));
        })

        req.on('error', reject);
        req.end()
    })
}



async function getResultsAsync() {
    var value1 = await sendRequestAsync("GET", requestURLUsers, "name");
    var value2 = await sendRequestAsync("GET", requestURLComments, "body");
    var removedArray2 = value1.map((user, i) => ({user: user, comments: value2.splice(0,3)}));
    // console.log(removedArray2)
    return removedArray2;
}

// getResultsAsync().then(result => result)

// module.exports = getResultsAsync;

//async await 2
function sendRequestAsync2 (method, url){
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
            res.on('end', ()=> resolve((JSON.parse(fullData)).map(base =>base)));
        })
        req.end()
    })
}

async function filterEmails(){
    var users = await sendRequestAsync2("GET", requestURLUsers);
    // var valueMail = ["fhgkfk@fggfg.biz", "eiejij@mail.tue", "lojll@mail.biz"];
    var pattern = /biz/;
    var emailFilter = users.filter(function mailTest(email,i) {
        if (pattern.test(users[i].email)){return users[i].email
        }
     })
     
    //  .map(afterFilt => afterFilt.name)
    //  console.log(emailFilter);
}

filterEmails().then(result => result)

//async 3

function sendRequestAsync3 (method, url){
    return new Promise(function(resolve, reject) {
        const req = http.request(url, res => {
            var fullData = "";

            res.on(
                'data',
                chunk => {                
                    fullData += chunk.toString();
                    console.log(fullData)
                }
            );
            res.on('end', () => resolve((JSON.parse(fullData)).map(base =>base)));
        })
        req.on('error', reject);

        req.end()
    })
}

async function getUsers(alternativeGateway){
    var users2 = await sendRequestAsync3("GET", alternativeGateway || requestURLUsers);
    // {
    //     return arr.filter(function smth(arr, i){
    //         if (filterConditions.email(arr) === true && filterConditions.id(arr) ===true) 
    //         return arr})}
    
        return filterParameters(users2, filterConditions)
    
}

function getUsers2(alternativeGateway){
    return new Promise((res, rej) => 
        sendRequestAsync3("GET", alternativeGateway || requestURLUsers)
            .then(res)
            .catch(() => rej('Unable to fetch users'))
    )
}

// getUsers2("https://www.go3ogle.com").then(result => console.log(result)).catch(console.log);


// getUsers().then(result => console.log(result));

const filterParameters = (arr, filterCond) => {
    return arr.filter(function (obj, i){ 
        return Object.values(filterCond).map(function(func){
            return func(obj)}
        )
            .every((row)=> {return row ===true})
        })};

 
var filterConditions = {
    email :  function(arr){return /.biz/.test(arr.email)},
    id : function (arr) {return arr.id > 1}
};
                        
// module.exports = getUsers;
module.exports = {
    getResultsAsync,
    getUsers,
    getUsers2,
    filterParameters,
};

