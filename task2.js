
var score=0;
var leftSum=100;
var die1;
var die2;
var sum=0;
function rollDice()
{
    leftSumCalc();
    if(leftSum>6)
    {
        die1=Math.floor(Math.random() * 6) + 1;
        die2=Math.floor(Math.random() * 6) + 1;
        document.getElementById("res").innerHTML=  'Result: '+die1+' '+die2;
        document.getElementsByClassName("roll")[0].disabled=true;
        document.getElementById("sub1").disabled=false;
        sum=die1+die2;
    }
    else if(leftSum<=6)
    {
        die1=Math.floor(Math.random() * 6) + 1;
        document.getElementById("res").innerHTML=  'Result: '+die1;
        document.getElementsByClassName("roll")[0].disabled=true;
        document.getElementById("sub1").disabled=false;
        sum=die1;
    }
       if(!gameEnd())
    {
        giveUp;
    }
}
var countChecked=0;
function giveUp()
{
    alert("Game is Over \nscore = "+ score);
    document.getElementsByClassName("roll")[0].disabled=true;
    document.getElementById("sub1").disabled=true;
}
function gameEnd()
{
    var uncheckedArray=new Array();
    let checkedBoxes=document.querySelectorAll(".check");
    for(var i=0;i<checkedBoxes.length;i++)
    if(!checkedBoxes[i].checked && checkedBoxes[i].disabled!=true)
        uncheckedArray.push(checkedBoxes[i]);

    for(var j=0;j<uncheckedArray.length;j++)
    {
        if(parseInt(uncheckedArray[j].value)==sum)
            return false;
        for(var m=0;m<uncheckedArray.length;m++)
        {
            if(parseInt(uncheckedArray[j].value)+parseInt(uncheckedArray[m].value==sum))
                return false;
            for(var k=0;k<uncheckedArray.length;k++)
            {
                if(parseInt(uncheckedArray[j].value)+parseInt(uncheckedArray[m].value+parseInt(uncheckedArray[k].value)==sum))
                    return false;
                for(var l=0;l<uncheckedArray.length;l++)
                    if(parseInt(uncheckedArray[j].value)+parseInt(uncheckedArray[m].value+parseInt(uncheckedArray[k].value)+parseInt(uncheckedArray[l].value)==sum))
                        return false;
            }
        }
    }
}
function leftSumCalc()
{
    leftSum=0;
    let checkedBoxes=document.querySelectorAll(".check");
    for(var i=0;i<checkedBoxes.length;i++)
        if(!checkedBoxes[i].checked && checkedBoxes[i].disabled!=true)
            leftSum+=checkedBoxes[i].value;
}
function submit()
{
    let checkSum=0;
    let checkedBoxes=document.querySelectorAll(".check");
    for(var i=0;i<checkedBoxes.length;i++)
        if(checkedBoxes[i].checked && checkedBoxes[i].disabled!=true)
            checkSum+=parseInt(checkedBoxes[i].value);
    if(checkSum==sum)
    {
        for(var i=0;i<checkedBoxes.length;i++)
            if(checkedBoxes[i].checked && checkedBoxes[i].disabled!=true)
            {
                checkedBoxes[i].disabled=true;
                score+=parseInt(checkedBoxes[i].value);
            }
        document.getElementsByClassName("roll")[0].disabled=false;
        document.getElementById("sub1").disabled=true;
    }
    else
    {
        alert("The total of the boxes you selected does not match the dice roll.Please make another selection and try again");
        for(var i=0;i<checkedBoxes.length;i++)
            if(checkedBoxes[i].checked && checkedBoxes[i].disabled!=true)
                checkedBoxes[i].checked=false;
    }
    countChecked=0;
    for(var i=0;i<checkedBoxes.length;i++)
        if(checkedBoxes[i].checked)
            countChecked++;
    if(countChecked>=9)
        alert("Game is Over \nscore = "+ score);
    
}

