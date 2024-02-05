const languages = {
    js : "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift for apple"
}

for (const key in languages) {
    console.log(`${key} is for ${languages[key]}`);
}

//maps can't be iterable in forin loop
//for arrays keys are indexs are printed