window.onload = function(){
			var inp = document.getElementById("inp");
			var dropbox = document.getElementById("dropbox");
			var left = document.getElementById("left");
			var right = document.getElementById("right");
			var musicarea = document.getElementById("musicarea");
			var choices = document.querySelectorAll(".choice");
			var spans = document.querySelectorAll(".choice .text");
			var pics = document.querySelectorAll(".pic");
			var circleimg = document.getElementsByClassName("circleimg");
			var musickinds = document.getElementsByClassName("musickinds")[0];
//			console.log(musickinds);
			var firstpage = document.getElementsByClassName("firstpage")[0];
			var secondpage = document.getElementsByClassName("secondpage")[0];
			var intro2 =document.getElementsByClassName("intro2")[0];
			
			inp.onfocus = function(){
				dropbox.style.display = "block";		
			}
			inp.onblur = function(){
				dropbox.style.display="none";
				inp.placeholder="搜索音乐、MV、歌单、用户";
			}
			//给所有图片盒子绑定鼠标移入事件
			for(var i=0; i<pics.length;i++){
				var pic = pics[i];
				pic.index = i;
				pic.onmousemove =function(){
					circleimg[this.index].style.display="block";
				}
				pic.onmouseleave = function(){
					circleimg[this.index].style.display="none";
				}
			}
////			var list =document.getElementsByTagName("ul")[0].children;
////				console.log(list);
////	        for(var i = 0;i<list.length; i++){
////	        	list.onclick = function(){
////	        		alert("aaa");
////	        	}
//	        }
			musicarea.onmousemove = function(){
				imgleft.style.width="77px";
				imgright.style.width="77px";
			}
			musicarea.onmouseout = function(){
				imgleft.style.width="0px";
				imgright.style.width="0px";
			}
			//轮播图
			var count = 0;
		
			left.onclick = function(){
				var mleft = musickinds.offsetLeft;
				//为什么不进入判断
				if(mleft == -1185){
//					mleft = mleft +1185;
					musickinds.style.left =parseInt(musickinds.style.left)+1185+"px";		
					console.log(musickinds.style.left);
				}
				mleft = mleft - 1185;
				musickinds.style.left = mleft +"px";
			}
			right.onclick = function(){
				var mleft = musickinds.offsetLeft;
				//为什么不进入判断
				if(mleft == 0){
					mleft = mleft -1185;
					musickinds.style.left =mleft+"px";			
				}
				mleft = mleft + 1185;
				musickinds.style.left = mleft +"px";
				console.log(musickinds.style.left);
			}
		}
		
      