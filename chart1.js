//total scale = 1200
//from -800 to 400
//ratio = 0.5

var scale = 1200
var size = 100
var ratio = 0.5
var scaleratio = scale * 0.5
var rulerratio = size * 0.5
var rulerheight = 5;

var prevx = 0;
var prevy = 0;

var cutoff_year = 325;

// console.log(scaled, negscale);

var color = [
	['black','grey'],
	['indigo', 'SKYBLUE'],
	['DARKORANGE', 'yellow'],
	['gold', 'LIGHTYELLOW'],
	['LIMEGREEN', 'SPRINGGREEN']
]

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.width = 600;

function drawbase(){
	var sector_len = cutoff_year / 4;
	var x0 = 0;
	var x1 = sector_len;

	for(i=0; i < color.length-1; i++){
		var grd = ctx.createLinearGradient(x0,0,x0+sector_len,0);
		grd.addColorStop(0,color[i][0]);
		grd.addColorStop(1,color[i][1]);
		ctx.fillStyle = grd;
		ctx.fillRect(x0,100,sector_len,rulerheight);
		x0 += sector_len;

	// var grd = ctx.createLinearGradient(100,0,200,0);
	// grd.addColorStop(0,"indigo");
	// grd.addColorStop(1,"SKYBLUE");
	// ctx.fillStyle = grd;
	// ctx.fillRect(100,100,100,rulerheight);

	// var grd = ctx.createLinearGradient(200,0,300,0);
	// grd.addColorStop(0,"DARKORANGE");
	// grd.addColorStop(1,"yellow");
	// ctx.fillStyle = grd;
	// ctx.fillRect(200,100,100,rulerheight);

	// var grd = ctx.createLinearGradient(300,0,400,0);
	// grd.addColorStop(0,"gold");
	// grd.addColorStop(1,"LIGHTYELLOW");
	// ctx.fillStyle = grd;
	// ctx.fillRect(300,100,100,rulerheight);	
	}
	
	var lef_len = 600 - x0;
	console.log(lef_len);
	var grd = ctx.createLinearGradient(lef_len,0,x0+lef_len,0);
	grd.addColorStop(0,color[4][0]);
	grd.addColorStop(1,color[4][1]);
	ctx.fillStyle = grd;
	ctx.fillRect(lef_len,100,x0+lef_len,rulerheight);	
}


function hair(x,y){
	// ctx.beginPath();
	// ctx.lineWidth="3";
	// ctx.strokeStyle="black";
	ctx.fillStyle = "black";
	ctx.fillRect(x,y,2,35);
	// ctx.stroke();
	prevx = x;
	prevy = y;

}


//draw scale

function measure_stick(){
	var rulerdraw = 0;

	while( rulerdraw <= scaleratio){
	// console.log(rulerdraw);
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.strokeStyle="grey";
		ctx.rect(rulerdraw,106,0.5,10);
		ctx.stroke();
		ctx.strokeStyle="black";
		ctx.font = "8px Arial";

		ctx.fillText(rulerdraw,rulerdraw-15,130);

		rulerdraw += rulerratio;
	}	
}

function measure_stick1(){
	var rulerdraw = 0;

	while( rulerdraw <= scaleratio){
	// console.log(rulerdraw);
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.strokeStyle="grey";
		ctx.rect(rulerdraw+25,106,0.5,5);
		ctx.stroke();
		rulerdraw += 50;
	}	
}

//initial hair
hair(300,85);
drawbase();
measure_stick();
measure_stick1();

function movehair(x,y=85){
	//left move
	
	if(prevx < x){
		// console.log('moving left');
		var direction = prevx;
		while(direction <= x){
			ctx.clearRect(prevx,prevy,2,35);
			drawbase();
			measure_stick();
			measure_stick1();
			hair(direction,y);	
			direction += 1;
			// prevx += 1;
			// return movehair(prevx,prevy);
		}

		
	}

	//right move
	if(prevx >=x){
		console.log('moving right');
		var direction = prevx;	
		// console.log(prevx,prevy);

		while(direction >= x){
			// console.log(prevx,prevy);
			ctx.clearRect(prevx,prevy,2,35);
			drawbase();
			measure_stick();
			measure_stick1();
			hair(direction,y);	
			direction -= 1;
			// prevx -= 1;
		}
	}


}

// setInterval(movehair(0,85),3000);

