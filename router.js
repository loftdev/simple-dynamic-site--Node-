// Handle HTTP route GET / and POST / i.e. Home
function home(req, res) {

    //if url == "/" && GET
    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("Header\n");
        res.write("search\n");
        res.end("Footer\n");
        //show search

    }
}

//if url == "/" && POST
//redirect to /:username

// Handle HTTP route GET  / :username i.e. / chalkers

function user(req, res) {
    //if url == "/..."
    var username = req.url.replace("/", "");
    if (username.lenght > 0) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("Header\n");
        res.write(username + "\n");
        res.end("Footer\n");
        //getjson from treehouse 
        //on "end"
        //show profile
        //on "error"
        //show error
    }

}

module.exports.home = home;
module.exports.user = user;