function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched...")
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched...")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching Blog Data...");
        //const postData = await fetchPostData();
        //const commentData = await fetchCommentData();
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(postData);
        console.log(commentData);
        console.log("Fetched Data Successfully...");
        
    } catch (error) {
        console.error("Error Fetching Blog Data...", error)
    }
}

getBlogData();