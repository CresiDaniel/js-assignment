console.log("calculating program of commission");
var sales=prompt("Enter the Sales done");
let cal=function(){
if (sales>=0 && sales<=5000) 
{
    return (sales*2/100);
  }
   else if (sales>=5001 && sales<=10000) 
   {
    return (sales*5/100);
  }
  else if (sales>=10001 && sales<=20000)
   {
    return (sales*7/100);
    }
   else {(sales >20000)
    {
        return (sales*10/100);
    }
  }
}
let result=cal();
console.log(result);
