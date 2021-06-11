const restful = require('node-restful')
const mongoose = restful.mongoose

var Schema = mongoose.Schema;

var genreSchema = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 100}
  }
);


//Export model
module.exports = restful.model('Genre', genreSchema);