var video1 = document.getElementById('filmpje1');
var titel = document.getElementsByTagName('title');
var title = document.getElementById('title');
var tekst = document.getElementById('tekst');
var tekst2 = document.getElementById('tekst2');
var menu = document.getElementById('menu');
var image = document.getElementById('image');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');
var image5 = document.getElementById('image5');
var speel = document.getElementById('speel');
var verhaal = document.getElementById('verhaal');
var uitleg = document.getElementById('uitleg');
var hoofdmenu = document.getElementById('hoofdmenu')
var keuze1 = document.getElementById('keuze1');
var keuze2 = document.getElementById('keuze2');
var keuze3 = document.getElementById('keuze3');
var keuze4 = document.getElementById('keuze4');
var keuze5 = document.getElementById('keuze5');
var wapen3 = document.getElementById('wapen3');
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');


function uitleg1() {
	document.title = "De Uitleg"
	title.innerHTML = "De Uitleg van de game";
	tekst.innerHTML = "Als je op start drukt dan begint de game. je krijgt bij elke kamer verschillende keuzes bij de meeste moet je de goede keuze maken om naar de volgende kamer toe kunnen gaan";
	tekst.style.display = "block";
	image.src = "https://vdragon.gitbooks.io/hello_git_world_/content/zh-tw/%E8%B3%87%E6%BA%90/%E6%9C%89%E6%B2%92%E6%9C%89%E5%93%AA%E8%A3%A1%E6%94%B9%E9%8C%AF%EF%BC%9F.png";
	hoofdmenu.style.display = "none";

}

function verhaallijn() {
	document.title = "Het verhaal van de game"
	title.innerHTML = "Het verhaal";
	tekst.innerHTML = " De persoon (jeff) waarmee je speelt zit gevangen in een kamer. Jeff moet eerst 10 testen overleven als hij vrij wilt zijn.  Tijdens de testen wordt hem duidelijk waarom hij gevangen is.De reden waarom hij de testen moet doen is omdat, hij wilt wraak op de mensen die zijn zoon hebben vermoord.";
	tekst.style.display = "block";
	hoofdmenu.innerHTML = "Terug naar menu";
}


function menuscherm() {
	document.title = "SAW VIII: jigsaw";
	title.innerHTML = "SAW VIII: jigsaw";
	image.src = "http://cdn.playbuzz.com/cdn/148686d1-6a7f-4b42-8742-ed41fba4ba22/bceb7f72-3eed-403c-89e9-4e3da1552bab_560_420.jpg";
	tekst.style.display = "none";
	tekst2.style.display = "none";
	speel.innerHTML = "Start game";
	verhaal.innerHTML = "Verhaal";
	hoofdmenu.innerHTML = " ";
	image.style.display = "block";
	keuze1.style.display = "none";
	menu.style.display = "block";	;
	video1.style.display = "none";
}
function startgame(){
	document.title = "Het begin";
	title.innerHTML = "Het begin <hr>";
	menu.style.display = "none";
	image.style.display = "none";
	tekst.style.display = "block";
	tekst.innerHTML = "Je wordt wakker in een kamer en je kijkt om je heen. Je ziet 1 deur. Je loopt naar de deur toe en probeert hem op te maken maar dat lukt niet. Opeens hoor je een stem die zegt: ik wil een spel spelen. Jeff je bent gevaar voor je zelf want, je wilt wraak. Ik beloof het je komt de man tegen die je zoon heeft vermoord. Daarvoor moet je eerst de testen goed door staan. De eerste test is maak de goede keuze. Kies de goede knop. Zou je zelf iets aan doen of ook je dochter? ";
	video1.style.display = "block";
	video1.innerHTML = '<iframe width="100%" height="480" src="https://www.youtube.com/embed/SH8wDkqA_50" frameborder="0" &autoplay=1  ></iframe>';
	keuze1.style.display = "block";
	keuze1.setAttribute("onclick", "level();");
	keuze1.innerHTML = "<b>ik zou alleen me zelf iets aan doen!<b>";
	keuze2.style.display = "block";
	keuze2.setAttribute("onclick", "level2();");
	keuze2.innerHTML = "<b>ja ik zou ook me dochter iets aan doen!!!</b>";

}
function level (){
	keuze1.setAttribute("onclick", "fout();");
}

