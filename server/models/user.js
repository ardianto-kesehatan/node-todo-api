var mongoose = require('mongoose');

var User = mongoose.model('elseTodo', {
    email :{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }

});
/* 
var user = new User({ email:'ayam@denlapo.com'

});

user.save().then((doc)=> {
console.log('User saved');
}, (e)=>{
    console.log('Unable to save User',e)
}) 
 */
module.exports = {User};