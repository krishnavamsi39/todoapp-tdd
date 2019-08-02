import {observable,action,computed, get} from 'mobx'
import todoFilterTypes from '../Constants/todoFilter'
class TodoStore{
    @observable todos=[]
    @observable currentFilter=todoFilterTypes.all
    id=1
   @action addTodo(todoText){
        const obj={
            text:todoText,
            id:this.id,
            isCompleted:false
        }
        this.todos.push(obj)
        this.id+=1

    }
   @action deleteTodo(id){
        this.todos= this.todos.filter(obj => obj.id !== id)
    }
   @action clearCompleted(){
        this.todos=this.todos.filter(obj=>!obj.isCompleted)
    }
@action changeFilter(filter){
this.currentFilter=filter
}
@computed get
 itemsLeft(){
     let itemCount=0
     this.todos.map(obj=>{
         if(!obj.isCompleted){
            itemCount+=1
         }
     })
return itemCount
}
@computed get
filterTodo(){
    
    if(this.currentFilter===todoFilterTypes.all)
        return this.todos
    else if(this.currentFilter===todoFilterTypes.active)
        return this.todos.filter(obj=>!obj.isCompleted)
   else
     return this.todos.filter(obj=>obj.isCompleted)
}
}
export default TodoStore