const { fabric } = require("./fabric");

var canvas= new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
body_image_width = 30;
boy_image_height = 30;
var player_object = "";
var body_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
       player_object = Img;
       player_object.scaleToWidth(150);
       player_object.scaleToWidth(140);
       player_object.set({top:player_y,left:player_x});
    }
    );
    canvas.add(player_object);
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        body_image_object = Img;
        body_image_object.scaleToWidth(body_image_width);
        body_image_object.scaleToWidth(body_image_height);
        body_image_object.set({top:player_y,left:player_x});
    }
    );
    canvas.add(body_image_object);
}