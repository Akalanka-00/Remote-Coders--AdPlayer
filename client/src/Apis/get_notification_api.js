const { default: baseUrl } = require("./baseUrl")

module.exports = async function(){
    baseUrl.get("/api/service/get/notification")
    .then((res)=>{
       // console.log();
       // console.log(res.data)
        return  res.data;
        //console.log(res.data)
    })
    .catch((err) => {
        console.log(err);
      });
      
}