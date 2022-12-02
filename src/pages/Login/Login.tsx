import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@mui/material/Typography';
import { useForm, UseFormSetError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import passwordLogin from 'api/passwordLogin';
import { EMAIL_REGEXP, EmailField } from 'components/EmailField';
import PasswordField from 'components/PasswordField';

import { Container, Card, Button, Alert } from './styles';
import { FormData } from './types';

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError: setFieldError,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit =
    (setFieldError: UseFormSetError<FormData>) =>
    async (formValues: FormData): Promise<void> => {
      setLoading(true);
      try {
        await passwordLogin(formValues);
        setLoading(false);
        navigate('../dashboard');
      } catch (e: any) {
        setLoading(false);
        setError(true);
        setFieldError(
          'password',
          { message: 'Intenta una vez mas' },
          { shouldFocus: true }
        );
      }
    };

  const handleCloseError = (): void => setError(false);

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

        <Button
          disabled={!isValid}
          variant="contained"
          loading={loading}
          fullWidth
          onClick={handleSubmit(onSubmit(setFieldError))}
        >
          Iniciar sesion
        </Button>
      </Card>
      {error && (
        <Alert severity="error" onClose={handleCloseError}>
          Usuario No Valido
        </Alert>
      )}
    </Container>
  );
};

export default Login;
