var sq=6;
var color=generate(sq);
var box= document.querySelectorAll(".box");
var pick= random();
var target=document.getElementById("target");
target.textContent=pick;
var message=document.getElementById("message");
var h1=document.getElementById("h1");
var reset=document.getElementById("reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");

easy.addEventListener("click",function(){
	sq=3;
	color=generate(sq);
	pick= random();
	easy.classList.add("selected");
	hard.classList.remove("selected");
	for(var i=0;i<6;i++){
		if(color[i]){box[i].style.backgroundColor=color[i];}
		else{box[i].style.display="none";}
	}
	target.textContent=pick;
	h1.style.backgroundColor="steelblue";
});

hard.addEventListener("click",function(){
	sq=6;
	color=generate(sq);
	pick= random();
	easy.classList.remove("selected");
	hard.classList.add("selected");
	for(var i=0;i<6;i++){
	box[i].style.backgroundColor=color[i];
	box[i].style.display="block";
	}
	target.textContent=pick;
	h1.style.backgroundColor="steelblue";
});

reset.addEventListener("click",function(){
	color=generate(sq);
	pick= random();
	for(var i=0;i<box.length;i++){
	box[i].style.backgroundColor=color[i];}
	target.textContent=pick;
	h1.style.backgroundColor="steelblue";
	this.textContent="New Colors"
});

for(var i=0;i<box.length;i++){
	box[i].style.backgroundColor=color[i];
	box[i].addEventListener("click",function(){
		if(this.style.backgroundColor === pick){
			changeC(pick);
			message.textContent="CORRECT";
			h1.style.backgroundColor=pick;
			reset.textContent="Play Again"
			message.textContent="";
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent="Try Again!!";
		}
	});
}


function changeC(pick){
	for(var i=0;i<box.length;i++){
		box[i].style.backgroundColor = pick;
	}
}

function random(){
	var p=Math.floor(Math.random() * color.length);
	return color[p];
}

function generate(num){
	var col=[];
	for(var i=0;i<num;i++){
		col[i]=genR();
	}
	return col;
}

function genR(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	var c="rgb"+"("+r+", "+g+", "+b+")";
	return c;
}

// easy.addEventListener("mouseover",function(){
// 	easy.classList.add("selected");
// });
// easy.addEventListener("mouseout",function(){
// 	easy.classList.remove("selected");
// });
// reset.addEventListener("mouseover",function(){
// 	reset.classList.add("selected");
// });
// reset.addEventListener("mouseout",function(){
// 	reset.classList.remove("selected");
// });
// hard.addEventListener("mouseover",function(){
// 	hard.classList.add("selected");
// });
// hard.addEventListener("mouseout",function(){
// 	hard.classList.remove("selected");
// });
