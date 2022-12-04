import * as Yup from 'yup';

const email = Yup.string().email('El correo es inválido');
const contraseña = Yup.string().min(6, 'Contraseña mínimo de 6 digitos');

const forgotSchema = Yup.object().shape({
  email: email.required('Debe ingresar un correo electrónico'),
});

const changePasswordSchema = Yup.object().shape({
  contraseña1: contraseña.required('Campo requerido'),
  contraseña2: contraseña.required('Campo requerido'),
});

export { forgotSchema, changePasswordSchema };
