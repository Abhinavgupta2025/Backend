function fetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let dholku = false;
            if(dhoku){
                resolve("data fetched succesfully");
            }
            else{
                reject("failed")
            }
        }, 3000);

    })
}
fetch()
    .then((data)=> console.log(data))
        .catch((error)=> console.log(error))