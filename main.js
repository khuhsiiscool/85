canvas = document.getElementById("mycanvas"); 
ctx = canvas.getcontext("2d");

greencar_width=75;
greencer_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgtag = new Image();
	background_imgtag.onload = uploadBackground;
	background_imgtag.src = background_image;

	greencar_imgtag = new Image();
	greencar_imgtag.onload = uploadgreencar;
	greencar_imgtag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawimage(background_imgtag, 0, 0, Canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawimage(greencar_imgtag, greencar_x, greencar_y, greencar_width, greencer_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0)
    {
greencar_y=greencar_y-10;
//greencar_y-=10;
console.log("when up arrow is pressed ="+ greencar_x + "-"+ greencar_y);
uploadBackground();
uploadgreencar();
}

function down()
{
	if(greencar_y<=500)
        {
    greencar_y=greencar_y+10;
    //greencar_y-=10;
    console.log("when down arrow is pressed ="+ greencar_x + "-"+ greencar_y);
    uploadBackground();
    uploadgreencar();
}

function left()
{
	if(greencar_y>=0)
    {
greencar_y=greencar_y-10;
//greencar_y-=10;
console.log("when up arrow is pressed ="+ greencar_x + "-"+ greencar_y);
uploadBackground();
uploadgreencar();
}

function right()
{
	if(greencar_y<=500)
        {
    greencar_y=greencar_y+10;
    //greencar_y-=10;
    console.log("when down arrow is pressed ="+ greencar_x + "-"+ greencar_y);
    uploadBackground();
    uploadgreencar();
}
