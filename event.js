function next (idname){
    document.getElementById(idname).style.display = "block";
    window.scroll(0,document.documentElement.scrollHeight-document.documentElement.clientHeight)
}

function procVisible(){
    var ff = 0;

    if (document.getElementById("food1").checked == true){
         ff = ff + 2
    }else{ff= ff + 1};

    if (document.getElementById("fire1").checked == true){
          ff = ff + 20
    }else{ff = ff + 10};

    if (document.getElementById("fire-works1").checked == true){
          ff = ff + 200
    }else{ff = ff + 100};

    if (document.getElementById("fire-miss1").checked == true){
          ff = ff + 2000
    }else{ff = ff + 1000};

    if (document.getElementById("fire-event1").checked == true){
          ff = ff + 20000
    }else{ff = ff + 10000};

    if (document.getElementById("place1").checked == true){
          ff = ff + 200000
    }else{ff = ff + 100000};

    if (document.getElementById("place2").checked == true){
          ff = ff + 20000000;
    }else{ff = ff + 10000000};

    if (document.getElementById("place3").checked == true){
          ff = ff + 200000000;
    }else{ff = ff + 100000000};

    if (document.getElementById("place5").checked == true){
          ff = ff + 2000000000;
    }else{ff = ff + 1000000000};

    if (document.getElementById("cheer1").checked == true){
          ff = ff + 20000000000;
    }else{ff = ff + 10000000000};

    strff = String(ff)
    url = location.href
    window.location = "result.html?check=" + strff
}
