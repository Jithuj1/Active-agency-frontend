import React from 'react'

import ResponsiveAppBar from '../components/AppBar'
import Table from '../components/Table'

function HomePage() {
  return (
    <div>
        <ResponsiveAppBar />
        <div style={{margin:"5rem"}}>
            <Table />
        </div>
     
    </div>
  )
}

export default HomePage