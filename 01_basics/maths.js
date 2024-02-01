 const score =100
 const balance = new Number(500)
 console.log(balance);
 console.log(balance.toString());
 console.log(balance.toString().length);
 console.log(balance.toFixed(4));

 const temp = 127.88776
 console.log(temp.toPrecision(4));

 const price = 1000000000
 console.log(price.toLocaleString("en-IN"));

 console.log("**************maths***************")

 console.log(Math);
 console.log(Math.abs(-5));
 console.log(Math.round(5.6));
 console.log(Math.ceil(4.1));
 console.log(Math.floor(4.2));
 console.log(Math.min(1,8,9));
 console.log(Math.max(1,8,9));

 console.log(Math.random());// gives value from(0-1)
 console.log((Math.random()*10)+1);
 console.log(Math.floor(Math.random()*10)+1);

 const min = 10
 const max = 20

 console.log(Math.floor(Math.random()*(max - min + 1)) + min);
