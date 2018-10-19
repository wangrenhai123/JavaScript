window.onload = function(){
	var box= document.getElementById("box");
	var slider = document.getElementsByClassName("slider")[0];
	var left = document.getElementsByClassName("left")[0];
	var right = document.getElementsByClassName("right")[0];
	var img = right.getElementsByTagName('img')[0];
	
	//移入
	left.onmousemove = function(e){
		
		slider.style.display = 'block';
		right.style.display = 'block';
		var left = e.clientX - slider.offsetWidth/2;
		var top = e.clientY - slider.offsetHeight/2;
		
		
		if (left < 0) {
			left = 0;
		} else if(left >300){
			left = 300;
		};
		
		if (top < 0) {
			top = 0;
		} else if(top > 200){
			top = 200;
		}
		
		
		
		
		slider.style.left = left + 'px';
		slider.style.top = top + 'px';
		
		img.style.left = -(left*2)+'px';
		img.style.top = -(top *2)+'px';
		
		
	}
	
	//移出
	left.onmouseout = function(){
		
		slider.style.display = 'none';
		right.style.display = 'none';
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
