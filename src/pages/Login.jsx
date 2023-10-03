import React from 'react'
import Grid from '@mui/material/Grid';

const Login = () => {
  return (
    <>
      <Grid className='login_container'  container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <h3>xs=8</h3>
        </Grid>
      </Grid>
    </>
  )
}

export default Login