var array_color = [];
var s = 0;
var v = 0;
var color_base = 0;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomPalette(){
	array_color = [];		
	array_color.push(color_base);

	for(var i = 0; i < 4; i++){
		var new_color = color_base + 72;
		if(new_color > 360){
			new_color = new_color - 360;
		}
		array_color.push(new_color);
		color_base = new_color;		
	}	
}

function generateRules(){	
	color_base = getRndInteger(0,359);
	s = Math.random();
	v = Math.random();
	randomPalette();    
	var rgb_colors_array = [];

	for(var i = 0; i < 5; i++){		
		var rgb_color = hsvToRgb((array_color[i]/360), s, v);		
		rgb_colors_array.push(rgb_color);
		$("#color"+(i+1)).css("background-color", "rgb(" + Math.trunc(rgb_color[0]) + "," + Math.trunc(rgb_color[1]) + ","+Math.trunc(rgb_color[2])+")");
	}

	$("#css_rules").val("");

	var texto = ".website-background {color: rgb(" + Math.trunc(rgb_colors_array[0][0]) + "," + Math.trunc(rgb_colors_array[0][1]) + "," + Math.trunc(rgb_colors_array[0][2]) + ")}\n";
	texto += ".element-text {color: rgb(" + Math.trunc(rgb_colors_array[1][0]) + "," + Math.trunc(rgb_colors_array[1][1]) + "," + Math.trunc(rgb_colors_array[1][2]) + ")}\n";
	texto += ".element-border {color: rgb(" + Math.trunc(rgb_colors_array[2][0]) + "," + Math.trunc(rgb_colors_array[2][1]) + "," + Math.trunc(rgb_colors_array[2][2]) + ")}\n";
	texto += ".element-background {color: rgb(" + Math.trunc(rgb_colors_array[3][0]) + "," + Math.trunc(rgb_colors_array[3][1]) + "," + Math.trunc(rgb_colors_array[3][2]) + ")}\n";
	texto += ".header {color: rgb(" + Math.trunc(rgb_colors_array[4][0]) + "," + Math.trunc(rgb_colors_array[4][1]) + "," + Math.trunc(rgb_colors_array[4][2]) + ")}\n";

	$("#css_rules").val(texto);
}

function cleanRules(){
	var s = 0;
	var v = 0;
	var color_base = 0;
	$("#css_rules").val("");
}

$( document ).ready(function() {  
	generateRules();
	$("#btn_generate").on('click', generateRules);
	$("#btn_clean").on('click', cleanRules);
});