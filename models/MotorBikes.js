const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    gear: {type:String, required:true, default:'automatic'},
    year:{type:Number, required:true},
    imgS:[String],
    engineCapacity:{type:Number},
    consumption:{type:Number},
    volumeGas:{type:Number, min:1, max:15},
    priceDay:{type:Number, required:true},
    priceWeek:{type:Number},
    priceMonth:{type:Number},
    helmet:{type:Number, default:1, min:0, max:3},
    deposit:{type:Number, default:100},
    specifications:{type:String, required:true},
    date: {type:Date, default:Date.now},
    views: {type:Number, default: 0},
    status:{type:Boolean, required:true, default:false},
    phone:{type:Number, required:true},
    owner: {type: Types.ObjectId, ref:'user'}
})

module.exports = model('Bike', schema)