var fileInput;

$().ready(function()
{
   $("#link1").click(
		function()
		{
		  $("#Toalety1").toggle("normal");
		});

		$.ajax({
           type: 'GET',
            url : "http://szybkoczytam.cba.pl/Quiz/test.txt",
            success : function (data) {
            fileInput=data;
            }
        });
 document.getElementById("Zadanie6_button").disabled = true;
});
var tester=6
//zadanie1
var res = [];
function myFunction() {
    $("#Zadanie1").toggle("normal");
		document.getElementById("Zadanie1_button").disabled = true;
	  res = fileInput.split(";");
    var text = "";
    res.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < 15; i++) {
       text+= res[i]+", ";
    }
    document.getElementById("Zadanie1_tablica").innerHTML = text;
    onTimer();
 }

i_zadanie1 = 120;
i_zadanie1_1=0;
i_zadanie2_1=0;
i_zadanie3_1=0;
i_zadanie4_1=0;
i_zadanie5_1=0;
i_zadanie6_1=0;
function zadanie1_czasStop(){
  i_zadanie1_1=1;
}
function zadanie2_czasStop(){
  i_zadanie2_1=1;
}
function zadanie3_czasStop(){
  i_zadanie3_1=1;
}
function zadanie4_czasStop(){
  i_zadanie4_1=1;
}
function zadanie5_czasStop(){
  i_zadanie5_1=1;
}
function zadanie6_czasStop(){
  i_zadanie6_1=1;
}
function onTimer() {
  document.getElementById('timer_zad1').innerHTML = i_zadanie1;
  i_zadanie1--;
  if (i_zadanie1_1==0){
  if (i_zadanie1 < 0) {
    document.getElementById("Zadanie1").style.display = "none";
    document.getElementById("zadanie1_timer").style.display = "none";
    $("#Zadanie1_odp").toggle("fast");
  }
  else {
    setTimeout(onTimer, 1000);
  }
  }else{
  document.getElementById("Zadanie1").style.display = "none";
    document.getElementById("zadanie1_timer").style.display = "none";
    $("#Zadanie1_odp").toggle("fast");
  }
}

var punkty_zad1=0;
function sprawdz_zad1() {
  	document.getElementById("Zadanie1_sprawdz").disabled = true;
    $("#Zadanie1").toggle("normal");
  var x  = document.getElementsByClassName("LMS_zadanie1");

  for(var i = 0; i < x.length; i++) {
  //  if (x[i].value.trim()==""){
   //   var inputVal = document.getElementById("LMS_zadanie1_input_"+i);
   //         inputVal.style.backgroundColor = "red";
   //       }else{
            if (inArray(x[i].value,res)< 0) {
            var inputVal = document.getElementById("LMS_zadanie1_input_"+i);
            inputVal.style.backgroundColor = "red";
        }else{
          punkty_zad1+=1
           var inputVal = document.getElementById("LMS_zadanie1_input_"+i);
          inputVal.style.backgroundColor = "GreenYellow";}
   
   //  }
  }
  document.getElementById("zadanie1_pkt").innerHTML = punkty_zad1 +" pkt";
   tester-=1;
 koniecgry();
}

function inArray(elem,array)
{
    var len = array.length;
    for(var i = 0 ; i < len;i++)
    {
        if(array[i].toLowerCase()== elem.toLowerCase()) {
          array.splice(i, 1);
          return i;
        }
    }
    return -1;
} 

//zadanie 2
var res2 = [];
var i_zadanie2 = 180;

function myFunction2() {
    $("#Zadanie2").toggle("normal");
		document.getElementById("Zadanie2_button").disabled = true;
	  res2 = fileInput.split(";");
    var text2 = [];
    res2.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < 20; i++) {
     //  text2.push("<p>"+(i+1)+". "+res2[i]+"</p>");
     text2.push((i+1)+". "+res2[i]);
     //+"<a id=firstname>____</a>";
    }
    text2.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < 20; i++) {
document.getElementById("cyraslowo_"+i).innerHTML=text2[i];
    }
      
  //  document.getElementById("Zadanie2_tablica").innerHTML =text2.join(" ") ;
    onTimer2();
 }


