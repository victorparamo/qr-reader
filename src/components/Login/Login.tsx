import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { EMAIL_REGEXP, EmailField } from 'components/EmailField';
import PasswordField from 'components/PasswordField';

import { Container, Card, Button } from './styles';

export interface FormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required('El email es requerido.')
      .test('email', 'El formato del email es incorrecto', (value = '') =>
        Boolean(value.match(EMAIL_REGEXP))
      ),
    password: yup.string().required('El password es requerido.'),
  })
  .required();

const Login = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = () => console.log('submit');

  return (
    <Container>
      <Card elevation={12}>
        <Typography variant="h3" gutterBottom>
          Iniciar sesión
        </Typography>
        <Typography gutterBottom>Ingresa tus credenciales</Typography>
        <EmailField
          error={errors.email?.message || ''}
          name="email"
          control={control}
        />
        <PasswordField
          error={errors.password?.message || ''}
          name="password"
          control={control}
        />

        <Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>
          Iniciar sesion
        </Button>
      </Card>
    </Container>
  );
};

export default Login;
