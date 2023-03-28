function next (idname){
    document.getElementById(idname).style.display = "block";
    scrollBy(0,100)
}

function procVisible(){
    var ff = 1;

    if (document.getElementById("food1").checked == true){
         ff = ff + 1
    }else{};

    if (document.getElementById("fire1").checked == true){
        ff = ff + 20
    }else{ff = ff + 10};

    if (document.getElementById("place1").checked == true){
        ff = ff + 200
    }else{ff=ff+100};

    if (document.getElementById("place2").checked == true){
        ff = ff + 2000;
    }else{ff= ff + 1000};

    if (document.getElementById("place3").checked == true){
        ff = ff + 20000;
    }else{ff = ff + 10000};

    if (document.getElementById("cheer1").checked == true){
        ff = ff + 200000
    }else{ff= ff + 100000};

    strff = String(ff)
    url = location.href
    window.location = "result.html?check=" + strff
}

function test(){
    document.getElementById("eventProcedure").style.display = "block";
}