function onTimer2() {
  document.getElementById('timer_zad2').innerHTML = i_zadanie2;
  i_zadanie2--;
  if (i_zadanie2_1==0){
  if (i_zadanie2 < 0) {
    document.getElementById("Zadanie2").style.display = "none";
    $("#Zadanie2_odp").toggle("fast");
    zadanie2DodajTxtboxy();
  }
  else {
    setTimeout(onTimer2, 1000);
  }
    }else{
 document.getElementById("Zadanie2").style.display = "none";
    $("#Zadanie2_odp").toggle("fast");
    zadanie2DodajTxtboxy();
  }
  // document.getElementById("zadanie2_pkt").innerHTML = i_zadanie2_1;
}

function zadanie2DodajTxtboxy(){
   var text = "";
  for(var i = 0; i < 20; i++) {
    document.getElementById("cyraslowo_"+i+"_1").innerHTML=(i+1)+". "+"<input class=ZMP_zadanie2 type=text id=zadanie2_"+i+"></input>"+"<h id=zad2_"+i+"></h>";
      // text+= "<p>"+(i+1)+". "+"<input class=ZMP_zadanie2 type=text id=zadanie2_"+i+"></input>"+"<h id=zad2_"+i+"></h>"+"</p>";
    }
  //  document.getElementById("zadanie2_odpTextboxArea").innerHTML = text;
}
var punkty_zad2=0;
function sprawdz_zad2(){
var x = document.getElementsByClassName("ZMP_zadanie2");
var my_y = [];
var cnt2 = 0;
for (var cnt = 0; cnt < x.length; cnt++) {
    if (x[cnt].type == "text") {
       if(x[cnt].value.trim() == res2[cnt].trim()){
      var inputVal = document.getElementById("zadanie2_"+cnt);
      inputVal.style.backgroundColor = "GreenYellow";
      inputVal.disabled = true;
       punkty_zad2+=1;
    }else{
       var inputVal = document.getElementById("zadanie2_"+cnt);
       inputVal.style.backgroundColor = "red";
       inputVal.disabled = true;
    }
    document.getElementById("zad2_"+cnt).innerHTML = "odp: "+res2[cnt];
    my_y.push(x[cnt].value);
  }
}
 document.getElementById("Zadanie2_sprawdz").disabled = true;
 document.getElementById("zadanie2_pkt").innerHTML = punkty_zad2 +" pkt";
  tester-=1;
 koniecgry();
}

//Zadanie 3
var cyfrydo_zadania3 = "";
var punkty_zad3=0;
var i_zadanie3 = 150;

function myFunction3() {
    $("#Zadanie3").toggle("normal");
		document.getElementById("Zadanie3_button").disabled = true;
    for(var i = 0; i < 20; i++) {
       cyfrydo_zadania3+= Math.floor((Math.random() * 10));
    }
    document.getElementById("Zadanie3_tablica").innerHTML = cyfrydo_zadania3;
    onTimer3();
 }

function onTimer3() {
  document.getElementById('timer_zad3').innerHTML = i_zadanie3;
  i_zadanie3--;
  if (i_zadanie3_1==0){
  if (i_zadanie3 < 0) {
    document.getElementById("Zadanie3").style.display = "none";
    $("#Zadanie3_odp").toggle("fast");
  }
  else {
    setTimeout(onTimer3, 1000);
  }
    }else{
    document.getElementById("Zadanie3").style.display = "none";
    $("#Zadanie3_odp").toggle("fast");
  }
}

