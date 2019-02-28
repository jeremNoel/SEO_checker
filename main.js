import Request from './js/request.js';
import constructDom from './js/domCreator.js';

const dom = document.getElementById('root');
dom.appendChild(constructDom());

constructDom();

document.querySelector(".button-url").addEventListener("click", function( event ) {
    let url = document.querySelector(".input-url").value;
    const request = new Request(url);
    const result = request.requestCrawler(url);

    result.then(function (v) {
        console.log('RESULT = ' + v.responseText);

    });
});

console.log('main.js');


function interpolate(str,json) {
    const regex = /\{{([^$]*)\}}/gm;
    let match = regex.exec(str);
    const keyObject = Object.keys(json);
    const valueObject = Object.values(json);
    if (keyObject[0] === match[1])
        return str.replace(match[0], valueObject[0]);
    else
        return false;
}
console.log(interpolate("Bonjour, je m'appelle {{name}}",{name: "jeremie"}));

