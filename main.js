import Request from './js/request.js';
import constructDom from './js/domCreator.js';
import * as utils from './js/utils.js'


const dom = document.getElementById('root');
dom.appendChild(constructDom());

constructDom();

document.querySelector(".button-url").addEventListener("click", function( event ) {
    let url = document.querySelector(".input-url").value;
    const request = new Request(url);
    const result = request.requestCrawler(url);

    result.then(function (v) {
        console.log('RESULT = ' + v.responseText);
        initInterpolate(v.responseText);

    });


    // console.log(utils.interpolate("Bonjour, je m'appelle {{name}}",{name: "jeremie"}));
    
});

function initInterpolate(json) {
    let object = JSON.parse(json);
    console.log(object);
    let responseCodeElem = document.getElementById('responseCodeValue');
    let responseTimeElem = document.getElementById('responseTimeValue');
    let responseH1Elem = document.getElementById('responseH1Value');
    let responseMetaElem = document.getElementById('responseMetaValue');

    responseCodeElem.textContent = utils.interpolate(responseCodeElem.textContent, {responseCode: object['responseCode']});
    responseTimeElem.textContent = utils.interpolate(responseTimeElem.textContent, {responseTime: object['responseTime']});
    // responseSizeElem.textContent = utils.interpolate(responseSizeElem.textContent, {fileSize: object['responseSizeValue']});
    responseH1Elem.textContent = utils.interpolate(responseH1Elem.textContent, {h1: object.element['h1']});
    responseMetaElem.textContent = utils.interpolate(responseMetaValue.textContent, {meta: object.element['meta']});



}

console.log('main.js');




