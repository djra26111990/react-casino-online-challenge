import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import AuthContext from '../context/authentication/authContext'

export default function LoginModal () {
  const authContext = React.useContext(AuthContext)
  const {
    loginUser,
    authenticated,
    logoutUser,
    userAuthenticated
  } = authContext
  const [userAuth, setUserAuth] = React.useState({
    user: ''
  })
  const [auth, setIsAuth] = React.useState(false)

  const [open, setOpen] = React.useState(false)
  const [openLogOut, setOpenLogOut] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickOpenLogOut = () => {
    setOpenLogOut(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseLogOut = () => {
    setOpenLogOut(false)
  }

  const handleChange = (e) => {
    setUserAuth({
      ...userAuth,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    loginUser({
      userAuth
    })
    setIsAuth(authenticated)
    setOpen(false)
  }

  const handleLogout = () => {
    setUserAuth({
      user: null,
      authenticated: null
    })
    logoutUser({
      userAuth
    })
  }

  const ModalLogut = () => {
    return (
      <>
        <Button color='inherit' onClick={handleClickOpen}>
          Login
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Username / Nickname / Name
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login in the app, please enter your name or nickname here.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Nickname'
              type='text'
              name='user'
              fullWidth
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleClick} color='primary'>
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }

  const ModalLoginAuth = () => {
    return (
      <>
        <Button color='inherit' onClick={handleClickOpenLogOut}>
          {userAuth.user}
        </Button>
        <Dialog
          open={openLogOut}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Hi, {userAuth.user}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To logout, please press the LogOut Button
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogOut} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleLogout} color='primary'>
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }

  return <div>{authenticated !== true ? <ModalLogut /> : <ModalLoginAuth />}</div>
}
