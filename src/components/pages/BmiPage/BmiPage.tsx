import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

type BmiPageProps = {
  //
};

const BmiPage: React.FC<any> = () => {
  const initialDataForm = {
    firstName: '',
    lastName: '',
  };

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .max(25, 'We need less than 25 character.')
      .required('Please fill data in blank input.'),
    lastName: yup
      .string()
      .max(25, 'We need less than 25 character.')
      .required('Please fill data in blank input.'),
  });

  return (
    <>
      <Container sx={{ m: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 'Normal',
              mb: 2,
            }}
            color="GrayText"
          >
            BMI Calculator Formik
          </Typography>

          <Formik
            initialValues={initialDataForm}
            validationSchema={validationSchema}
            onSubmit={(values) =>
              console.log('Click Submit : ' + values.firstName + ' ' + values.lastName)
            }
          >
            {(formDatas) => (
              <form onSubmit={formDatas.handleSubmit}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  type="text"
                  value={formDatas.values.firstName}
                  onChange={formDatas.handleChange}
                  onBlur={formDatas.handleBlur}
                  error={formDatas.touched.firstName && Boolean(formDatas.errors.firstName)}
                  helperText={formDatas.touched.firstName && formDatas.errors.firstName}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                  value={formDatas.values.lastName}
                  onChange={formDatas.handleChange}
                  onBlur={formDatas.handleBlur}
                  error={formDatas.touched.lastName && Boolean(formDatas.errors.lastName)}
                  helperText={formDatas.touched.lastName && formDatas.errors.lastName}
                  sx={{ mb: 2 }}
                />

                <Button color="primary" variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};

export default BmiPage;
