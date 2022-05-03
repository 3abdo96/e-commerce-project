import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field: { ref, ...field } }) => (
          <TextField
            fullWidth
            name={name}
            {...field}
            inputRef={ref}
            label={label}
            required
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
