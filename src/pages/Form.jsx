import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  FormHelperText,
} from '@mui/material';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BreedType from '../components/BreedType';
import PetTypeForm from '../components/PetTypeForm';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { SelectContext } from '../context/selectContext';
import swal from 'sweetalert';
import { handleAdopt, handleAway } from '../db/IndexedDb';

const Forms = () => {
  const { multiselect, selected, setselected, setMultiSelect } =
    useContext(SelectContext);

  let breedArray = multiselect?.map((breed) => breed?.value);

  let petType = selected?.value;

  let navigate = useNavigate();
  let location = useLocation();
  const path = location.pathname.split('/')[1];
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone: '',
    },
    validationSchema: yup.object({
      fullname: yup
        .string('Enter your name')
        .max(25, 'Must be 25 characters or less')
        .required('* Required'),

      email: yup
        .string('Enter your email')
        .required('* Required')
        .email('Enter a vaild Email'),

      phone: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('* Required'),
    }),
    onSubmit: (values) => {
      const formDetails = {
        ...values,
        petType,
        breed: breedArray,
      };

      if (path === 'adopt') {
        handleAdopt(formDetails);
      } else {
        handleAway(formDetails);
      }
      formik.resetForm();
      setselected(null);
      setMultiSelect([]);
      swal({
        title: 'Thank you',
        text: 'Your request has been received',
        icon: 'success',
        button: 'Aww yiss!',
      });

      navigate('/');
    },
  });
  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ p: 5, m: 3, background: '#e2f4fc' }}>
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' fontWeight={700}>
            {path === 'adopt' ? 'Adopt a pet' : 'Give Away'}
          </Typography>
          <Typography
            variant='body1'
            fontWeight={700}
            lineHeight='36px'
            letterSpacing='0.5px'
            mt={2}
            mb={2}>
            {path === 'adopt'
              ? 'What pet do you want to adopt ?'
              : 'What pet do you want to give away ?'}
          </Typography>
          <label style={{ fontSize: '14px' }} htmlFor='demo-simple-select'>
            Pet type<span style={{ color: 'red' }}> * </span>
          </label>
          <PetTypeForm name='typepet' />
          <label style={{ fontSize: '14px' }}>
            Breed<span style={{ color: 'red' }}> * </span>
          </label>
          <BreedType />
          <Typography
            variant='body1'
            fontWeight={700}
            lineHeight='36px'
            letterSpacing='0.5px'
            mt={2}
            mb={2}>
            Please fill in your details
          </Typography>
          <label style={{ fontSize: '14px' }} htmlFor='fullname'>
            Full Name<span style={{ color: 'red' }}> * </span>
          </label>
          <input
            name='fullname'
            value={formik.values.fullname}
            id='fullname'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Full Name'
            className='inputbox'
          />
          <FormHelperText sx={{ color: 'red' }}>
            {formik.touched.fullname && formik.errors.fullname}
          </FormHelperText>
          <label style={{ fontSize: '14px' }} htmlFor='email'>
            Email<span style={{ color: 'red' }}> * </span>
          </label>
          <input
            name='email'
            value={formik.values.email}
            id='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Email'
            className='inputbox'
          />
          <FormHelperText sx={{ color: 'red' }}>
            {formik.touched.email && formik.errors.email}
          </FormHelperText>
          <label style={{ fontSize: '14px' }} htmlFor='phone'>
            Phone<span style={{ color: 'red' }}> * </span>
          </label>
          <input
            name='phone'
            id='phone'
            value={formik.values.phone}
            type='number'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Phone Number'
            className='inputbox'
          />
          <FormHelperText sx={{ color: 'red' }}>
            {formik.touched.phone && formik.errors.phone}
          </FormHelperText>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              disabled={Object.keys(formik.errors)?.length !== 0}
              type='submit'
              variant='contained'
              color='primary'
              sx={{
                color: '#fff',
              }}>
              {path === 'adopt'
                ? 'REQUEST FOR ADOPTION'
                : 'REQUEST FOR GIVE AWAY'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Forms;
