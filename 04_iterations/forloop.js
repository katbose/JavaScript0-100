for (let i = 0; i < 10; i++) {
    const element = i;
    if (i == 5) {
        console.log(`${i} got printed`);
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop Value: ${j}, Outer Loop Value: ${i}`);
    }
}

// break & Continue

for (let x = 1; x <= 20; x++) {
    if (x==5) {
        console.log(`${5} fav no. detected`);
        break
    }
    console.log(`Value of x: ${x}`);
    
}