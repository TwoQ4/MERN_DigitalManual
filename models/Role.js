const { Schema, model, Types } = require('mongoose');

const roleSchema = new Schema({
    value: {type: String, unique: true, default: "student"}
    
});

module.exports = model('Role', roleSchema);