function level2() {
	document.title = "De kooi";
	title.innerHTML = "De kooi";
	tekst.innerHTML = "Je bent bij de volgende kamer en deur valt achter je dicht. Je ziet in de kamer 3 mensen (een man van 35, een vrouw van 35 die zwanger is, een meisje van 10) die vast zitten in een kooi. Opnieuw hoor je de stem die zegt: Bij deze test moet je weer de goede keuze maken. Kies 1 van 3 die wilt laten leven.";
	image.src = "https://i.ytimg.com/vi/-LGJ1mOp3Wc/maxresdefault.jpg";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "fout2()")
	keuze1.innerHTML = "Een man van 35";
	keuze2.innerHTML = "Een meisje van 10";
	keuze2.setAttribute("onclick", "level3()");
	keuze3.innerHTML = "Een vrouw van 25 die zwanger is ";
	keuze3.style.display = "block"
	keuze3.setAttribute ("onclick", "fout3()");
}
function level3() {
	document.title = "De mes";
	title.innerHTML = "De mes";
	tekst.innerHTML = "Je bent bij kamer 3. je ziet daar 2 mensen hangen. Deze keer ligt er een briefje en een mes op de tafel. Op het briefje staat deze mensen waren bij toen je zoon dood ging. Ze hebben allebei dokters opleiding gedaan maar ze deden niks om je zoon te redden. Voor je zie 2 knoppen staan. Maak de goede keuze! ";
	image.src = "https://chto-proishodit.ru/system/files/news/08.2015/nozh_kopiya.jpg";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "level4()")
	keuze1.innerHTML = "vermoord met de mes de 2 mensen.";
	keuze2.innerHTML = "vermoord niemand met de mes.";
	keuze2.setAttribute("onclick", "fout4()");
	keuze3.style.display = "none";
}
function level4() {
	document.title = "De sleutels";
	title.innerHTML = "De sleutels";
	tekst.innerHTML = "Je komt in de vierde kamer binnen. Het is donker en opeens gaan er lichten aan. Je ziet een man in een kooi en je moet hem bevrijden. Er liggen 6 sleutels op een tafel die voor je staat. 1 van 6 is goede sleutel die kooi op maakt! Tip 3+3-4+3 ";
	image.src = "http://3.bp.blogspot.com/-c-rf-rl3d00/VXckZeN4-tI/AAAAAAAACjw/EunEvHEjPb4/s1600/sleutels.JPG";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "fout()")
	keuze1.innerHTML = "sleutel 1";
	keuze2.innerHTML = "sleutel 2";
	keuze2.setAttribute("onclick", "fout()");
	keuze3.setAttribute ("onclick", "fout()")
	keuze3.innerHTML = "sleutel 3";
	keuze4.innerHTML = "sleutel 4";
	keuze4.setAttribute("onclick", "fout()");
	keuze5.setAttribute ("onclick", "level5()")
	keuze5.innerHTML = "sleutel 5";
	keuze6.innerHTML = "sleutel 6";
	keuze6.setAttribute("onclick", "fout()");
	keuze2.style.display = "block";
	keuze2.style.display = "block";
	keuze3.style.display = "block";
	keuze4.style.display = "block";
	keuze5.style.display = "block";
	keuze6.style.display = "block";

}
function level5() {
	document.title = "Het gevecht";
	title.innerHTML = "Het gevecht";
	tekst.innerHTML = "Je loopt kamer 5 binnen en Je ziet  5 mensen staan in de kamer. De 5 mensen zitten opgesloten in een hok. Opeens gaat er een tv aan en zegt Hallo jeff, je moet met deze mensen gaan vechten. Als jij wint mag je naar de volgende kamer. Voor je zie je 3 wapens liggen kies er 1 uit. Als je er 1 hebt opgepakt worden de 5 mensen vrijgelaten en dan moet je met hen vechten.";
	image.src = "https://www.droominfo.nl/img/og/droom-vechten.jpg";
	image.style.display = "block";
	video1.style.display = "none";
	image2.style.display = "block";
	image2.src = "http://pngimg.com/uploads/ak47/ak47_PNG15464.png";
	link1.setAttribute ("onclick", "level6()");
	link2.setAttribute ("onclick", "fout10()");
	link3.setAttribute ("onclick", "fout11()");
	image3.style.display = "block";
	image3.src = "http://www.pngmart.com/files/1/Drinking-Glass-PNG-Image.png";
	image4.style.display = "block";
	image4.src = "https://www.picpng.com/image/view/33970";
	keuze1.style.display = "none";
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function level6() {
	document.title = "De bom";
	title.innerHTML = "De bom";
	tekst.innerHTML = "Je komt kamer 6 binnen. Je ziet een bom staan met een timer die binnen 15 seconden af gaat. ";
	image.src = "https://www.ericpetersautos.com/wp-content/uploads/2017/10/time-bomb.jpg";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "level7()")
	keuze1.innerHTML = "Keuze 1 = Sla met de hammer op de bom ";
	keuze1.style.display = "block";
	keuze2.innerHTML = "Keuze 2 = je rent naar de bom toe en je trekt een kabel uit de bom";
	keuze2.style.display = "block";
	keuze2.setAttribute("onclick", "fout5()");
	keuze3.style.display = "block";
	keuze3.setAttribute("onclick", "fout6()");
	keuze3.innerHTML = "Keuze 3 = Je rent gelijk terug naar de vorige kamer!";
	image2.style.display = "none";
	image3.style.display = "none";
	image4.style.display = "none";	
	
}
function level7() {
	document.title = "Vertrouwen";
	title.innerHTML = "Vertrouwen";
	tekst.innerHTML = "Je moet samenwerken met een crimineel. De crimineel heeft al 10 inbraken gehad en hij heeft daarvoor al in de gevangenis gezeten. Hij heeft ook een vrouw verkracht.  Vertrouw je de crimineel? ";
	image.src = "https://www.parkeer24.nl/static/site/img/module/content/article/25138/header.jpg";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "level10route2()")
	keuze1.innerHTML = "Ja";
	keuze2.innerHTML = "Nee";
	keuze2.setAttribute("onclick", "level8()");
	keuze3.style.display = "none";
}
function level8() {
	document.title = "De doolhof";
	title.innerHTML = "De doolhof";
	tekst.innerHTML = "Je komt de volgende kamer binnen en je ziet 2 verschillende gangen.  Voor je zie een bord staan. Op het bord staat wanneer is je zoon vermoord? Ook zie je boven elke gang een bord hangen. ";
	image.src = "https://www.americaninno.com/wp-content/uploads/wpallimport/files/1/2012/01/boylston-2.jpg";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "fout7()")
	keuze1.innerHTML = "Op het bord staat: 23 juli 2004 ";
	keuze2.innerHTML = "Op het bord staat: 11 juli 2005";
	keuze2.setAttribute("onclick", "level9()");
	keuze3.style.display = "none";
}
function level9() {
	document.title = "Opofferen";
	title.innerHTML = "Opofferen";
	tekst.innerHTML = " Je ziet een sleutel in kluis liggen. Er ligt brief op een tafel. Op het briefje staat: (offer 1 van je lichaamsdeel op. Leg het goeie lichaamsdeel op weegschaal. Zaag je voet of je vinger er af. Als het juiste gewicht ligt op de weegschaal. Dan gaat de kluis open) Achter het brief ligt er een zaag. ";
	image.src = "http://www.viavoordeel.nl/image/large/halloween-motorzaag-met-bloed-70-cm/10026995.gif";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "level10()")
	keuze1.innerHTML = "je zaagt je vinger er af en legt het op de weegschaal.";
	keuze2.innerHTML = " je zaagt je voet en je legt je been op de weegschaal.";
	keuze2.setAttribute("onclick", "fout8()");
	keuze3.style.display = "none";
}
function level10() {
	document.title = "De moordenaar";
	title.innerHTML = "De moordenaar";
	tekst.innerHTML = "Je komt de laatste kamer binnen. Het is donker in deze kamer maar je ziet wel een verbandtrommel liggen. Je gebruikt het verband om je wond dicht te maken zodat er geen bloed meer uit komt.  Naast de verbandtrommel ligt weer briefje. Je pakt het brief je op. Op het briefje staat (loop 10 meter naar voren. Je zal de moordenaar zien in kooi. Ook zal je zien 2 knoppen zien. Als je op knop 1 drukt zal vallen in lava. De andere knop zal er verzorgen dat de moordenaar veilig aan de overkant komt ). Je loopt 10 meter naar voren. Opeens gaat er licht aan. Je ziet de moordenaar in de kooi staan. Voor je zie de 2 knoppen. ";
	image.src = "https://www.rtlnieuws.nl/sites/default/files/styles/landscape_2/public/content/images/2015/07/07/Scream_0.jpg?itok=nlbfPkWR";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "fout9()")
	keuze1.innerHTML = "Knop 1: Laat de kooi vallen in lava! De moordenaar gaat dan dood ";
	keuze2.innerHTML = " knop 2 de kooi zal er verzorgen dat kooi aan over kant komt. De moordenaar blijft dan leven ";
	keuze2.setAttribute("onclick", "goedeinde()");
	keuze3.style.display = "none";
}
function goedeinde() {
	document.title = "Vrijheid";
	title.innerHTML = "Je hebt het overleeft";
	tekst.innerHTML = "Je hebt de 10 kamers overleeft en je hebt geen wraak genomen op de moordernaar. je loopt naar buiten en je ziet dochter in een auto zitten. je loopt naar de auto toe en je stapt in de auto en rijd naar huis.";
	image.src = "https://i2.wp.com/www.kveller.com/wp-content/uploads/2017/01/iStock-535631119.jpg?fit=1200%2C800&ssl=1";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "fout9()")
	keuze1.style.display = "block";
	keuze2.style.display = "none";
	keuze2.setAttribute("onclick", "level3()");
	keuze3.style.display = "none";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
}
function rout2einde() {
	document.title = "Vrijheid";
	title.innerHTML = "Je hebt het overleeft";
	tekst.innerHTML = "Je hebt de 10 kamers overleeft en je hebt geen wraak genomen op de moordernaar. je loopt naar buiten en je ziet je dochter in een auto zitten. je loopt naar de auto toe en je stapt in de auto en je wilt net weg rijden maar je wordt opeens beschoten. je rijd heel snel weg met de auto. je overleeft het maar je dochter is geraakt en gaat dood.";
	image.src = "https://www.rtlnieuws.nl/sites/default/files/styles/landscape_2/public/content/images/2015/07/07/Scream_0.jpg?itok=nlbfPkWR";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "fout9()")
	keuze1.style.display = "none";
	keuze2.style.display = "none";
	keuze2.setAttribute("onclick", "level3()");
	keuze3.style.display = "none";
}
function level10route2() {
	document.title = "De moordenaar";
	title.innerHTML = "De moordenaar";
	tekst.innerHTML = "je vertrouwt de crimineel hij wees je de weg naar de laatste kamer. Je komt samen met de crimineel de laatste kamer binnen. Het is donker in deze kamer. je ziet een briefje liggen op een tafel en die pak je op. Op het briefje staat (loop 10 meter naar voren. Je zal de moordenaar zien in een kooi. Ook zal je zien 2 knoppen. Als je op knop 1 drukt zal de kooi vallen in lava. De andere knop zal er verzorgen dat de moordenaar veilig aan de overkant komt ). Je loopt 10 meter naar voren. Opeens gaat er licht aan. Je ziet de moordenaar in de kooi staan. Voor je zie de 2 knoppen. ";
	image.src = "https://www.rtlnieuws.nl/sites/default/files/styles/landscape_2/public/content/images/2015/07/07/Scream_0.jpg?itok=nlbfPkWR";
	image.style.display = "block";
	video1.style.display = "none";
	keuze1.setAttribute ("onclick", "fout9()")
	keuze1.innerHTML = "Knop 1: Laat de kooi vallen in lava! De moordenaar gaat dan dood ";
	keuze2.innerHTML = " knop 2 de kooi zal er verzorgen dat kooi aan over kant komt. De moordenaar blijft dan leven ";
	keuze2.setAttribute("onclick", "rout2einde()");
	keuze3.style.display = "none";
}
function heteindevanroute2(){
	document.title = "Game over";
	title.innerHTML = " ";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "je hebt de foute keuze gemaakt";
	image.style.display = "block";
	image.src ="https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg";
	video1.style.display = "none";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function fout(){
	document.title = "Game over";
	title.innerHTML = " ";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "je hebt de foute keuze gemaakt";
	image.style.display = "block";
	image.src ="https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg";
	video1.style.display = "none";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function fout2(){
	document.title = "Game over";
	title.innerHTML = " ";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "Fout antwoord de man van 35 die je koos heeft al 20 mensen vermoord!!!";
	image.style.display = "block";
	image.src ="https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg";
	video1.style.display = "none";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none"
}
function fout3(){
	document.title = "Game over";
	title.innerHTML = " ";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "fout antwoord de vrouw die zwanger is gebruikt veel drugs die er hoog waarschijnlijk heeft verzorgd dat de baby dood is!";
	image.style.display = "block";
	image.src ="https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg";
	video1.style.display = "none";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none"
}

function fout4(){
	document.title = "Game over";
	title.innerHTML = " ";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "Je hebt de verkeerde keuze gemaakt. De knop die hebt ingedrukt zorgt er voor dat er een pistool op je wordt gericht en op je schiet. je bent nu dood!!!";
	image.style.display = "block";
	image.src ="https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg";
	video1.style.display = "none";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none"
}
function fout5(){
	document.title = "Game over";
	title.innerHTML = "Game over";
	video1.style.display = "block";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "je trok de kabel uit de bom maar die ging gelijk af nu ben je dood";
	image.style.display = "none";
	video1.innerHTML = '<iframe width="854" height="480" src="https://www.youtube.com/embed/-22tna7KHzI" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>';
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function fout6(){
	document.title = "Game over";
	title.innerHTML = "Game over";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "je rende terug naar de vorige kamer maar daar ging ook een bom af";
	image.style.display = "block";
	image.src = "https://cdn.pixabay.com/photo/2015/11/12/10/24/explosion-1039943_960_720.jpg";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function fout7(){
	document.title = "Game over";
	title.innerHTML = "Game over";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "Fout je loopt al 2 dagen door de gang. Je bent verdwaald en je gaat dood omdat, je geen eten hebt.";
	image.style.display = "block";
	image.src = "https://www.thuisbezorgd.nl/blog/wp-content/uploads/2014/11/shutterstock_153293285.jpg";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function fout8(){
	document.title = "Game over";
	title.innerHTML = "Game over";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "Fout het gewicht van je voet is te zwaar. Je bloed nu dood. ";
	image.style.display = "block";
	image.src = "http://blog.roamler.nl/wp-content/uploads/2011/10/Saw.jpg";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function fout9(){
	document.title = "Game over";
	title.innerHTML = "Game over";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "Dat was de verkeerde keuze want, de moordenaar kon er verzorgen dat je uit de laatste kamer kon komen. Nu zit je voor altijd vast in de kamer!";
	image.style.display = "block";
	image.src = "https://cdn.indicium.nu/source/grazia/uploads/2017/01/opgesloten-in-kast-gSrjFVbm-thumb.jpg?w=950&h=500&fit=crop";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
}
function fout10(){
	document.title = "Game over";
	title.innerHTML = "Game over";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "Je hebt de AK47 opgepakt maar toen je wilde schieten deed AK47 deed niks. Er zaten geen kogels. je verliest het gevecht en je gaat dood  ";
	image.style.display = "block";
	image.src = "https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";		
	keuze1.style.display = "block";	
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
	image2.style.display = "none";
	image3.style.display = "none";
	image4.style.display = "none";	

}
function fout11(){
	document.title = "Game over";
	title.innerHTML = "Game over";
	video1.style.display = "none";
	tekst.style.display = "none";
	tekst2.style.display = "block";
	tekst2.innerHTML = "Met het glas dat je gebruikt win je het gevecht niet mee en je gaat nu dood!";
	image.style.display = "block";
	image.src = "https://i.ytimg.com/vi/cDUzlSQFkSk/hqdefault.jpg";
	keuze1.setAttribute("onclick", "menuscherm();");
	keuze1.innerHTML = "<b>Ga terug naar het menu</b>";
	keuze1.style.display = "block";	
	keuze2.style.display = "none";
	keuze3.style.display = "none";
	keuze4.style.display = "none";
	keuze5.style.display = "none";
	keuze6.style.display = "none";
	image2.style.display = "none";
	image3.style.display = "none";
	image4.style.display = "none";	

}

