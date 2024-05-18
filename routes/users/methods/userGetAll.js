module.exports = (req, res) => {
    res.writeHead(200)
    res.end(JSON.stringify({status: "awesome works"}))
}