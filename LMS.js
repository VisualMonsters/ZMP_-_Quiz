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
            url : "http://visualmonsters.cba.pl/Quiz/test.txt",
            success : function (data) {
            fileInput=data;
            }
        });

document.getElementById("Zadanie1_OdNowa").disabled = true;
});


//zadanie1
var res = [];
var i_zadanie1;
var iloscelementow;
function myFunction() {
    $("#Zadanie1").toggle("normal");
		document.getElementById("Zadanie1_button").disabled = true;
    iloscelementow = document.getElementById("ilosc_elementow").value;
	  res = fileInput.split(";");
    var text = "";
    res.sort(function() { return 0.5 - Math.random() });
    for(var i = 0; i < iloscelementow; i++) {
       text+= res[i]+", ";
    }
    document.getElementById("Zadanie1_tablica").innerHTML = text;
    i_zadanie1=8*iloscelementow;
    onTimer();
 }

function nieczekaj_zad1(){
 i_zadanie1=0
}

function onTimer() {
  document.getElementById('timer_zad1').innerHTML = i_zadanie1;
  i_zadanie1--;
  if (i_zadanie1 < 0) {
    document.getElementById("Zadanie1").style.display = "none";
    DodajInput();
    $("#Zadanie1_odp").toggle("fast");
  }
  else {
    setTimeout(onTimer, 1000);
  }
}




function DodajInput(){
   var text = "";
  for(var i = 0; i < iloscelementow; i++) {
       text+= "<input class=LMS_zadanie1 type=text id=LMS_zadanie1_input_"+i+"></input>";
    }
    document.getElementById("PolaInput").innerHTML = text;
}
var punkty_zad1=0;

function sprawdz_zad1() {
  	document.getElementById("Zadanie1_sprawdz").disabled = true;
    $("#Zadanie1").toggle("normal");
  var x  = document.getElementsByClassName("LMS_zadanie1");
  for(var i = 0; i < x.length; i++) {
   if (inArray(x[i].value,res)< 0) {
            var inputVal = document.getElementById("LMS_zadanie1_input_"+i);
            inputVal.style.backgroundColor = "red";
        }else{
          punkty_zad1+=1
           var inputVal = document.getElementById("LMS_zadanie1_input_"+i);
          inputVal.style.backgroundColor = "GreenYellow";
     }
  }
  document.getElementById("zadanie1_pkt").innerHTML = punkty_zad1 +" pkt";
   document.getElementById("Zadanie1_OdNowa").disabled = false;
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

function OdNowa(){
  location.reload();
}
