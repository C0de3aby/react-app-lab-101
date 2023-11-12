import { Box, Button, Container, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/system/Unstable_Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
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
    gender: '',
    birthDate: null,
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
    gender: yup.string().required('Please fill data in blank input.'),
    birthDate: yup
      .date()
      .max(new Date(), "You can't be born in the future!")
      .required('Please fill data in blank input.'),
  });

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <Formik
          initialValues={initialDataForm}
          validationSchema={validationSchema}
          onSubmit={(values) =>
            console.log(
              'Click Submit : ' +
                values.firstName +
                ' ' +
                values.lastName +
                ' / ' +
                values.gender +
                ' / ' +
                values.birthDate,
            )
          }
        >
          {(formDatas) => (
            <form onSubmit={formDatas.handleSubmit}>
              <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
                <Grid container columns={16} rowSpacing={2} columnSpacing={{ xs: 2 }}>
                  <Grid xs={16}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 'Normal',
                      }}
                      color="GrayText"
                    >
                      BMI Calculator Formik
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
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
                    />
                  </Grid>
                  <Grid xs={8}>
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
                    />
                  </Grid>
                  <Grid xs={8}>
                    <FormControl
                      fullWidth
                      error={formDatas.touched.gender && Boolean(formDatas.errors.gender)}
                    >
                      <InputLabel id="gender-label">Gender</InputLabel>
                      <Select
                        labelId="gender-label"
                        id="gender"
                        name="gender"
                        value={formDatas.values.gender}
                        label="Gender"
                        onChange={formDatas.handleChange}
                        onBlur={formDatas.handleBlur}
                        error={formDatas.touched.gender && Boolean(formDatas.errors.gender)}
                      >
                        <MenuItem value={'1'}>Male</MenuItem>
                        <MenuItem value={'2'}>Female</MenuItem>
                      </Select>
                      <FormHelperText>
                        {formDatas.touched.gender && formDatas.errors.gender}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid xs={8}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Birth Date"
                        value={formDatas.values.birthDate}
                        onChange={(value) => formDatas.setFieldValue('birthDate', value)}
                        format="DD/MM/YYYY"
                        onError={(reason) => {
                          console.log('Date Error:', reason);
                        }}
                        views={['year', 'month', 'day']}
                        sx={{ width: '100%' }}
                        slotProps={{
                          textField: {
                            error:
                              formDatas.touched.birthDate && Boolean(formDatas.errors.birthDate),
                            helperText: formDatas.touched.birthDate && formDatas.errors.birthDate,
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid xs={16}>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default BmiPage;
