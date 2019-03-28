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
            url : "http://Visualmonsters.cba.pl/Quiz/test.txt",
            success : function (data) {
            fileInput=data;
            }
        });
});

//zadanie 2
var res2 = [];
var i_zadanie2 = 180;
var poziom;
function myFunction2() {
    $("#Zadanie2").toggle("normal");
		document.getElementById("Zadanie2_button").disabled = true;
	  res2 = fileInput.split(";");
    var text2 = [];
     poziom = document.getElementById("ilosc_elementow").value;
    res2.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < poziom; i++) {
     //  text2.push("<p>"+(i+1)+". "+res2[i]+"</p>");
     text2.push((i+1)+". "+res2[i]);
     //+"<a id=firstname>____</a>";
    }
    var iloscwierszy = Math.ceil(poziom/2);
    var mojatabela="<table align=center width=100%><tbody>";
    var licznik =0;
     for (var i = 0; i < iloscwierszy; i++) {
     mojatabela+="<tr>";
       for (var j = 0; j < 3; j++) {
             mojatabela+="<td class=pogrubiony2 align=left id = cyraslowo_"+licznik+"></td>";
             //  <td class="pogrubiony2" align="left" id = "cyraslowo_5"></td>
             //   mojatabela+="<a class=timer>"+text5+"</a>---<input maxlength="+poziom+" class=ZMP_zadanie type=text id=zadanie2_"+i+"_"+j+"></input>";
             //mojatabela+="</td>";
             licznik+=1;
        }
     mojatabela+="</tr>";
       }
            mojatabela+="</table></tbody>";
       document.getElementById("tabelaodpowiedzi").innerHTML = mojatabela;
    text2.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < poziom; i++) {
           document.getElementById("cyraslowo_"+i).innerHTML=text2[i];
    }
      
  //  document.getElementById("Zadanie2_tablica").innerHTML =text2.join(" ") ;
    onTimer2();
   
 }

i_zadanie2_1=0;

function zadanie2_czasStop(){
  i_zadanie2_1=1;
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
  
  //  document.getElementById("zadanie2_odpTextboxArea").innerHTML = text;
var iloscwierszy = Math.ceil(poziom/2);
 var mojatabela="<table align=center width=100%><tbody>";
var licznik =0;
     for (var i = 0; i < iloscwierszy; i++) {
     mojatabela+="<tr>";
       for (var j = 0; j < 2; j++) {
         //<td   align="left" id = "cyraslowo_2_1"></td>
             mojatabela+="<td align=left id = cyraslowo_"+licznik+"_1></td>";
             licznik+=1;
        }
     mojatabela+="</tr>";
       }
       document.getElementById("zadanie2_odpTextboxArea").innerHTML = mojatabela;
for(var i = 0; i < poziom; i++) {

    document.getElementById("cyraslowo_"+i+"_1").innerHTML=(i+1)+". "+"<input class=ZMP_zadanie2 type=text id=zadanie2_"+i+"></input>"+"<h id=zad2_"+i+"></h>";
      // text+= "<p>"+(i+1)+". "+"<input class=ZMP_zadanie2 type=text id=zadanie2_"+i+"></input>"+"<h id=zad2_"+i+"></h>"+"</p>";
    }

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
}



function AlfabetFonetycznyTxtboxy(){
  var mojatabela="<table><tbody>";
    for (var i = 0; i < 10; i++) {
        mojatabela+="<tr>";
        var ArrayWewnatrz=[];
        for (var j = 0; j < 3; j++) {
              mojatabela+="<td align=right>";
              var text5="";
                if (wCogramy==0){
                  for(var k=0; k<poziom;k++){
                    text5+= Math.floor((Math.random() * 10));
                  }
                   ArrayWewnatrz.push(text5)
               }else{
                 var ster="";
                  for(var k=0; k<poziom;k++){
                    var wartosc = Math.floor((Math.random() * 10));
                    ster+=wartosc;
                    if(mojelitert[wartosc][0]=="_" || mojelitert[wartosc][1]=="_" ){
                      if(mojelitert[wartosc][0]=="_" ){ text5+=mojelitert[wartosc][1];}else{ text5+=mojelitert[wartosc][0];}
                    }else{
                        var los = Math.random() ;
                        if (los<0.5){text5+=mojelitert[wartosc][0];}else{text5+=mojelitert[wartosc][1];}
                    }
                  }
                  ArrayWewnatrz.push(ster)
               }
              mojatabela+="<a class=timer>"+text5+"</a>---<input maxlength="+poziom+" class=ZMP_zadanie type=text id=zadanie2_"+i+"_"+j+"></input>";
              mojatabela+="</td>";
        }
        arraytoMDA.push(ArrayWewnatrz);
        mojatabela+="</tr>";
    }
    mojatabela+="</table></tbody>";
    document.getElementById("tabelaodpowiedzi").innerHTML = mojatabela;
}

function OdNowa(){
  location.reload();
}