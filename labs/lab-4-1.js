﻿/*
 *	ЗАДАНИЕ 1

 1. Скопируйте сюда последнюю рабочую версию кода из файла lab-3.js
 2. Закомментруйте строчки
 - var fs = require...
 - fs.createReadStream....
 3. Создайте файл get-file.js.
 4. В файле get-file.js:
 4.1. Подключите модуль fs
 4.2. Опишите ф-цию getFile, которая принимает в качестве аргумента имя файла и возвращает результат выполнения метода createReadStream
 4.3. Экспортируйте ф-цию getFile
 4.4. Сохраните файл get-file.js
 5. Сохраните данный файл
 */

var fs = require("./get-file");
var msg = require("./logs");
var http = require("http");
http.createServer(function(req, res){
 msg.info("Download start");
 res.writeHead(200, {'Content-Type': 'image/gif'});
 var file = fs("logo.gif");
 file.pipe(res);
}).listen(8082);


/*
 *	ЗАДАНИЕ 2

 1. Создайте файл logs.js.
 2. В файле logs.js:
 2.1. Создайте и опишите три ф-ции: warn, info и error, которые принимают в качестве аргумента строку и выводят её в консоль с соотвествующим префиксом, например "Info: какая-то строка" или "Error: какая-то строка"
 2.2. Экспортируйте эти ф-ции как методы объекта
 2.3. Сохраните файл logs.js
 3. Сохраните данный файл
 */

/*
 *	ЗАДАНИЕ 3

 1. В данном файле подключите модули get-file и logs
 2. Сделайте код рабочим, используя модуль get-file
 3. Выведите произвольные сообщения в консоль, используя модуль logs
 4. Сохраните файл. Запустите сервер через консоль.
 5. Запросите сервер через браузер и убедитесь в корректной работе кода
 */