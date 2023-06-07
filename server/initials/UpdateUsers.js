const collectionList = require("../service/Collections");


async function updateUser(){
    const userCollection = await collectionList.userCollection.get();
user_list = userCollection.docs.map(async (doc)=>{
    const userRef = await collectionList.userCollection.doc(doc.id).update({
        email:doc.data().fname+doc.data().lname+"@gmail.com"
    })
    console.log(doc.data())
})
}


updateUser();