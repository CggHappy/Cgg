var fs = require('fs');
module.exports = function (req, res) {
    res.writeHead(200);
    console.log(req.body);
    var userList = fs.readFileSync('./data_table/userList.json', { encoding: 'utf-8' });
    console.log(userList);
    userList = JSON.parse(userList);
    userList.list.push(req.body);
    fs.writeFileSync('./data_table/userList.json', JSON.stringify(userList));
    var obj = {
        "code": 1,
        "msg": "SUCCESS"
    };
    res.end(JSON.stringify(obj));
};