const mongoose= require ('mongoose')


/*
    This function creates a schema.
    A schema is nothing but it defines what the structure
    of particular collection should be
*/
const personSchema = new mongoose.Schema({
    firstName:{
    type:String,
    required:true
   },


   lastName:{
      type:String,
      required:true
     
   },

email:{
    type:String,
    required:true 
},

password:{
    type:String,
    required:true 
},
confirmPassword:{
    type:String,
    required:true 
}


} ,{timestamps:true})


//Here we are creating a model and exporting the same
module.exports = mongoose.model('person', personSchema)