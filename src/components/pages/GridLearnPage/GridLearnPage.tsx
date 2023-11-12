import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { Container, Divider } from '@mui/material';

type GridLearnPageProps = {
  //
};

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

const GridLearnPage: React.FC<any> = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Box sx={{ flexGrow: 1, mb: 2 }}>
          <Grid container columns={16} spacing={2}>
            <Grid xs={16}>
              <Item>Header ( xs=16 )</Item>
            </Grid>
            <Grid xs={8}>
              <Item>First Name ( xs=8 )</Item>
            </Grid>
            <Grid xs={8}>
              <Item>Last Name ( xs=8 )</Item>
            </Grid>
            <Grid xs={16}>
              <Item>Submit ( xs=16 )</Item>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 5, md: 10 }}>
            <Grid xs={6}>
              <Item>1</Item>
            </Grid>
            <Grid xs={6}>
              <Item>2</Item>
            </Grid>
            <Grid xs={6}>
              <Item>3</Item>
            </Grid>
            <Grid xs={6}>
              <Item>4</Item>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid xs={4} sm={4} key={index}>
                <Item>{index + 1}</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default GridLearnPage;
