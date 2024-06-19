require('dotenv').config()
const model=require('./models/task');
const connectDB = require('./db/connectDB');
const mockdata=require('./data.json')
const sanitizeData = (data) => {
    return {
        id: data.id,
        date: data.date,
        sender: {
            firstName: data.sender ? data.sender.firstName : '',
            lastName: data.sender ? data.sender.lastName : ''
        },
        recipient: {
            firstName: data.recipient ? data.recipient.firstName : '',
            lastName: data.recipient ? data.recipient.lastName : '',
            email: data.recipient ? data.recipient.email : ''
        },
        Amount: data.Amount,
        CurrencyCd: data.CurrencyCd,
        Comments: data.Comments,
        status: data.status
    };
};
const sanitizedmockdata=mockdata.map(sanitizeData)
const startdata=async()=>{
try {
    await connectDB(process.env.MONGO_URI);
    await model.create(sanitizedmockdata);
} catch (error) {
     console.log(error);
}
}
console.log(mockdata)
startdata()