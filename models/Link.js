const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    from: {type: String, required: true},               //Url from
    to: {type: String, required: true, unique:true},    //Url to
    code: {type:String, required:true, unique: true},   //Code
    date: {type:Date, default:Date.now},                //Date of create
    clicks: {type:Number, default: 0},                  //Count of clicks
    owner: {type: Types.ObjectId, ref:'user'}           //Connect with schema of User
})

module.exports = model('Link', schema)