class UseFetch{
    constructor (data, error){
        this.data = data;
        this.error = error;
    }

    isError(){
        return this.error==null;
    }

    isEmpty(){
        return this.data==null;
    }

    setData(data){
        this.data = data;
        this.error = null;
    }

    setError(error){
        this.data = null;
        this.error = error;
    }
}