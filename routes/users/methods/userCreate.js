const data = require("../data")
module.exports = (req, res) => {
    let body = ""
    req.on("data", chunk => {
        body += chunk
    })
    req.on("end", () => {
        try {
            const parsedBody = JSON.parse(body)
            const name = parsedBody.name
            const password = parsedBody.password
            if (name && password) {
                data.addUser({
                    name: name,
                    password: password
                })
                console.log("New User" + JSON.stringify({
                    name: name,
                    password: password
                }))
                res.writeHead(201, { "Content-Type": "application/json" })
                res.end(JSON.stringify({
                    "status": "CREATED", data: {
                        name: name,
                        password: password
                    }
                }))
            }
        }
        catch (error) {
            console.error('Error parsing JSON:', error);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ "error": "Error parsing JSON data." }));
        }
    })
}