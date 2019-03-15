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
			musicarea.onmousemove = function(){
				imgleft.style.width="77px";
				imgright.style.width="77px";
			}
			musicarea.onmouseout = function(){
				imgleft.style.width="0px";
				imgright.style.width="0px";
			}
			//手动切换图
			var timer;
			var count = 0;
			//向左滑动切换
			left.onclick = function(){
				count++;
				var target =-1200-count*(pics[5].offsetLeft-pics[0].offsetLeft);
				timer = setInterval(function(){
					musickinds.style.left = musickinds.offsetLeft - 20+"px";
					if(musickinds.offsetLeft<target){
						musickinds.style.left = target+"px";
					}
					if(musickinds.offsetLeft==target){
						if(count == 2){
							count = 0;
							musickinds.style.left=-1200+"px";
						}
						clearInterval(timer);
					}
				},10)
			}
			//向右滑动切换图片
			right.onclick = function(){
				count--;
				var target =-1200-count*(pics[5].offsetLeft-pics[0].offsetLeft);
				timer = setInterval(function(){
					musickinds.style.left = musickinds.offsetLeft + 20+"px";
					if(musickinds.offsetLeft>target){
						musickinds.style.left = target+"px";
					}
					if(musickinds.offsetLeft==target){
						if(count == -1){
							count = 1;
							musickinds.style.left=-2400+"px";
						}
						clearInterval(timer);
					}
				},10)
				
		}
	}	
      