const apiRequest = async (url='',updateOptions={},errorMsg=null)=>{
    try{
        const response = await fetch(url,updateOptions);
        if(!response.ok) Error('Could not able to update data')
    }
    catch(err){
        errorMsg = err.message;
    }
    finally{
        return errorMsg;
    }
}
export default apiRequest;