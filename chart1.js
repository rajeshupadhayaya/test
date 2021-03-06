var scale = 1200;
var size = 100;
var ratio = 0.5;
var scaleratio = scale * 0.5;
var rulerratio = size * 0.5;
var rulerheight = 5;

var prevx = 0;
var prevy = 85;

var cutoff_year = 350;

var bar_len = 5;


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.width = 600;
var canvas = document.getElementById("myCanvas1");
var ctx1 = canvas.getContext("2d");


var color = [
	['black','grey'],
	['indigo', 'SKYBLUE'],
	['DARKORANGE', 'yellow'],
	['gold', 'LIGHTYELLOW'],
	['LIMEGREEN', 'SPRINGGREEN']
]

var bars = {
	// '-635' : 5,
	// '-640' : 10,
	// '-648' : 8,
	// '50' : 4
	'-686' : 1,
	'-683' : 1,
	'-678' : 1,
	'-547' : 1,
	'-544' : 1,
	'-540' : 1,
	'-497' : 1,
	'-489' : 1,
	'-485' : 1,
	'-265' : 2,
	'-245' : 2,
	'-243' : 2,
	'-240' : 4,
	'-232' : 1,
	'-230' : 1,
	'-228' : 1,
	'-224' : 1,
	'-220' : 1,
	'-215' : 1,
	'-213' : 1,
	'-180' : 1,
	'-157' : 1,
	'-145' : 1,
	'-140' : 2,
	'-137' : 1,
	'-124' : 2,
	'-119' : 1,
	'-115' : 1,
	'-105' : 1,
	'-103' : 1,
	'-98' : 1,
	'-78' : 1
}


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
	}
	
	var lef_len = 600 - x0;
	var grd = ctx.createLinearGradient(x0,0,x0+lef_len,0);
	grd.addColorStop(0,color[4][0]);
	grd.addColorStop(1,color[4][1]);
	ctx.fillStyle = grd;
	ctx.fillRect(x0,100,x0+lef_len,rulerheight);	
}

function drawbars(){
	Object.keys(bars).forEach(function(key) {
		year = key;
		x = (year/2) + 350;
		height = bars[key] * 15;
  		ctx.fillStyle = "brown";
		ctx.fillRect(x,100-height,5,height);	
	})
}


function hair(x,y){
	ctx1.shadowBlur=20;
	ctx1.shadowColor="black";
	ctx1.fillStyle = "black";
	ctx1.strokeStyle="rgba(0,0,0,1)";
	ctx1.fillRect(x,y,5,35);
	// ctx1.rect(x,y,2,35);
	// ctx1.stroke();
	prevx = x;
	prevy = y;

}


//draw scale

function measure_stick(){
	var rulerdraw = 0;

	while( rulerdraw <= scaleratio){
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.strokeStyle="grey";
		ctx.rect(rulerdraw,106,0.5,10);
		ctx.stroke();
		ctx.strokeStyle="black";
		ctx.font = "9px Arial";
		ctx.fillStyle = "black";

		var year = (rulerdraw - 350) * 2 ;

		var text = "AD";
		if (year<0){
			text = "BC";
			year = year * -1;
			
		}

		if(year == 0){
				year = 1;
		}
		ctx.fillText(year+text,rulerdraw-15,130);

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
drawbars();

function movehair(x,y=85){
	//left move
	// console.log(prevx,x);
	
	if(prevx < x){
		// console.log('moving right');
		var direction = prevx;
		while(direction <= x){
			// ctx1.clearRect(prevx,prevy,2,35);
			ctx1.clearRect(0,0,canvas.width,canvas.height);
			hair(direction,y);	
			direction += 1;
		}
	}

	//left move
	if(prevx >x){
		// console.log('moving left');
		var direction = prevx;	
		while(direction >= x){
			// console.log(prevx,prevy);
			ctx1.clearRect(0,0,canvas.width,canvas.height);
			// ctx1.clearRect(prevx,prevy,2,35);
			
			hair(direction,y);	
			direction -= 1;
		
		}
	}
}


