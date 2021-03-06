var express = require("express");
var router = express.Router();
var crud = require("./crud.js");

router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// 编写接口了  注册
router.post("/createuser", function(req, res) {
	//接受用户参数
	var name = req.body.name;
	var pwd = req.body.pwd;
	// 给方法的参数准备好
	var sql = "insert into user values (null,?,?)";
	var arr = [name, pwd];
	crud.insertData(sql, arr, function(result) {
		if (result.affectedRows) {
			res.json(200, {
				"msg": "success",
				"code": 100
			})
		} else {
			// code:100成功  code：200失败
			res.send(200, {
				"msg": "error",
				"code": 200
			})
		}
	})
})

router.post("/login", function(req, res) {
	// 用户传递的数据
	var name = req.body.name;
	var sql = "select * from user where name=?"
	var loginArr = [name];
	crud.selectData(sql, loginArr, function(result) {
		if (result) {
			res.send(result)
		} else {
			res.send({
				"msg": "登陆失败"
			})
		}
	})
})



module.exports = router;