class Request {

    constructor(url) {
        this.url = url;
    }

    getResponseServer(url) {
        return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    reject(false);
                }, 5000);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
                    resolve(xmlHttp);
                }
            };
            xmlHttp.open("GET", 'http://localhost:8081/scrape/'+url, true); // true for asynchronous
            xmlHttp.send(null);
        });
    }

    requestCrawler(url) {
        return this.getResponseServer(url);
    }
}

export default Request;