import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import DataGrid from './DataGrid'
import MenuGame from './MenuGame'

export default function Content () {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography component='div' style={{ height: '90vh' }}>
          <MenuGame />
          <DataGrid />
        </Typography>
      </Container>
    </React.Fragment>
  )
}
