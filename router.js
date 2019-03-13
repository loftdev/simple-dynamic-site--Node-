var Profile = require("./profile.js");


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

        //getjson from treehouse 
        var studentProfile = new Profile(username);
        //on "end"
            
        studentProfile.on("end", function(profileJSON){
            //show profile

            //store the values which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges,
                javascriptPoints: profileJSON.points.JavaScript
            }
            //Simple response
            res.write(values.username + " has " + values.badges + "badges\n");
            res.end("Footer\n");

        });

        //on "error"
        studentProfile.on("error", function(error){
            //show error
            res.end("Footer\n");
        });
            
        
        
        
        
    }

}

module.exports.home = home;
module.exports.user = user;