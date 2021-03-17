import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slot from './Slot'

export default function MenuGame () {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      style={{
        paddingTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        Play Slot 1-3 Game!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle style={{ textAlign: 'center' }} id='form-dialog-title'>
          Let's begin the game and good luck!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Slot number={'7'} />
            <Slot number={'7'} />
            <Slot number={'7'} />
          </DialogContentText>
          <DialogContentText
            style={{ fontSize: '3em', padding: '1em', textAlign: 'center' }}
          >
            You Win!
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Debug (Make 777 slot)
          </Button>
          <Button onClick={handleClose} color='primary'>
            Spin
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
