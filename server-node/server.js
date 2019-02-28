const express = require('express');
const fs = require('fs');
const cors = require('cors');
const request = require('request');
const cheerio = require('cheerio');
let app     = express();

app.use(cors());

app.get('/scrape/:url', function(req, res){

    const requestUrl = "http://"+req.params.url;

    request.get({url: requestUrl, time: true}, function(error, response, html){
        var json = {
            "responseCode": "",
            "responseTime": "",
            "fileSize": "",
            "element": {
                "h1": "",
                "meta": "",
                "description": "",
                "title": "",
                "link": "",
                "script": "",
            },
        };

        if(!error){
            var $ = cheerio.load(html);

            const h1Dom = $('html').find('h1').length;
            const metaDom = $('html').find('meta').length;
            const descriptionDom = $('html').find('description').length;
            const titleDom = $('html').find('title').length;
            const linkDom = $('html').find('link').length;
            const scriptDom = $('html').find('script').length;

            json.responseCode = response.statusCode;
            json.responseTime = response.elapsedTime;
            json.fileSize = response.content;
            json.element.h1 = h1Dom;
            json.element.meta = metaDom;
            json.element.description = descriptionDom;
            json.element.title = titleDom;
            json.element.link = linkDom;
            json.element.script = scriptDom;
        }

// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

        // fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

        //     console.log('File successfully written! - Check your project directory for the output.json file');

        // });

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.

        res.send(json);

    }) ;
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;