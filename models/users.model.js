const {v4: uuidv4} = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "tareq aziz", 
        email: "tareqaziz@gmail.com", 
    },
    {
        id: uuidv4(),
        username: "farhan rahman", 
        email: "farhanrahman@gmail.com", 
    },
];
module.exports = users;