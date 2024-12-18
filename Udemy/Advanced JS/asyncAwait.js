    // another way of consuming promise in js other than .then, .catch

    function fetchUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    name: "Bose",
                    url: "https://linkedin.com/in/katbose"
                })
            }, 3000);
        })
    }
    /*It is normal way of doing consuming promises
    fetchUserData
        .then()
        .catch()
    */

    //another way to consume promise is using async/await
    //async keyword says that it can take some time!
    async function getUserData() {
        try {
            //all good tasks happen here
            console.log("Fetching User's data...");        
            let result = await fetchUserData();  
            console.log(result);
            console.log("User's Data Fetched Successfully!!!");
            
                
        } catch (error) {
            //all bad tasks are catched here!
            console.log("Error Fetching Data...", error);        
        }
    }
getUserData()
