function PhErtek(vizsgaltErtek:number):string{
    var valasz:string = "";
   
    if(vizsgaltErtek == 7){
        valasz = "semleges";
    }
    else if(vizsgaltErtek < 7){
        valasz = "savas";
    }
    else {
        valasz = "lugos";
    }
    return valasz;
}

function PrimekSzama(vizsgaltTomb:number[]):number{       
    var primek: number[] = [];
    for(var i:number = 0; i<vizsgaltTomb.length; i++)
    {
        var answer:boolean = true;
        if (vizsgaltTomb[i] <= 1) {
            answer = false;
        }
        else {
            for (var i = 2; i <= vizsgaltTomb[i] / 2 ; i++) {
                if (vizsgaltTomb[i] % i == 0) {
                    answer = false;
                    break;
                }               
            }
        }
        if (answer){
            primek.push(vizsgaltTomb[i]);
        }
    }
    return primek.length;   

}

function MaganHangzokSzama(vizsgaltSzoveg:string):number{
    var mgnh:string[] = ['a','e','i','o','u','á','é','í', 'ó', 'ö','ő','ü','ű','ú'];
    var splitVizsgaltSzoveg:string[] = vizsgaltSzoveg.split("");
    var szamolo:number = 0;
    for (var i:number=0; i< splitVizsgaltSzoveg.length; i++){
        for (var j:number = 0; j<mgnh.length; j++){
            if (vizsgaltSzoveg[i] == mgnh[j]){
                szamolo++;
            }
        }
    }
    return szamolo;
}

