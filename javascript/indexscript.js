  window.onload = initAll;
  	function initAll() {
  	RotateImages(0);
	RotateImages2(0);
	RotateImages3(0);
	RotateImages4(0);
  }


    var ImageArr1 = new Array("emperorChil.jpg","emperorChil_2.jpg");
  
   function RotateImages(Start){
  
  	var a = "ImageArr1";
    	var b = document.getElementById('Rotating1');
    	if(Start>=5)
    		Start=0;
    	b.src = "images/" + ImageArr1[Start];
    	window.setTimeout("RotateImages("+(Start+1)+")",2500);
   }
 
   var ImageArr2 = new Array("LiesMyTe.jpg","LiesMyTe_2.jpg");
   function RotateImages2(Start){
  
  	var a = "ImageArr2";
    	var b = document.getElementById('Rotating2');
    	if(Start>=5)
    		Start=0;
    	b.src = "images/" + ImageArr2[Start];
    	window.setTimeout("RotateImages2("+(Start+1)+")",2500);
   }
   
   var ImageArr3 = new Array("game.jpg","game_2.jpg","game_3.jpg","game_4.jpg");
   function RotateImages3(Start){
  
  	var a = "ImageArr3";
    	var b = document.getElementById('Rotating3');
    	if(Start>=5)
    		Start=0;
    	b.src = "images/" + ImageArr3[Start];
    	window.setTimeout("RotateImages3("+(Start+1)+")",2500);
   }
   
   var ImageArr4 = new Array("1984.jpg","1984_2.jpg","1984_3.jpg","1984_4.jpg");
   function RotateImages4(Start){
  
  	var a = "ImageArr4";
    	var b = document.getElementById('Rotating4');
    	if(Start>=5)
    		Start=0;
    	b.src = "images/" + ImageArr4[Start];
    	window.setTimeout("RotateImages4("+(Start+1)+")",2500);
   }
  