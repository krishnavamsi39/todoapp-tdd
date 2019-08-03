import {render,cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import TodoFooter from './index'
import TodoStore from '../../../../Store/TodoStore'
import todoFilterTypes from '../../../../Constants/todoFilter'
afterEach(cleanup)

describe('test for todofooter component',()=>{
    let todoStore
    beforeEach(()=>{
        todoStore=new TodoStore()
            jest.spyOn(todoStore,'changeFilter')       
    })
    it('should test if filter value is changing',()=>{
        const {getByTestId}=render(<TodoFooter todoStore={todoStore}/>)
        const allbutton=getByTestId(todoFilterTypes.all)
        fireEvent.click(allbutton)
        expect(todoStore.changeFilter).toHaveBeenCalledWith(todoFilterTypes.all)
    })
    it('should test if filter value is changing to completed',()=>{
        const {getByTestId}=render(<TodoFooter todoStore={todoStore}/>)
        const completedbutton=getByTestId(todoFilterTypes.completed)
        fireEvent.click(completedbutton)
        expect(todoStore.changeFilter).toHaveBeenCalledWith(todoFilterTypes.completed)
    })
    it('should test if filter value is changing to active',()=>{
        const {getByTestId}=render(<TodoFooter todoStore={todoStore}/>)
        const activebutton=getByTestId(todoFilterTypes.active)
        fireEvent.click(activebutton)
        expect(todoStore.changeFilter).toHaveBeenCalledWith(todoFilterTypes.active)
       
    })
})