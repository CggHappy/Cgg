var express = require('express');
var bodyparser = require('body-parser');
var queryApi = require('./queryApi');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var app = express();

app.use(bodyparser.json());

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, token');
    res.header('Content-Type', 'application/json');

    next();
});

// 注册
let register = './api/register.js';
// app.post('/mall/index/UserList', register);
app.post(register, function (req, res) {
    res.writeHead(200);
    console.log(req.body);
    var userList = fs.readFileSync('./data_table/userList.json', { encoding: 'utf-8' });
    console.log(userList);
    userList = JSON.parse(userList);
    userList.list.push(req.body);
    fs.writeFileSync('./data_table/userList.json', JSON.stringify(userList));
    var obj = {
        'code': 1,
        'msg': 'SUCCESS'
    };
    res.end(JSON.stringify(obj));
});

// goods商品
app.post('/mall/index/getGoodsChannel', function (req, res) {
    console.log(req.body);
    res.status(200);
    queryApi('/mall/index/getGoodsChannel', req.body, 'POST').then(data => {
        res.end(data);
    });
});

app.post('/mall/goods/recommendgoods', function (req, res) {
    console.log(req.body);
    res.status(200);
    queryApi('/mall/goods/recommendgoods', req.body, 'POST').then(data => {
        res.end(data);
    });
});

app.listen('3000', function () {
    console.log('server listen 3000');
});