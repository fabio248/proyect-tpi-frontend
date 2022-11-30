import * as Yup from 'yup';

const email = Yup.string().email('El correo es inválido');

const forgotSchema = Yup.object().shape({
  email: email.required('Debe ingresar un correo electrónico'),
});

export { forgotSchema };
