var atPosion =[]
var table = []
var minesPositions = [] // mines position
var neighbourPositions = [] // neifgbour postion
var totalMines=10
function main() {
    task()
    start()
    play()
    var clock = setInterval(()=>{
        document.getElementById('time').innerHTML = parseInt(document.getElementById('time').innerHTML)+ 1 
    } ,1000)
    function stop(){
clearInterval(clock)
    }
}


function start(){
     // console.log('for 4')
    //neighbour(4)   ////////////////////////////////////////
    // console.log(' for 150')
    // neighbour(150)
   // console.log('for 10')
    // neighbour(10)
    // countMinesN()
    var mines = 1;
    var A = document.getElementsByClassName('flex-main')
    for (var a of A) {
        for (var aa of a.children) {

            // console.log(a,aa,'p')
      //       aa.innerHTML = mines
            neighbour(mines)
           // aa.innerHTML = countMinesN()
                atPosion[mines]=countMinesN()
                  aa.innerHTML= '<span hidden>'+atPosion[mines]+'</span>'


            if (minesPositions.indexOf(mines) != -1) {
                    aa.innerHTML = '<span hidden>10</span>'
                   // console.log(aa.innerHTML)
               // if (!aa.hasAttribute('class')) aa.className = 'red'
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
        minesPositions.push(p)
    }
   //****** console.log(minesPositions, 'mines')
    ///////////// position on grid



    function find(table, b) {
        for (let a of table) {
            if (a.row == b.row && a.col == b.col) return true
        }
    }
}









//neighbour(14)

function neighbour(a) {
    neighbourPositions = []
    ///////////for corner 1  10  141  150
    if (a == 1) {
        neighbourPositions.push(2);
        neighbourPositions.push(11);
        neighbourPositions.push(12);
    } else if (a == 10) {
        neighbourPositions.push(9);
        neighbourPositions.push(19);
        neighbourPositions.push(20);
    }else  if (a == 141) {
        neighbourPositions.push(131);
        neighbourPositions.push(132);
        neighbourPositions.push(142);
    }else if (a == 150) {
        neighbourPositions.push(139);
        neighbourPositions.push(149);
        neighbourPositions.push(140);
    } else if (topn(a) >= 0) {
     //***   console.log('from top')
        neighbourPositions.push(a + 1)
        neighbourPositions.push(a - 1)
        neighbourPositions.push(a + 10)
        neighbourPositions.push(a + 10 + 1)
        neighbourPositions.push(a + 10 - 1)
    } else if (bottum(a) >= 0) {
     //****   console.log('bottum')
        neighbourPositions.push(a - 10)
        neighbourPositions.push(a - 10 + 1)
        neighbourPositions.push(a - 10 - 1)
        neighbourPositions.push(a + 1)
        neighbourPositions.push(a - 1)
    } else if (left(a) >= 0) {
     //***   console.log('from left')
        neighbourPositions.push(a - 10)
        neighbourPositions.push(a - 10 + 1)

        neighbourPositions.push(a + 1)

        neighbourPositions.push(a + 10)
        neighbourPositions.push(a + 10 + 1)

    } else if (right(a) >= 0) {
       // console.log('from right')
        neighbourPositions.push(a - 10)

        neighbourPositions.push(a - 10 - 1)

        neighbourPositions.push(a - 1)
        neighbourPositions.push(a + 10)

        neighbourPositions.push(a + 10 - 1)

    } else {
       // console.log('from center')
        // center number
        neighbourPositions.push(a - 10)
        neighbourPositions.push(a - 10 + 1)
        neighbourPositions.push(a - 10 - 1)
        neighbourPositions.push(a + 1)
        neighbourPositions.push(a - 1)
        neighbourPositions.push(a + 10)
        neighbourPositions.push(a + 10 + 1)
        neighbourPositions.push(a + 10 - 1)
    }
 //**    console.log(neighbourPositions)
}


function topn(n) {
    return [2, 3, 4, 5, 6, 7, 8, 9].indexOf(n)

}

function bottum(n) {
    return [142, 143, 144, 145, 146, 147, 148, 149].indexOf(n)

}

function left(n) {
    return [11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131].indexOf(n)

}

function right(n) {
    return [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140].indexOf(n)

}


function countMinesN() {
    var cc = 0
    for (let aar of minesPositions) {
        for (let anr of neighbourPositions) {
            if (aar == anr) cc++
        }
    }
  //***  console.log(cc, 'no of mines available')
    return cc
}

function play(){
   console.log(minesPositions)
    var A = document.getElementsByClassName('flex-main')
    for (var a of A) {
        for (var aa of a.children) {
            aa.addEventListener('mousedown',(aaa)=>{
                // console.log(aaa.target)
                 // console.log(aaa.button)
                if(aaa.button==0){
                   // console.log(aaa)
                    console.log(aaa.target.children[0].innerHTML)
                     if(aaa.target.children[0].innerHTML == 10){
                        if (!aaa.target.hasAttribute('class')) aaa.target.className = 'red'
                         console.log('Game over')
                         stop()
                         alert("game over")
                         window.location.reload() 
                     }else{
                        aaa.target.children[0].removeAttribute('hidden')
                     }
                }
                  
                
                if(aaa.button==2){
                 // console.log(( aaa.target.innerHTML))  
                  if( aaa.target.children[0].innerHTML==10){
                      totalMines--
                      if(totalMines==0){alert('congratulation') }
                  }
                 // console.log('pevent default')
                   // aaa.preventDefault()
                  if(aaa.target.hasAttribute('class')){
                   // totalMines++  
                    aaa.target.removeAttribute('class')}
                  else{
                  //  totalMines++ 
                       aaa.target.className='flag'}
                  
                   document.getElementById('left').innerHTML=totalMines
                   
                   


                }
        })

    }
}
}