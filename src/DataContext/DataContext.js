import React, { createContext, useReducer } from 'react'


export const DataCtx = createContext({
    data: [],
    updateDataValues: null

})

function dataReducer(state, action) {
    console.log(state, action)
    switch (action.type) {
        case 'ADD':
            return { ...state, data: [action.payload, ...state.data] }
        case 'LOAD_DATA':
            return { ...state, data: action.payload }

        case 'UPDATE':
            const updatedArr = state.data.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
            return { ...state, data: updatedArr }

        case 'UPDATE_DATA_FIELDS':
            return { ...state, updateDataValues: action.payload }
        case 'CLEAR_UPDATE_DATA_FIELDS':
            return { ...state, updateDataValues: null }

        case 'DELETE':
            const filteredData = state.data.filter(item => item.id !== action.payload)
            return { ...state, data: filteredData }


        default:
            return state;
    }
}

function DataContext(props) {
    const [state, dispatch] = useReducer(dataReducer, {
        data: [],
        updateDataValues: null
    })
    function addData(data) {
        dispatch({
            type: 'ADD',
            payload: data
        })
    }
    function fetchInitailData(data) {
        dispatch({
            type: 'LOAD_DATA',
            payload: data
        })
    }
    function updateData(data) {
        dispatch({
            type: 'UPDATE',
            payload: data
        })
    }
    function updateDataFields(data) {
        if (!data) {
            dispatch({
                type: 'CLEAR_UPDATE_DATA_FIELDS',

            })
        }
        dispatch({
            type: 'UPDATE_DATA_FIELDS',
            payload: data
        })
    }
    function deleteData(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    return <DataCtx.Provider
        value={{
            data: state.data,
            updateDataValues: state.updateDataValues,
            addData,
            updateData,
            deleteData,
            fetchInitailData,
            updateDataFields


        }}
    >
        {props.children}
    </DataCtx.Provider>

}

export default DataContext