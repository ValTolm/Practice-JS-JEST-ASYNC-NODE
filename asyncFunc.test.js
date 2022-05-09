const {getResultsAsync, getUsers, getUsers2}= require("./asyncFunc");
const Validator = require("jsonschema").Validator;

//1
test("async function getResultsAsync returns valid structure(objects in array", async() =>{
    const data = await getResultsAsync();

    expect(Array.isArray(data) && 
    !data.map((dataItem,i) => typeof dataItem ==='object').includes(false)).toBe(true);
});
//2
test("async function getResultsAsync returns valid structure(objects in array)", async() =>{
    const data = await getResultsAsync();
    var validator = new Validator();
    var schema= {
        "type": "array",
        "items": {
            "type": "object",
            "properties":{
                "user": {"type": "string"},
                "comments": 
                    {"type": "array",
                    "items": 
                        {"type": "string", "minItems": 0, "maxItems": 3},
                    }
            },
            "required": ["user", "comments"]
        }
    };

    expect(validator.validate(data,schema).valid).toBe(true)

});

//3
test("async function filterParameters", async() =>{
    const data = await getUsers();
    var filterValidator = new Validator();

    var filterConditions = {
        properties: {
            "email": {"pattern": /biz/ },
            "id": {"minimum" : 2}
        }
    };

    expect(filterValidator.validate(data, filterConditions).valid).toBe(true)

}
);
//4 getUsers2
describe("testing alternativeGateway mistake", () => {
    test("test google.com gateway", async() =>{
        // var alternativeGateway = "https://jsonplaceholder.typicode.com/todos";
        var alternativeGateway = "https://go3ogle.com";
        await expect(getUsers2(alternativeGateway)).rejects.toMatch('Unable to fetch users');


    })
})

