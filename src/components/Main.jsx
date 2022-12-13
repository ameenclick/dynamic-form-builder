import React from 'react'
import { useParams } from 'react-router-dom';
import Activities from './Activities';
import { AppProvider } from '../Context';

export default function Main() {
    const { id } = useParams();
  return (
    <div>
      <React.StrictMode>
        <AppProvider>
          <Activities id={id}/>
        </AppProvider>
      </React.StrictMode>
    </div>
  )
}
