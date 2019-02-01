var table = []
var ar = []

function random() {
    task()
    neighbour(14)  ////////////////////////////////////////
    var mines = 1;
    var A = document.getElementsByClassName('flex-main')
    for (var a of A) {
        for (var aa of a.children) {

            // console.log(a,aa,'p')
            aa.innerHTML = mines
            if (ar.indexOf(mines) != -1) {
                aa.innerHTML = mines
                if (!aa.hasAttribute('class')) aa.className = 'red'
            }
            mines++
        }
    }

}


function task() {
    console.log('ready-----')
    // var table=[]  //////////////////////////////////////////////////////////
    //console.log(table)
    //console.log(table)

    //// 10 mines position
    let count = 10
    do {
        var b = {
            row: 2,
            col: 5
        }
        b.row = parseInt(Math.random() * 15) + 1
        b.col = parseInt(Math.random() * 10) + 1
        // console.log(b)
        if (find(table, b)) {
            console.log('hiiii')
        } else {
            //      console.log('not found')
            table.push(b)
            count--
        }
    } while (count > 0);

    table.sort((a, b) => a.row == b.row ? a.col - b.col : a.row - b.row)

    //console.log('aftre push',table)   
    //print-------------////////////////////////////im[po]
    // var ar =[]        ////////////////////////////
    for (let a of table) {
        //console.log(a.row,a.col)
        var p = (a.row - 1) * 10 + a.col
        //  console.log(p,a.row,a.col)
        ar.push(p)
    }
    console.log(ar)
    ///////////// position on grid



    function find(table) {
        for (let a of table) {
            if (a.row == b.row && a.col == b.col) return true
        }
    }
}

//neighbour(14)

function neighbour(a) {
    var nr = []
    nr.push(a - 10)
    nr.push(a - 10 + 1)
    nr.push(a - 10 - 1)
    nr.push(a + 1)
    nr.push(a - 1)
    nr.push(a + 10)
    nr.push(a + 10 + 1)
    nr.push(a + 10 - 1)
console.log(nr)
}