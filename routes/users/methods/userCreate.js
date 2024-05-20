module.exports = (req, res) => {
    let body = ""
    console.log(body)
    req.on("data", chunk => {
        body += chunk
    })
    req.on("end", () => {
        try {
            const json = JSON.parse(body)
            console.log(json)
            if (json) {
                res.writeHead(201, { "Content-Type": "json/application" })
                res.end(JSON.stringify({ "status": "CREATED", data: json }))
            }
        }
        catch (error) {
            console.error('Error parsing JSON:', error);

            res.writeHead(400, { "Content-Type": "json/application" });
            res.end(JSON.stringify({ "error": "Error parsing JSON data." }));
        }
    })
}