/**
 * Created by zam on 2016/8/1.
 */

'use strict';

let PORT = process.env.PORT || 9090;

const express = require('express');

let app = express();

app.listen(PORT,()=>{
	
	console.log('服务启动成功' + PORT);
});
