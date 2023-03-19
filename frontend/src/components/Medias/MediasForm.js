import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../../style/Medias.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { TrashFill } from 'react-bootstrap-icons';

const initialMediaState = {
  barcode: "",
  mediacode: "",
  kg: "",
  troop: ""
}


const MediaForm = () => {
  const [media, setMedia] = useState(initialMediaState)
  const [medias, setMedias] = useState([])

  const handleChange = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    console.log({ inputName, inputValue })
    setMedia({ ...media, [inputName]: inputValue })
  }

  const handleAddItemMedia = async (e) => {
    try {
      const newMedias = [media, ...medias]
      setMedias(newMedias)
      setMedia(initialMediaState)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <Container>
      <div style={{ width: '50%' }} className="mx-auto" >
        <h1 className='text-center'>INGRESO DE MEDIAS</h1>
        <Form className='form-control'>
          <Form.Group className="mb-3" controlId="formGroupBarcode" >
            <Form.Label>Codigo de barra:</Form.Label>
            <Form.Control type="text" placeholder="Codigo de barra" name="barcode" value={media.barcode} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMediacode">
            <Form.Label>Codigo de la media:</Form.Label>
            <Form.Control type="number" placeholder="Codigo de la media" name="mediacode" value={media.mediacode} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupKg">
            <Form.Label>Peso:</Form.Label>
            <Form.Control type="number" placeholder="Peso" name="kg" value={media.kg} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupTroop">
            <Form.Label>Tropa:</Form.Label>
            <Form.Control type="number" placeholder="Numero de tropa" name="troop" value={media.troop} onChange={handleChange} />
          </Form.Group>
          <div className='text-center'>
            <Button variant="primary" size="lg" className='text-center' onClick={handleAddItemMedia}>
              Ingresar
            </Button>
          </div>
        </Form>

      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>COD BARRA</th>
            <th>COD MEDIA</th>
            <th>PESO</th>
            <th>TROPA</th>
            <th>BORRAR</th>
          </tr>
        </thead>
        <tbody>
          {medias.length ?
            (medias.map((value) => {
              return (
                <tr key={value.index}>
                  <td key={value.barcode}>{value.barcode}</td>
                  <td key={value.mediacode}>{value.mediacode}</td>
                  <td key={value.kg}>{value.kg}</td>
                  <td key={value.troop}>{value.troop}</td>
                  <TrashFill size={30}  />
                </tr>
              )
            }))
            : (
              <tr>
                <td></td>
              </tr>
            )}

        </tbody>
      </Table>



    </Container>

  )
}

export default MediaForm
