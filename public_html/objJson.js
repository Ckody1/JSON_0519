$(function(){ 
//    console.log(tarsasJson);
//    var tarsasTomb = JSON.parse(tarsasJson);
//    console.log(tarsasTomb);
    
    $.ajax({
        url: "termekek.json",
        success: function(result){
            console.log(result);
            tarsasTomb = result;
            kiir(tarsasTomb);
        }
    }); 
    
    $("#OK").click(ment);
});

var tarsasTomb = [];


function kiir(){
    $("article").empty();
    console.log(tarsasTomb);
    $("article").append("<table>");
    $("article table").append("<tr>");
    $("article table tr").append("<th>Termék neve: </th>");
    $("article table tr").append("<th>Ár: </th>");
    $("article table tr").append("<th>Típus: </th>");
    
    for (var i = 0; i < tarsasTomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in tarsasTomb[i]) {
            $("article table tr").eq(i + 1).append("<td>"+tarsasTomb[i][item] +"</td>");
        }
//        $("article table tr").eq(i + 1).append("<td>"+tarsasTomb[i].termeknev +"</td>");
//        $("article table tr").eq(i + 1).append("<td>"+tarsasTomb[i].ar+"</td>");
//        $("article table tr").eq(i + 1).append("<td>"+tarsasTomb[i].fajta+"</td>");
    }
}


//objektum szerkezet létrehozása

//var tarsasTomb = [
//    {
//        termeknev:"Monopoly",
//        ar:1500,
//        fajta:"Táblajáték"
//    },
//    {
//        termeknev:"Uno",
//        ar:1000,
//        fajta:"Kártyajáték"
//    }
//];

//var tarsasJson = '[{"termeknev":"Monopoly","ar":1500,"fajta":"Táblajáték"},{"termeknev":"Uno","ar":1000,"fajta":"Kártyajáték"}]';

function ment(){
    var ujAdat = {};
    ujAdat.termeknev = $("#nev").val();
    ujAdat.ar = $("#ar").val();
    ujAdat.fajta = "Táblás";
    
    tarsasTomb.push(ujAdat);
    kiir();
}