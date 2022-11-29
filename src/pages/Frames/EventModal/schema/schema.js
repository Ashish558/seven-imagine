import * as yup from 'yup';

export const sessionSchema = yup.object().shape({
   studentName: yup.string().required('This field is required'),
   tutorName: yup.string().required('This field is required'),
   studentId: yup.string().required('This field is required'),
   tutorId: yup.string().required('This field is required'),
   
   date: yup.date().required('This field is required'),
   timeZone: yup.string().required('This field is required'),
   recurring: yup.boolean(),
  
});

