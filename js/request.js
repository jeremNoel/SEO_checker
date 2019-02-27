class Request {

    constructor (url){
        this.url = url;
    }

    getResponseServer(url) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject(false);
            }, 20000);

            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                    resolve(xmlHttp);
            };
            xmlHttp.open("GET", 'http://localhost:8081/scrape/'+url, true); // true for asynchronous
            xmlHttp.send(null);
        });
    }

    requestCrawler(url) {
        console.log("request : ", this.url);

        console.log(url);
        console.log(this.getResponseServer(url));

        this.getResponseServer(url)
            .then(function(v){
                console.log(v);
            })
            .catch(function(v){
            console.log('rejected', v);
        });

        /*let promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject(false);
            }, 10000);

            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                    resolve(xmlHttp);
            };
            xmlHttp.open("GET", 'http://localhost:8081/scrape/'+url, true); // true for asynchronous
            xmlHttp.send(null);

          });*/
          // resolve runs the first function in .then
/*          promise.then(function(value) {
              console.log("response : ",JSON.parse(value.response));
                return {
                    isCrawlable: true,
                    value: JSON.parse(value.response)
                }
          }).catch(function(e) {
                return {
                    isCrawlable: false,
                    value: {}
                }
          });*/
    }
}
export default Request;