function sprawdz_zad3(){
var x =document.getElementById('zadanie3_odp_input').value;
var terefg;
for (var cnt = 0; cnt < x.length; cnt++) {
 terefg+= x.charAt(cnt)+" "+cyfrydo_zadania3[cnt]+";"
    if (x[cnt] == cyfrydo_zadania3[cnt]) {
       punkty_zad3+=1;
    }
  }
 document.getElementById("zadanie3_pkt").innerHTML = punkty_zad3 +" pkt";
 document.getElementById("zadanie3_odpPoprawne").innerHTML =cyfrydo_zadania3;
 document.getElementById("zadanie3_odp_input").disabled = true;
  document.getElementById("Zadanie3_sprawdz").disabled = true;
   tester-=1;
 koniecgry();
}
//Zadanie 4
 var i_zadanie4 = 240; //240
 var punkty_zad4=0;
 var listaKart=[
   "A Trefl","2 Trefl","3 Trefl","4 Trefl","5 Trefl","6 Trefl","7 Trefl","8 Trefl","9 Trefl","10 Trefl","W Trefl","D Trefl","K Trefl",
   "A Kier","2 Kier","3 Kier","4 Kier","5 Kier","6 Kier","7 Kier","8 Kier","9 Kier","10 Kier","W Kier","D Kier","K Kier",
   "A Pik","2 Pik","3 Pik","4 Pik","5 Pik","6 Pik","7 Pik","8 Pik","9 Pik","10 Pik","W Pik","D Pik","K Pik",
   "A Karo","2 Karo","3 Karo","4 Karo","5 Karo","6 Karo","7 Karo","8 Karo","9 Karo","10 Karo","W Karo","D Karo","K Karo"];
 var kartyWylosowane=[];
  var kartyNieWylosowane=[];
  var text4 = "";
 function myFunction4() {
    $("#Zadanie4").toggle("normal");
		document.getElementById("Zadanie4_button").disabled = true;
    listaKart.sort(function() { return 0.5 - Math.random() });
    var text = "";
    for(var i = 0; i < listaKart.length; i++) {
      if (i>46 ){
        kartyNieWylosowane.push(listaKart[i]);
       text4+= listaKart[i]+", ";
      }else{
        kartyWylosowane.push(listaKart[i]);
        document.getElementById("karta_"+i).innerHTML = listaKart[i] +"<a id=firstname>____</a>";
      }
    }
    //<p align="left" id="Zadanie4_tablica"></p>
     // document.getElementById("zadanie4_pkt").innerHTML = text4;
    onTimer4();
 }

function onTimer4() {
  document.getElementById('timer_zad4').innerHTML = i_zadanie4;
  i_zadanie4--;
  if (i_zadanie4_1==0){
  if (i_zadanie4 < 0) {
    document.getElementById("Zadanie4").style.display = "none";
    $("#Zadanie4_odp").toggle("fast");
  }
  else {
    setTimeout(onTimer4, 1000);
  }
    }else{
       document.getElementById("Zadanie4").style.display = "none";
    $("#Zadanie4_odp").toggle("fast");
  }
}

function sprawdz_zad4(){
var x = document.getElementsByClassName("ZMP_zadanie4");
for (var cnt = 0; cnt < x.length; cnt++) {
    if (inArray(x[cnt].value,listaKart)> 0) {
         if (inArray(x[cnt].value,kartyWylosowane)> 0) {
            var inputVal = document.getElementById("zadanie4_odp_input_"+cnt);
            inputVal.style.backgroundColor = "red";
         }else{
          punkty_zad4+=5;
           var inputVal = document.getElementById("zadanie4_odp_input_"+cnt);
           inputVal.style.backgroundColor = "GreenYellow";
      }
    }else{
      var inputVal = document.getElementById("zadanie4_odp_input_"+cnt);
      inputVal.style.backgroundColor = "red";
      }
  }
 document.getElementById("zadanie4_pkt").innerHTML = punkty_zad4 +" pkt";
 document.getElementById("zadanie4_odpPoprawne").innerHTML ="Poprawne: "+ text4;
 document.getElementsByClassName("ZMP_zadanie4").disabled = true;
 document.getElementById("Zadanie4_sprawdz").disabled = true;
  tester-=1;
 koniecgry();
}


