var pflag = location.search;
var ff = 1;

if (pflag.charAt(pflag.length -1) == 2){
    document.getElementById("eventProcedure").style.display = "block";
}else{};

if (pflag.charAt(pflag.length -2) ==2){
    document.getElementById("fireProcedure").style.display = "block";
}else{};

if (pflag.charAt(pflag.length -3) ==2){
    document.getElementById("dorosenyo").style.display = "block";
}else{};

if (pflag.charAt(pflag.length -4) ==2){
    document.getElementById("parksenyo").style.display = "block";
}else{};

if (pflag.charAt(pflag.length -5) ==2){
    document.getElementById("koukyosiyo").style.display = "block";
}else{};

if (pflag.charAt(pflag.length -6) ==2){
    document.getElementById("cheering").style.display = "block";
}else{};