import React, { useContext, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { DataCtx } from '../DataContext/DataContext'
import axios from 'axios'

const InputData = () => {
    const { addData, data, updateDataValues, updateDataFields, updateData } = useContext(DataCtx)
    const [input, setInput] = useState({ id: undefined, title: '', body: '' })
    useEffect(() => {
        if (updateDataValues) {
            setInput(updateDataValues)
        }
    }, [updateDataValues])



    function handleTitleChange(e) {
        setInput({
            ...input,
            title: e.target.value,

        })
    }
    function handleBodyChange(e) {
        setInput({
            ...input,
            body: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (updateDataValues) {
            //call the api
            await axios.patch(`https://jsonplaceholder.typicode.com/posts/${input.id}`, input)
            // update the data
            updateData(input)
            //clear data
            setInput({ id: undefined, title: '', body: '' })
            updateDataFields(null)
            return
        }
        // add the data
        await axios.post(`https://jsonplaceholder.typicode.com/posts/`, input)
        const ID = Math.round(100 + Math.random() * 10)
        addData({ ...input, id: ID })
        console.log(input)
        //clear the fields after operating
        setInput({ id: undefined, title: '', body: '' })
    }
    console.log(updateDataValues)
    return (
        <Form className='d-flex flex-column gap-3 mb-4' onSubmit={handleSubmit}>
            <Form.Control type='text' placeholder='Add title'
                value={input.title}
                onChange={handleTitleChange} />
            <Form.Control as="textarea" type='text' placeholder='Add Description' value={input.body} onChange={handleBodyChange} />
            <Button variant='outline-primary' type='submit'  >
                {updateDataValues ? 'Save Changes' : 'Add'}
            </Button>
        </Form>
    )
}

export default InputData