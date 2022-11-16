import TextField from '@mui/material/TextField';
import { Controller, Control, Path } from 'react-hook-form';

interface EmailProps<T> {
  control: Control<T>;
  name: Path<T>;
  error?: string;
}

export const EMAIL_REGEXP =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // eslint-disable-line


export function EmailField<T>({
  control,
  name,
  error,
}: EmailProps<T>): JSX.Element {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          label="Email"
          error={Boolean(error)}
          helperText={error}
          id="outlined-start-adornment"
          sx={{ mt: 8, mb: 2, width: '70%' }}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  );
}

export default EmailField;
