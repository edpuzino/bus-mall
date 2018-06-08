'usestrict';


Sales.pics + [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];

function handleClick (event) {

}


//tally
function showTally() {
    for(var i = 0; i < Sales.all.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = Sales.all[i].name+ ' has ' + Sales.all[i].clicks + ' votes in ' + Sales.all[i].displays + ' displays.'


    }
}

