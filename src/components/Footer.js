import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export default function Footer () {
  return (
    <AppBar position='sticky' color='primary'>
      <Container maxWidth='md'>
        <Toolbar>
          <Typography variant='body1' color='inherit'>
            © 2021 - Daniel Rivas
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
