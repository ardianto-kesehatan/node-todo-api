var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
    }, completed :{
type:Boolean,
default:false
    }, completedAt:{
type:Number,
default:null
    }

});

 /* var newTodo = new Todo({
    text: 'Kueweh Boluw'
});

newTodo.save().then((doc)=>{
    console.log('Save todo', doc);},(e)=>{

    console.log('Unable to save Todo')

}); 

var otherTodo = new Todo({
text: 'Something to do'
})

otherTodo.save().then((doc)=>{
console.log(JSON.stringify(doc,undefined,2))},
(e)=>{
console.log();
}); */


module.exports = {Todo}