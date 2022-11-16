import { MouseEvent, useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Controller, Control, Path } from 'react-hook-form';

interface PasswordProps<T> {
  control: Control<T>;
  name: Path<T>;
  error?: string;
}

function PasswordField<T>(props: PasswordProps<T>): JSX.Element {
  const { control, name, error } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((value) => !value);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const passwordError = Boolean(error);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          error={passwordError}
          sx={{ mb: 3, width: '70%' }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {passwordError && (
            <FormHelperText id="component-error-text">{error}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

export default PasswordField;