//zadanie5
var imagesArray = ["images/twarze/tw1.bmp", "images/twarze/tw2.bmp", "images/twarze/tw3.bmp", "images/twarze/tw4.bmp","images/twarze/tw5.bmp", "images/twarze/tw6.bmp", "images/twarze/tw7.bmp", "images/twarze/tw8.bmp", "images/twarze/tw9.bmp", "images/twarze/tw10.bmp", "images/twarze/tw11.bmp", "images/twarze/tw12.bmp", "images/twarze/tw13.bmp", "images/twarze/tw14.bmp", "images/twarze/tw15.bmp"];
var NazwiskaArray =["Nowak","Kowalski","Bułeczka","Chudzik","Wiśniewski","Dąbrowski","Wójcik","Kowalczyk","Kamiński","Zieliński","Szymański","Woźniak","Kozłowski","Jankowski","Wojciechowski","Kwiatkowski","Kaczmarek","Mazur","Krawczyk","Grabowski"];
var NumeryDoTwarzy =[];
var NazwiskaWybrane =[];
var MultidimentionArray =[];
var i_zadanie5 = 390; //390
var punkty_zad5 = 0;
 function myFunction5() {
    $("#Zadanie5").toggle("normal");
		document.getElementById("Zadanie5_button").disabled = true;
    imagesArray.sort(function() { return 0.5 - Math.random() });
    NazwiskaArray.sort(function() { return 0.5 - Math.random() });

    for(var i = 0; i < 15; i++) {
      var arraytoMDA=[];
      var text5 = "";
     // var chosenValue = Math.random()  ;
    //  if (chosenValue< 0.5){
          for(var j=0; j<7;j++){
             text5+= Math.floor((Math.random() * 10));
         }
     // }else{
    //      for(var j=0; j<9;j++){
    //    text5+= Math.floor((Math.random() * 10));
    //     }
    //  }
      arraytoMDA.push(imagesArray[i]);
      arraytoMDA.push(text5);
      arraytoMDA.push(NazwiskaArray[i]);
      MultidimentionArray.push(arraytoMDA);
      document.getElementById("twarz_"+i).innerHTML = MultidimentionArray[i][2];
      document.getElementById("twarzO_"+i).src = MultidimentionArray[i][0];
    }
    onTimer5();
 }
function onTimer5() {
  document.getElementById('timer_zad5').innerHTML = i_zadanie5;
  i_zadanie5--;
  if (i_zadanie5_1==0){
  if (i_zadanie5 < 0) {
    document.getElementById("Zadanie5").style.display = "none";
    generujObrazkiZnowu();
    $("#Zadanie5_odp").toggle("fast");
  }
  else {
    setTimeout(onTimer5, 1000);
  }
  }else{
      document.getElementById("Zadanie5").style.display = "none";
    generujObrazkiZnowu();
    $("#Zadanie5_odp").toggle("fast");
  }
  
}

function generujObrazkiZnowu(){
 MultidimentionArray.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < 15; i++) {
      document.getElementById("twarzOd_"+i).src = MultidimentionArray[i][0];
    }
}

function sprawdz_zad5(){
var x =  document.getElementsByClassName("ZMP_zadanie5");

for (var cnt = 0; cnt < x.length; cnt++) {
   if (x[cnt].value.substring(0, x[cnt].value.length-1).toLowerCase() ==MultidimentionArray[cnt][2].substring(0, MultidimentionArray[cnt][2].length-1).toLowerCase()) {
         punkty_zad5+=1;
       var inputVal = document.getElementById("zadanie5_odp_input_"+cnt);
      // var labelvalue = document.getElementById("twarz_"+cnt);
       inputVal.style.backgroundColor = "GreenYellow";
     //  labelvalue.style.backgroundColor = "GreenYellow";
       inputVal.disabled = true;
  }else{
     var inputVal = document.getElementById("zadanie5_odp_input_"+cnt);
  //   var labelvalue = document.getElementById("twarz_"+cnt);
      inputVal.style.backgroundColor = "red";
   //   labelvalue.style.backgroundColor = "red";
      inputVal.disabled = true;
     }
 // document.getElementById("zadanie5_odp_input_"+cnt).value ="test";//NumeryDoTwarzy[i];
  }
 document.getElementById("zadanie5_pkt").innerHTML = punkty_zad5 +" pkt";
 document.getElementById("Zadanie5_sprawdz").disabled = true;
 $("#Zadanie5").toggle("normal");
 document.getElementById("Zadanie6_button").disabled = false;
  tester-=1;
 koniecgry();
}

 //zadanie6
 var i_zadanie6 = 450; //450
