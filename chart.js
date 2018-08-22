var myCanvas = document.getElementById("myCanvas");
// myCanvas.width = 100;
// myCanvas.height = 100;
var ctx = myCanvas.getContext("2d");
 
function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}
 
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}
 
// var myVinyls = {
//     "Classical music": 10,
//     "Alternative rock": 14,
//     "Pop": 2,
//     "Jazz": 12
// };
 
 var myVinyls = {
    '-686' : 1,
    '-683' : 1,
    '-678' : 1,
    '-552' : 1,
    '-547' : 1,
    '-544' : 1,
    '-543' : 1,
    '-540' : 1,
    '-522' : 1,
    '-497' : 1,
    '-489' : 1,
    '-485' : 1,
    '-337' : 1,
    '-331' : 1,
    '-292' : 1,
    '-265' : 2,
    '-259' : 1,
    '-256' : 1,
    '-245' : 3,
    '-244' : 1,
    '-243' : 3,
    '-240' : 4,
    '-232' : 1,
    '-230' : 1,
    '-228' : 1,
    '-224' : 1,
    '-221' : 1,
    '-220' : 1,
    '-215' : 1,
    '-213' : 1,
    '-204' : 1,
    '-160' : 1,
    '-157' : 1,
    '-145' : 1,
    '-140' : 2,
    '-137' : 1,
    '-132' : 1,
    '-131' : 1,
    '-130' : 1,
    '-124' : 2,
    '-117' : 1,
    '-115' : 1,
    '-105' : 1,
    '-103' : 1,
    '-98' : 1,
    '-81' : 1,
    '-78' : 1,
    '-64' : 1,
    '-119' : 1,
    '-180' : 1,
    '-311' : 1,
    '-365' : 1,
    '-391' : 1,
    '-500' : 1,
    '-78' : 1
    }

var Barchart = function(options){
    
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
  
    this.draw = function(){
        // console.log("draw");
        var maxValue = 10;
        for (var categ in this.options.data){
            maxValue = Math.max(maxValue,this.options.data[categ]);
        }
        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;
 
        //drawing the grid lines
        var gridValue = 0;
        
        while (gridValue <= maxValue){
            console.log('draw');
            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );
             
            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.textBaseline="bottom"; 
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();
 
            gridValue+=this.options.gridScale;
        }      
  
        //drawing the bars
        var barIndex = 0;
        var numberOfBars = Object.keys(this.options.data).length;
        var barSize = (canvasActualWidth)/numberOfBars;
 
        for (categ in this.options.data){
            var val = this.options.data[categ];
            var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
            drawBar(
                this.ctx,
                this.options.padding + barIndex * barSize,
                this.canvas.height - barHeight - this.options.padding,
                barSize,
                barHeight,
                this.colors[barIndex%this.colors.length]
            );
 
            barIndex++;
        }
 
        //drawing series name
        
        this.ctx.save();
        this.ctx.textBaseline="bottom";
        this.ctx.textAlign="center";
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "bold 14px Arial";
        // this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        this.ctx.restore();  
         
        //draw legend
        // barIndex = 0;
        // var legend = document.querySelector("legend[for='myCanvas']");
        // var ul = document.createElement("ul");
        // legend.append(ul);
        // for (categ in this.options.data){
        //     var li = document.createElement("li");
        //     li.style.listStyle = "none";
        //     li.style.borderLeft = "20px solid "+this.colors[barIndex%this.colors.length];
        //     li.style.padding = "5px";
        //     li.textContent = categ;
        //     ul.append(li);
        //     barIndex++;
        // }
    }

    this.draw();
}
 
 
var myBarchart = new Barchart(
    {
        canvas:myCanvas,
        seriesName:"years",
        padding:20,
        gridScale:20,
        gridColor:"#eeeeee",
        data:myVinyls,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);