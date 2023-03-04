import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Grid, IconButton, InputAdornment, TextField,
} from '@mui/material';
import React from 'react';

function Input({
  name, placeholder, value, handleChange, half, autoFocus, type, handleShowPassword,
}) {
  return (
    <Grid item xs={half ? 6 : 12} sm={half ? 6 : 12} md={half ? 6 : 12} lg={half ? 6 : 12}>
      <TextField
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' || name === 'confirmPassword' || name === 'otp' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        } : null}
      />
    </Grid>
  );
}

export default Input;
