安装：npm i --save lodash
使用：
    全量引用：var _ = require('lodash');
    只引用数组模块：var array = require('lodash/array');
    只引用对象模块：var object = require('lodash/fp/object');

lodash.js常用方法：

    _.drop(Array,num):从数组的的起始索引开始删除指定数量的项目
    _.dropRight(Array,num):从数组的的结束索引开始删除指定数量的项目
    _.pull(Array1,item):从数组1中删除与item相同的项目，类似去重，但是可以指定删去哪一项
    _.last() 返回数组的最后一项, 类似于arr[arr.length-1]
    _.uniq(Array) 数组去重，具体参照文档
    _.countBy(Array,func) 返回数组中每一项的重复次数
    _.clone(Object) 拷贝
    _.cloneDeep(Object) 深拷贝
    _.random() 返回指定区间的随机数
    _.camelCase() 字符串转驼峰写法


ES6/7很多新增方法其实来源于lodash，以及JQuery ，还有很多常用方法已经出现在ES6规范中，在此不再列举，自行查阅文档