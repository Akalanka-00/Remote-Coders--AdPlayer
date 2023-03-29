const db = require("../service/initialization")

const data = [{

}
]

data.forEach(async (element)=>{
    await db.collection("DevRevenueDrawingCollection").add(element);

})