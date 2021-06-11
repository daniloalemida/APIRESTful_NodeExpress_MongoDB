const restful = require('node-restful')
const mongoose = restful.mongoose


var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

//Export model
module.exports = restful.model('Author', AuthorSchema);

