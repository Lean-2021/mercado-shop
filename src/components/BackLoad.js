import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function BackLoad(props) {

  return (
    <div>
      <Backdrop
        sx={{ color: '#F7E00A',backgroundColor:'grey',transform:'scale(1.5)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.open}    
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
