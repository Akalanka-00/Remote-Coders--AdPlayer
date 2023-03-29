const { default: baseUrl } = require("./baseUrl")

module.exports = async function(){
   let data ;
    baseUrl.get("/api/service/get/notification")
    .then((res)=>{
       // console.log();
        console.log(res.data)
        data =  res.data;
        //console.log(res.data)
    })
    .catch((err) => {
        console.log(err);
        return 0;
      });
      
      return data;
}