import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Menu = () => {
  return (
    <>
      <Container className='border'>
        <div style={{ height: "12rem" }} className="d-flex justify-content-center align-content-center flex-wrap">
          <h1>GESTION DE MEDIAS</h1>
          <p className="lead">Constrol de stock, gestion de despachos y despostes de medias reses bovinas para La Tradición
            Carnicerías</p>
          <p> Clickee la opción en la que desea trabajar y se desplegarán las distintas actividades para cada opción
          </p>
        </div>
        <hr className="my-4" />
        <div style={{ height: "20rem" }} className="d-flex align-items-center justify-content-center">
          <DropdownButton title="MEDIAS" size="lg" className="m-1" >
            <Dropdown.Item href="./medias/new" >Nuevo ingreso</Dropdown.Item>
            <Dropdown.Item eventKey="2">Medias ingresadas</Dropdown.Item>
          </DropdownButton>
          <DropdownButton title="DESPOSTE" size="lg" className="m-1" >
            <Dropdown.Item eventKey="1">Nuevo desposte</Dropdown.Item>
            <Dropdown.Item eventKey="2">Grupos ingresados</Dropdown.Item>
          </DropdownButton>
          <DropdownButton title="GRUPOS DE CORTE" size="lg" className="m-1" >
            <Dropdown.Item eventKey="1">Nuevo grupo</Dropdown.Item>
            <Dropdown.Item eventKey="2">Listado de grupos</Dropdown.Item>
          </DropdownButton>
          <DropdownButton title="SUCURSALES" size="lg" className="m-1" >
            <Dropdown.Item eventKey="1">Nueva sucursal</Dropdown.Item>
            <Dropdown.Item eventKey="2">Listado de sucursales</Dropdown.Item>
          </DropdownButton>
          <DropdownButton title="STOCK" size="lg" className="m-1" >
            <Dropdown.Item eventKey="1">Control de stock</Dropdown.Item>
            {/* <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item> */}
          </DropdownButton>
          <DropdownButton title="DESPACHOS" size="lg" className="m-1" >
            <Dropdown.Item eventKey="1">Nuevo despacho</Dropdown.Item>
            <Dropdown.Item eventKey="2">Historial de despacho</Dropdown.Item>
          </DropdownButton>
          
          
        </div>

      </Container>
    </>
  )
}

export default Menu