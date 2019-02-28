import Request from './js/request.js';
import constructDom from './js/domCreator.js';
import interpolate from './js/utils.js';

const dom = document.getElementById('root');
dom.appendChild(constructDom());

constructDom();

document.querySelector(".button-url").addEventListener("click", function( event ) {
    let url = document.querySelector(".input-url").value;
    const request = new Request(url);
    //const requestor =
    // let requestor = request.requestCrawler(url);
    let requestor = {
        "responseCode": "200",
        "responseTime": "20",
        "fileSize": "10",
        "element": {
            "h1": "1",
            "meta": "2",
            "description": "1",
            "title": "1",
            "link": "4",
            "script": "5",
        },
    };

    interpolate("Bonjour, je m'appelle {{name}}",{name: "jeremie"});
    
});

console.log('main.js');
