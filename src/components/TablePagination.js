import React, { useContext, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import { DataCtx } from '../DataContext/DataContext'

const TablePagination = ({ active, setActive, pages }) => {
    const { data } = useContext(DataCtx)


    // let no_of_items = data.length
    // let no_of_items_per_pages = 2
    // let pages = Math.ceil(no_of_items / no_of_items_per_pages)
    // console.log(no_of_items, no_of_items_per_pages, pages)
    // let active = 2;
    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination>
            {items}
        </Pagination>
    )
}

export default TablePagination