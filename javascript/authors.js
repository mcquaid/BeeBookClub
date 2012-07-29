


window.onload = initAll;

function initAll() {

	var textplace = document.getElementById("middleCol");  
	textplace.innerHTML=youtube[3];
}

var podCasts=new Array();
podCasts[0]="<iframe id=\'podFrame\' src=\"http://downloads.bbc.co.uk/podcasts/radio4/openbook/openbook_20120720-1501a.mp3\"></iframe>"
podCasts[1]="<iframe id=\'podFrame\' src=\"http://downloads.bbc.co.uk/podcasts/radio4/openbook/openbook_20120708-1630a.mp3\"></iframe>"
podCasts[2]="<iframe id=\'podFrame\' src=\"http://downloads.bbc.co.uk/podcasts/radio4/openbook/openbook_20120717-1700b.mp3\"></iframe>"
podCasts[3]="<iframe id=\'podFrame\' src=\"http://downloads.bbc.co.uk/podcasts/radio4/openbook/openbook_20120626-1700c.mp3\" ></iframe>"

var youtube=new Array();
youtube[0]="<iframe width=\"540\" height=\"290\" src=\"http://www.youtube.com/embed/wHCEwIkNtkE\" frameborder=\"0\" allowfullscreen></iframe>"
youtube[1]="<iframe width=\"540\" height=\"290\" src=\"http://www.youtube.com/embed/ZoTtvasnxKw\" frameborder=\"0\" allowfullscreen></iframe>"
youtube[2]="<iframe width=\"540\" height=\"290\" src=\"http://www.youtube.com/embed/0x1lunD7-Ko\" frameborder=\"0\" allowfullscreen></iframe>"
youtube[3]="<iframe width=\"540\" height=\"290\" src=\"http://www.youtube.com/embed/o7LjriWFAEs\"  ></iframe>"


function getPod(podItem){

	var textplace = document.getElementById("middleCol");
	textplace.innerHTML=podCasts[podItem.selectedIndex]
}

function getYouTube(tubeItem){

	var textplace = document.getElementById("middleCol");
	textplace.innerHTML=youtube[tubeItem.selectedIndex]

}
