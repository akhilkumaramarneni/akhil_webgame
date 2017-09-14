var k = 0;
function start_yes_or_no(input) {
    if (input) {
        //document.getElementById("start").innerHTML = "Then choose a number between 0 to 31";
        //document.write("<h2 color=red></h2>");
        //document.write("<h2><center>Please select the numbers between 1 to 31<center></h2>");
        document.getElementById("start").innerHTML = "select a number b/w 1 to 31 and is it present in following<br/> \
            <center><pre>31 29 3 23 <br><br>1 5 7 25 <br><br> 9 11 13 27<br><br> 17 19 21 15</pre>";
        document.getElementById("yes").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        
        document.getElementById("yes1").style.display = 'inline';
        document.getElementById("no1").style.display = 'inline';
    }
    else
        alert("do u want to exit...!");
}


function start1_yes_or_no(input) {
    if (input) {
        k = k + 1;
    }
    document.getElementById("start1").innerHTML = "Does it present in following...?<br/> \
        <center><pre>2 6 3 7 <br><br>14 11 18 15 <br><br> 19 22 23 26<br><br> 27 10 31 30</pre>";
    document.getElementById("yes1").style.display = 'none';
    document.getElementById("no1").style.display = 'none';

    document.getElementById("yes2").style.display = 'inline';
    document.getElementById("no2").style.display = 'inline';
    
   
}


function start2_yes_or_no(input) {
    if (input) {
        k = k + 2;
    }
    document.getElementById("start2").innerHTML = "Check whether the number is present in following..?<br/> \
        <center><pre>14 7 12 4 <br><br>5 13 6 15 <br><br> 20 21 23 22<br><br> 29 28 31 30</pre>";
    document.getElementById("yes2").style.display = 'none';
    document.getElementById("no2").style.display = 'none';

    document.getElementById("yes3").style.display = 'inline';
    document.getElementById("no3").style.display = 'inline';
    
}


function start3_yes_or_no(input) {
    if (input) {
        k = k + 4;
    }
    document.getElementById("start3").innerHTML = "Whether the number is present in following..?<br/> \
        <center><pre>10 8 12 14 <br><br>9 11 13 15 <br><br> 24 25 28 30<br><br> 26 27 31 29</pre>";
    document.getElementById("yes3").style.display = 'none';
    document.getElementById("no3").style.display = 'none';

    document.getElementById("yes4").style.display = 'inline';
    document.getElementById("no4").style.display = 'inline';
   
}

function start4_yes_or_no(input) {
    if (input) {
        k = k + 8;
    }
    document.getElementById("start4").innerHTML = "finally check clearly the number is here....?<br/> \
        <center><pre>16 18 19 17 <br><br>20 21 23 22 <br><br> 24 25 28 30<br><br> 26 27 31 29</pre>";
    document.getElementById("yes4").style.display = 'none';
    document.getElementById("no4").style.display = 'none';

    document.getElementById("yes5").style.display = 'inline';
    document.getElementById("no5").style.display = 'inline';
   
}

function start5_yes_or_no(input) {
    if (input) {
        k = k + 16;
    }
    document.getElementById("yes5").style.display = 'none';
    document.getElementById("no5").style.display = 'none';
    document.getElementById("ans").innerHTML = "UR NUMBER IS "+k;
}


