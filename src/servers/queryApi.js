var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

function queryApi(path, params, method) {
    return new Promise(function (resolve, reject) {
        var postData, options;
        postData = querystring.stringify(params);

        options = {
            protocol: 'http:',
            hostname: 'www.lb717.com',
            path: path,
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                //'Content-Length': Buffer.byteLength(postData)
            }
        };
        if (method == 'GET') {
            options.path = path + '?' + postData;
        }
        var data = '';
        var clientRequest = http.request(options, function (response) {
            response.setEncoding('utf8')
            response.on('data', function (chunk) {
                data += chunk
            })
            response.on('end', function () {
                resolve(data)
                console.log('数据请求完成')
            })
        });

        clientRequest.on('error', (e) => {
            resolve(`请求遇到问题: ${e.message}`)
        });

        if (method == "POST") {
            clientRequest.write(postData)
        }

        clientRequest.end()
    })
}

module.exports = queryApi;
