

import TodoStore from  './TodoStore'


describe('TodoStore functionality ',() =>{
  let todoStore
  beforeEach(()=>{
     todoStore=new TodoStore()
   todoStore.addTodo("react")
   todoStore.addTodo("mobx")
   todoStore.addTodo("styled-components")
  })

   it('add a todo',()=>{
        expect(todoStore.todos.length).toBe(3)
        todoStore.addTodo("test driven development")
        expect(todoStore.todos.length).toBe(4)
       expect(todoStore.todos[3].text).toBe("test driven development")
         
    })
  it('delete a todo',()=>{
      expect(todoStore.todos.length).toBe(3)
      todoStore.deleteTodo(1)
      expect(todoStore.todos.length).toBe(2)
     
      todoStore.deleteTodo(2)
      expect(todoStore.todos.length).toBe(1)
  })
  it('clear completed',()=>{
    expect(todoStore.todos.length).toBe(3)
    todoStore.todos[0].isCompleted=true 
    todoStore.clearCompleted()
    expect(todoStore.todos.length).toBe(2)
    expect(todoStore.todos[0].text).toBe("mobx")
    todoStore.todos[1].isCompleted=true
    todoStore.clearCompleted()
    expect(todoStore.todos[0].text).toBe("mobx")

  })
  it('update Filter',()=>{
   todoStore.changeFilter("all")
   todoStore.changeFilter("active")
   expect(todoStore.currentFilter).toBe("active")

   todoStore.changeFilter("completed")
   expect(todoStore.currentFilter).toBe("completed")



  })
})
