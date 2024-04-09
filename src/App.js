
import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import ListData from './components/ListData';
import Navigation from './components/Navigation';
import { useContext, useEffect } from 'react';
import InputData from './components/InputData';
import axios from 'axios'
import { DataCtx } from './DataContext/DataContext';


function App() {
  const { fetchInitailData } = useContext(DataCtx)
  useEffect(() => {
    async function loadInitialData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = response.data
        fetchInitailData(data)
      } catch (error) {
        console.log(error)
      }

    }
    loadInitialData()

  }, [])

  console.log('running app.js')
  return (
    <div className="App">
      <Navigation />
      <Container  >
        <Row className='justify-content-center pt-4'>
          <Col md={8}>
            <InputData />
            <ListData />

          </Col>
        </Row>
      </Container>


    </div >
  );
}

export default App;
