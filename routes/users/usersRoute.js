const usersRoute = (req, res) => {
    const path = url.parse(req.url, true).pathname
    const method = req.method

    const defaultUrl = "/api/users/"
    if (path === defaultUrl && method === "GET"); usersGetAll(req, res)

};