
function isEmail(val) {
   let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (!regEmail.test(val)) {
      return 'Invalid Email';
   }
}

export const validateSignup = (values) => {
   const { firstName, lastName, email, phone } = values
   if (firstName.trim() === '') return { data: 'firstName', message: 'Fill First Name' }
   if (lastName.trim() === '') return { data: 'lastName', message: 'Fill Last Name' }
   if (email.trim() === '') return { data: 'email', message: 'Fill email' }
   if (!isEmail(email)) return { data: 'email', message: 'Please enter valid email' }
   return { data: true, message: 'none' }
}