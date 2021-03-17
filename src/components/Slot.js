import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    '& > *': {
      marginLeft: theme.spacing(20),
      marginRight: theme.spacing(20),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  }
}))

export default function Slot (props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper style={{ padding: 11, fontSize: '2em', textAlign: 'center' }} elevation={3}>
        {props.number}
      </Paper>
    </div>
  )
}
