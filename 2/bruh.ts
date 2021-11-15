let globalbool = true;
let globalbool2 = true;
let globalx = 0
let globaly = 0
let booltab = []
let destiny = []
let starting = []
let smallbool = true;
let mode = 0;
type Coords = {
    x: number;
    y: number;
    value: number;
};
class Data {
    status: boolean;
    dist: number;
    dest: boolean;
    constructor() {
        this.status = true;
        this.dist = 1000;
        this.dest = false;
    }
}
let bruh = [
    [
        new Data,
        new Data,
        new Data,
        new Data,
        new Data
    ],
    [
        new Data,
        new Data,
        new Data,
        new Data,
        new Data
    ],
    [
        new Data,
        new Data,
        new Data,
        new Data,
        new Data
    ],
    [
        new Data,
        new Data,
        new Data,
        new Data,
        new Data
    ],
    [
        new Data,
        new Data,
        new Data,
        new Data,
        new Data
    ],
]
function checkAdjacent(coords: Coords) {
    let innerbool = false
    console.log(coords.x, coords.y);

    if (coords.x > 0) {
        //console.log(bruh[coords.x - 1][coords.y].status);

        if (bruh[coords.x - 1][coords.y].status) {
            //console.log("x-1");

            booltab.push(true)
            bruh[coords.x - 1][coords.y].dist = coords.value;
            document.getElementById((coords.x - 1) + "-" + coords.y).innerText = "" + (coords.value)
            bruh[coords.x - 1][coords.y].status = false
        } else if (bruh[coords.x - 1][coords.y].dest) {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            bruh[coords.x - 1][coords.y].dist = coords.value;
            globalbool = false
        }
    }
    if (coords.x < 4) {
        //console.log(bruh[coords.x + 1][coords.y].status);

        if (bruh[coords.x + 1][coords.y].status) {
            //console.log("x+1");
            booltab.push(true)
            bruh[coords.x + 1][coords.y].dist = coords.value;
            document.getElementById((coords.x + 1) + "-" + coords.y).innerText = "" + (coords.value)

            bruh[coords.x + 1][coords.y].status = false
        } else if (bruh[coords.x + 1][coords.y].dest) {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            bruh[coords.x + 1][coords.y].dist = coords.value;
            globalbool = false
        }
    }
    if (coords.y > 0) {
        if (bruh[coords.x][coords.y - 1].status) {
            //console.log("y-1");
            booltab.push(true)
            bruh[coords.x][coords.y - 1].dist = coords.value;
            document.getElementById(coords.x + "-" + (coords.y - 1)).innerText = "" + (coords.value)

            bruh[coords.x][coords.y - 1].status = false
        } else if (bruh[coords.x][coords.y - 1].dest) {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            bruh[coords.x][coords.y - 1].dist = coords.value;
            globalbool = false
        }
    }
    if (coords.y < 4) {
        //console.log(bruh[coords.x][coords.y + 1].status);

        if (bruh[coords.x][coords.y + 1].status) {
            //console.log("y+1");
            booltab.push(true)
            bruh[coords.x][coords.y + 1].dist = coords.value;
            document.getElementById(coords.x + "-" + (coords.y + 1)).innerText = "" + (coords.value)

            bruh[coords.x][coords.y + 1].status = false
        } else if (bruh[coords.x][coords.y + 1].dest) {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            bruh[coords.x][coords.y + 1].dist = coords.value;
            globalbool = false
        }
    }
    //console.log(innerbool);

    if (!innerbool) {
        //console.log("AAAA");
        booltab.push(false)
    }
}
function search(coords: Coords) {
    let newval = coords.value;
    checkAdjacent({ x: coords.x, y: coords.y, value: newval })
    while (globalbool && globalbool2) {

        newval++
        console.log(newval);
        console.log("henlo");
        globaly = 0
        globalx = 0

        bruh.forEach(element => {
            element.forEach(element => {
                if (!element.status && element.dist == newval - 1) {
                    checkAdjacent({ x: globalx, y: globaly, value: newval })
                }
                globaly++;
            })
            globaly = 0;
            globalx++;
        });
        globalbool2 = false
        booltab.forEach(element => {
            if (element) {
                globalbool2 = true;
            }
        });
        booltab = []
    }
    if (!globalbool) {
        console.log("ZNALAZŁEM");
        colorpath();
    } else {
        console.log("NIE ZNALAZŁEM");
    }

}
function colorpath() {
    console.log("jestę");

    let finish = true;
    let c = destiny;
    let skip = true;
    let count = 0;
    document.getElementById(c[0] + "-" + c[1]).style.backgroundColor = "teal";
    while (finish && count < 50) {
        skip = true
        if (c[0] > 0 && skip) {
            if (bruh[c[0] - 1][c[1]].dist == (bruh[c[0]][c[1]].dist - 1)) {
                skip = false;
                c[0]--;
                document.getElementById(c[0] + "-" + c[1]).style.backgroundColor = "teal";
            }
        }
        if (c[0] < 4 && skip) {
            if (bruh[c[0] + 1][c[1]].dist == (bruh[c[0]][c[1]].dist - 1)) {
                skip = false;
                c[0]++;
                document.getElementById(c[0] + "-" + c[1]).style.backgroundColor = "teal";
            }
        }
        if (c[1] > 0 && skip) {
            if (bruh[c[0]][c[1] - 1].dist == (bruh[c[0]][c[1]].dist - 1)) {
                skip = false;
                c[1]--;
                document.getElementById(c[0] + "-" + c[1]).style.backgroundColor = "teal";
            }
        }
        if (c[1] < 4 && skip) {
            if (bruh[c[0]][c[1] + 1].dist == (bruh[c[0]][c[1]].dist - 1)) {
                skip = false;
                c[1]++;
                document.getElementById(c[0] + "-" + c[1]).style.backgroundColor = "teal";
            }
        }
        if (bruh[c[0]][c[1]].dist == -1) {
            finish = false
        }
        count++;
    }
}
function clicked(xi, yi) {
    if (mode == 0) {
        document.getElementById(xi + "-" + yi).innerText = "K"
        bruh[xi][yi].status = false
        bruh[xi][yi].dest = true
        destiny = [xi, yi]
    } else if (mode == 1) {
        document.getElementById(xi + "-" + yi).innerText = "X"
        bruh[xi][yi].status = false
    } else if (mode == 2) {
        document.getElementById(xi + "-" + yi).innerText = "S"
        bruh[xi][yi].status = false
        bruh[xi][yi].dist = 0
        starting = [xi, yi]
        search({ x: xi, y: yi, value: 1 });
    }

}
function switchin() {
    if (mode < 2) {
        mode++;
        console.log(mode);

    }
}

console.log(bruh);
console.log(globalbool);



