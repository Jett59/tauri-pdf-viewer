import { Typography } from '@mui/material';
import { Box, Box as Container } from '@mui/system';
import * as React from 'react';

function App() {
  return (
    <Container paddingLeft="10px" paddingRight="10px" paddingTop="30px" paddingBottom="40px">
      <Box>
        <Typography component="h1">PDF Viewwer</Typography>
      </Box>
    </Container>
  );
}

export default App;
