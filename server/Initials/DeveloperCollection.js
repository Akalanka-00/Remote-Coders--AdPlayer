const db = require("../service/initialization")

const data = [{
    fname:"test",
    lname:"user",
    email:"test@mail.com",
    password:"123",
    profile:"https://firebasestorage.googleapis.com/v0/b/remotecoders-2140a.appspot.com/o/profile_picture.png?alt=media&token=44fc6e54-e257-4c4d-8087-f541e3f9e411",
    games:[],
    bank_data_id:"",
},
{
    fname:"test",
    lname:"user 2",
    email:"test@mail.com",
    password:"123",
    profile:"https://firebasestorage.googleapis.com/v0/b/remotecoders-2140a.appspot.com/o/profile_picture.png?alt=media&token=44fc6e54-e257-4c4d-8087-f541e3f9e411",
    games:[],
    bank_data_id:"",
},
{
    fname:"test",
    lname:"user 3",
    email:"test@mail.com",
    password:"123",
    profile:"https://firebasestorage.googleapis.com/v0/b/remotecoders-2140a.appspot.com/o/profile_picture.png?alt=media&token=44fc6e54-e257-4c4d-8087-f541e3f9e411",
    games:[],
    bank_data_id:"",
},

]

const bank_data = {
    name_on_bank_acc:"Test Bank User",
    bank_name:"Test Bank",
    routing_no:"10125101651",
    acc_no:"12345687",
    acc_type:"Saving",    //Saving, Checking, Business
    
}

data.forEach(async (element)=>{
    await db.collection("DeveloperCollection").add(element).then(async (doc)=>{
        await db.collection("DeveloperBankDetailCollection").add(bank_data).then(async (bank_doc)=>{
            element.bank_data_id = bank_doc.id;
            await db.collection("DeveloperCollection").doc(doc.id).update(element);
        })
    });
    //console.log()

})