let pc = document.getElementById("pc");

console.log(pc);

function game(name, platforms, war, gp, id){
    this.name = name;
    this.platforms = platforms;
    this.war = war;
    this.gp = gp;
    this.id = id;
}

let games = [];

let bf1942 = games[0] = new game("Battlefield 1942", ["PC"], "ww2", "i+v", "bf1942");
let bf2 = games[1] = new game("Battlefield 2", ["PC"], "modern", "i+v", "bf2");
let bf2141 = games[2] = new game("Battlefield 2142", ["PC"], "future", "i+v", "bf2142");
let bfbc1 = games [3] = new game("Battlefield: Bad Company", ["x360", "ps3"], "modern", "i+v", "bc1");
let bf1943 = games[4] = new game("Battlefield 1943", ["x360", "ps3"], "ww2", "i+v", "bf1943");
let bfbc2 = games[5] = new game("Battlefield: Bad Company 2", ["x360", "ps3", "PC"], "modern", "i+v", "bc2");
let bf3 = games[6] = new game("Battlefield 3", ["x360", "ps3", "PC"], "modern", "i+v", "bf3");
let bf4 = games[7] = new game("Battlefield 4", ["x360", "ps3", "PC", "x1", "ps4"], "modern", "i+v", "bf4");
let bfh = games[8] = new game("Battlefield Hardline", ["x360", "ps3", "PC", "x1", "ps4"], "modern", "i", "bfh");
let bf1 = games[9] = new game("Battlefield 1", ["x1", "ps4", "PC"], "ww1", "i+v", "bf1");
let bf5 = games[10] = new game("Battlefield V", ["x1", "ps4", "PC"], "ww2", "i+v", "bf5");
let bf6 = games[11] = new game("Battlefield 2021", ["x1", "ps4", "PC", "xs", "ps5"], "modern", "i+v", "bf6");


for (let i = 0; i<games.length; i++){
    if (localStorage.getItem(i) === 'true') document.getElementById(games[i].id).style.display = "flex";
}



let form1,
    btn = document.getElementById("submit"),
    testbtn = document.getElementById("testbtn")

testbtn.onclick = function(){
    document.getElementById("ne").style.display = "none";
    let oneResult = false;
    localStorage.clear();

    games.forEach(function (i) {
        document.getElementById(i.id).style.display = "none";
    })

    form1 = new FormData(document.forms.frm);
    
    if ((form1.get("x360") === null && form1.get("pc") === null && form1.get("ps3") === null
        && form1.get("ps4") === null && form1.get("xs") === null && form1.get("x1") === null &&
        form1.get("ps5") === null) || form1.get("iv") === null){
            document.getElementById("ne").style.display = "flex";
            return;
        } else document.getElementById("ne").style.display = "none";
    
    if (form1.get("ww1") === null && form1.get("ww2") && 
    form1.get("modern") === null && form1.get("future") === null){
        document.getElementById("ne").style.display = "flex";
        return;
    } else document.getElementById("ne").style.display = "none";




    console.log(form1.get("x360"));

    let resgames = games.map(function(el){
        let psovp = wsovp = false;

        el.platforms.forEach(function(i){

            switch (i){
                case form1.get("x360"):
                    psovp = true;
                    break;
                case form1.get("pc"):
                    psovp = true;
                    break;
                case form1.get("ps3"):
                    psovp = true;
                    break;
                case form1.get("ps4"):
                    psovp = true;
                    break;
                case form1.get("xs"):
                    psovp = true;
                    break;
                case form1.get("x1"):
                    psovp = true;
                    break;
                case form1.get("ps5"):
                    psovp = true;
                    break;
            }
            
           // console.log("psovp");

        })

        switch (el.war){
            case form1.get("ww1"):
                wsovp = true;
                break;
            case form1.get("ww2"):
                wsovp = true;
                break;
            case form1.get("modern"):
                wsovp = true;
                break
            case form1.get("future"):
                wsovp = true;
                break;
        }


        if (psovp && wsovp && form1.get("iv") == el.gp) return el;


    })

    console.log(resgames);

    let resgameex = [];
    
    for (let i = 0, j = 0; i<resgames.length; i++){
        if (resgames[i]!=undefined){
            document.getElementById(resgames[i].id).style.display = "flex";
            resgameex[j] = resgames[i];
            j++;
            localStorage.setItem(i, 'true');
            oneResult = true;
        } else  localStorage.setItem(i, 'false');
    }

    if(!oneResult) document.getElementById("nores").style.display = "block";

    console.log(resgameex);

}








