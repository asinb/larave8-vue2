var express = require('express')
const app  =express()


app.use((request,response,next)=>{
	console.log('有人请求了服务器1');
	next()
})


app.get('/test1',(request,response,next)=>{

	const students = [
		{id:'001',name:'tom'},
		{id:'002',name:'tom2'},
	]

	response.send(students)

})


app.listen(5000,(err)={
	
	// if(!err){
	// 	console.log("服务器启动成功")
	// }
})