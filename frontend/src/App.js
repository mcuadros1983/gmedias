import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import GroupList from './components/Group/GroupList'
import GroupForm from './components/Group/GroupForm'
import LocationList from './components/Location/LocationList'
import LocationForm from './components/Location/LocationForm'
import MediaList from './components/Medias/MediasList'
import MediaForm from './components/Medias/MediasForm'
import OrderList from './components/Order/OrderList'
import OrderForm from './components/Order/OrderForm'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/medias/new' element={<MediaForm />} />
        <Route path='/medias' element={<MediaList />} />
        <Route path='/groups' element={<GroupList />} />
        <Route path='/groups/new' element={<GroupForm />} />
        <Route path='/locations' element={<LocationList />} />
        <Route path='/locations/new' element={<LocationForm />} />
        <Route path='/orders' element={<OrderList />} />
        <Route path='/orders/new' element={<OrderForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
