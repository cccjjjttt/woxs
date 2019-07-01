aa(){
	var d= [];
	var h= [];
	var m= [];
	var s= [];
	var timer = setInterval(function () {
		
		      
				//获取当前时间
				var currentTime = new Date().getTime();
				// console.log('currentTime ==> ', currentTime);

				//获取结束时间
				var endTime = new Date('2019-12-06 22:10:18').getTime();
				// console.log('endTime ==> ', endTime);

				//时间差
				var time = endTime - currentTime; //毫秒差

				if (time < 0) {
					//清除定时器
					clearInterval(timer);
					timer = null;
					return;
				}

				//天
				var day = Math.floor(time / 1000 / 60 / 60 / 24);
				day = day >= 10 ? day : '0' + day;

				//时
				var hour = Math.floor(time / 1000 / 60 / 60 % 24);
				hour = hour > 10 ? hour : '0' + hour;

				//分
				var minute = Math.floor(time / 1000 / 60 % 60);
				minute = minute > 10 ? minute : '0' + minute;
                
				//秒
				var second = Math.floor(time / 1000 % 60);
				second = second > 10 ? second : '0' + second;
               
				var result = day + '天 ' + hour + '时 ' + minute + '分 ' + second + '秒';
		       //console.log('result ==> ', result);
				
				d.push(day);
                var b1 = d.length;
                var c1 = d.splice(b1-1,1);
                
                h.push(hour);
                var b2 = h.length;
                var c2 = h.splice(b2-1,1);
                
				m.push(minute);
                var b3 = m.length;
                var c3 = m.splice(b3-1,1);
                
                s.push(second);
                var b4 = s.length;
                var c4 = s.splice(b4-1,1);

                document.getElementById("day").innerHTML= c1;
                document.getElementById("hour").innerHTML= c2;
                document.getElementById("minute").innerHTML= c3;
                document.getElementById("second").innerHTML= c4;
				
			}, 1000)
	       
	        
	
}