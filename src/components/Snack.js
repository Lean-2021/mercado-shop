import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const Snack =(props)=>{ //mensaje Snackbar de agregar unidades al carrito
    
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

  return (
    <Stack spacing={2}>
      <Snackbar open={props.mostrar} autoHideDuration={props.time} onClose={props.ocultar}>
        <Alert onClose={props.ocultar} severity={props.color} sx={{ width: '100%' }}>
          <p>{props.text}</p>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
