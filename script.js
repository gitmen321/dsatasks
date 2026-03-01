
async function retry(fn, retries) {
    try{
        const fetchData = ["sss","sssd", "sdda"];
        await retry(fetchData, 3);
    }
    catch (err){
        throw err;
    }
}