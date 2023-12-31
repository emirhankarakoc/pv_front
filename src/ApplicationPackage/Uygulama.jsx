import React, { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar';
import { Grid } from 'semantic-ui-react';
import LeftTable from './LeftTable';
import background from './assets/image1.png'
import AltNavbar from './AltNavbar';


export default function Uygulama() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', fontFamily: 'Inter, Arial, sans-serif', fontWeight: '600' }}>

    <TopNavbar/>
<AltNavbar/>
    <LeftTable/>
    </div>
  )
}
