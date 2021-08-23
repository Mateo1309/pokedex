import { Paper, Typography, Slide } from '@material-ui/core'
import React from 'react'
import loadingImg from '../../assets/loading.gif'

const LoadingIndicator = ({ loading }) => {
    return (
        <Slide timeout={{ exit: 1200, appear: 500 }} direction="left" in={loading} mountOnEnter unmountOnExit>
            <Paper elevation={5} className="loading-indicator flex items-center">
                <img alt="loading" src={loadingImg} className="fit-cover" width={80} height={80} />
                <Typography variant="h5" color="textSecondary" sx={{ padding: 2, letterSpacing: 1, marginLeft: 2, marginRight: 2 }}>{"Cargando..."}</Typography>
            </Paper>
        </Slide>
    )
}

export default LoadingIndicator