var punkty_zad6 = 0;
 function myFunction6() {
   document.getElementById("Zadanie5").style.display = "none";
   document.getElementById("Zadanie5_odp").style.display = "none";
    $("#Zadanie6").toggle("normal");
		document.getElementById("Zadanie6_button").disabled = true;
    MultidimentionArray.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < 15; i++) {
      document.getElementById("6twarz_"+i).innerHTML = MultidimentionArray[i][2]+"- "+ MultidimentionArray[i][1];
      document.getElementById("6twarzO_"+i).src = MultidimentionArray[i][0];
    }
    onTimer6();
 }
 function onTimer6() {
  document.getElementById('timer_zad6').innerHTML = i_zadanie6;
  i_zadanie6--;
  if (i_zadanie6_1==0){
  if (i_zadanie6 < 0) {
    document.getElementById("Zadanie6").style.display = "none";
   generujObrazkiZnowu2();
    $("#Zadanie6_odp").toggle("fast");
  }
  else {
    setTimeout(onTimer6, 1000);
  }
   }else{
       document.getElementById("Zadanie6").style.display = "none";
   generujObrazkiZnowu2();
    $("#Zadanie6_odp").toggle("fast");
  }
}
function generujObrazkiZnowu2(){
 MultidimentionArray.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < 15; i++) {
      document.getElementById("6twarzOd_"+i).src = MultidimentionArray[i][0];
      document.getElementById("zadanie6_odp_"+i).src = MultidimentionArray[i][2]+"-";
    }
}

function sprawdz_zad6(){
var x =  document.getElementsByClassName("ZMP_zadanie6");

for (var cnt = 0; cnt < x.length; cnt++) {
   if (x[cnt].value ==MultidimentionArray[cnt][1]) {
         punkty_zad6+=1;
       var inputVal = document.getElementById("zadanie6_odp_input_"+cnt);
      // var labelvalue = document.getElementById("twarz_"+cnt);
       inputVal.style.backgroundColor = "GreenYellow";
     //  labelvalue.style.backgroundColor = "GreenYellow";
       inputVal.disabled = true;
  }else{
     var inputVal = document.getElementById("zadanie6_odp_input_"+cnt);
  //   var labelvalue = document.getElementById("twarz_"+cnt);
      inputVal.style.backgroundColor = "red";
   //   labelvalue.style.backgroundColor = "red";
      inputVal.disabled = true;
     }
 // document.getElementById("zadanie5_odp_input_"+cnt).value ="test";//NumeryDoTwarzy[i];
  }
 document.getElementById("zadanie6_pkt").innerHTML = punkty_zad6 +" pkt";
 document.getElementById("Zadanie6_sprawdz").disabled = true;
 $("#Zadanie6").toggle("normal");
 //document.getElementById("Zadanie6_button").disabled = false;
 tester-=1;
 koniecgry();
}

///Podsumowaniev


function koniecgry() {
  var punktyPodsumowanie;
   //document.getElementById("zadanie1_pkt").innerHTML = tester;
 if (tester==0) {
     $("#tabelapodsumowania").toggle("normal");
     document.getElementById("zadanie1_pkt_1").innerHTML=punkty_zad1+" pkt";
     document.getElementById("zadanie2_pkt_2").innerHTML=punkty_zad2+" pkt";
     document.getElementById("zadanie3_pkt_3").innerHTML=punkty_zad3+" pkt";
     document.getElementById("zadanie4_pkt_4").innerHTML=punkty_zad4+" pkt";
     document.getElementById("zadanie5_pkt_5").innerHTML=punkty_zad5+" pkt";
     document.getElementById("zadanie6_pkt_6").innerHTML=punkty_zad6+" pkt";
   punktyPodsumowanie= punkty_zad1+punkty_zad2+punkty_zad3+punkty_zad4+punkty_zad5+punkty_zad6;
    document.getElementById("podsumowanie_pkt").innerHTML = punktyPodsumowanie +" pkt";
 }
}