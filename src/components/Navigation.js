import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand className='text-light' >List App</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation