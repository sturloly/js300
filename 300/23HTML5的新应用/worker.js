var time = 0;	//定义变量time记录已经过去的时间
setInterval(function(){	//每隔一分钟执行一次
	time += 1;
	postMessage(time);//把数据传递给前台的js程序
},6*1000);