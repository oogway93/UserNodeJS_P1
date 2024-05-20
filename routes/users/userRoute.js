const url = require("url")

const usersGetAll = require("./methods/userGetAll")
const userCreate = require("./methods/userCreate")

const usersRoute = (req, res) => {
    const path = url.parse(req.url, true).pathname
    const method = req.method

    const defaultUrl = "/api/users"

    if (path === defaultUrl && method === "GET") { usersGetAll(req, res) }
    else if (path === defaultUrl && method === "POST") { userCreate(req, res) }
};
module.exports = usersRoute