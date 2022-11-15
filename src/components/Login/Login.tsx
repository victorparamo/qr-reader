import { ChangeEvent, MouseEvent, useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Container, Card, Button } from './styles';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login = (): JSX.Element => {
  const [state, setState] = useState<State>(() => ({
    email: '',
    password: '',
    showPassword: false,
  }));

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Card elevation={12}>
        <Typography variant="h3" gutterBottom>
          Iniciar sesión
        </Typography>
        <Typography gutterBottom>Ingresa tus credenciales</Typography>
        <TextField
          label="Email"
          id="outlined-start-adornment"
          sx={{ mt: 8, mb: 2, width: '70%' }}
        />
        <FormControl sx={{ mb: 8, width: '70%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" fullWidth>
          Iniciar sesion
        </Button>
      </Card>
    </Container>
  );
};

export default Login;
