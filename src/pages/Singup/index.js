import React from 'react';
import Page from '../../components/Page';
import { useForm } from 'react-hook-form';
import { FormControlLabel, FormControlInput, Button, FormControl, FormControlAction } from '../../globalStyles';
import { Theme } from '../../themes/theme';

const Signup = () => {

    //const [ nombre, setNombre ] = useState('');

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: 'onChange'});
    // mode: onChange

    const onSubmitLogin = (data) => {
      console.log('data', data);
      reset();
      //setNombre('');
    }

    return (
      <Page>
        <h1>Registro</h1>

        <form onSubmit={handleSubmit(onSubmitLogin)}>

          <FormControl>
            <FormControlLabel htmlFor='nombre'>Nombre</FormControlLabel>
            <FormControlInput
              type="text"
              placeholder='Nombre'
              id='nombre'
              {...register('nombre', { required: true })}
              //onChange={ (e) => setNombre(e.target.value) }
            />
            {errors.nombre?.type === "required" &&
                (<span>Este campo es obligatorio</span>)
              }
          </FormControl>

          <FormControl>
            <FormControlLabel htmlFor='email'>Email</FormControlLabel>
              <FormControlInput
                type="email"
                placeholder='Email'
                id='email'
                {...register('email', { required: true, pattern: /\S+@\S+\S+./ })}
              />
              {errors.email?.type === "required" &&
                (<span>Este campo es obligatorio</span>)
              }
              {errors.email?.type === "pattern" &&
                (<span>Ingrese un correo valido</span>)
              }
          </FormControl>

          <FormControl>
            <FormControlLabel htmlFor='telefono'>Telefono</FormControlLabel>
              <FormControlInput
                type="number"
                placeholder='Telefono'
                id='telefono'
                {...register('telefono', { required: true})}
              />
              {errors.telefono?.type === "required" &&
                (<span>Este campo es obligatorio</span>)
              }
          </FormControl>

          <FormControl>
            <FormControlLabel htmlFor='password'>Password</FormControlLabel>
              <FormControlInput
                type="password"
                placeholder='Password'
                id='password'
                {...register('password', { required: true })}
              />
              {errors.password?.type === "required" &&
                (<span>El password es obligatorio</span>)
              }
          </FormControl>

          <FormControl>
            <FormControlLabel>Avatar</FormControlLabel>
              <FormControlInput
                accept='image/jpeg'
                type="file"
                {...register('file', { required: true})}
              />
              {errors.file?.type === "required" &&
                (<span>Este campo es obligatorio</span>)
              }
          </FormControl>

          <FormControlAction>
            <Button bgColor={Theme.secondary}
              disabled={!isValid}
              type="submit"
            >Registrarme
            </Button>
          </FormControlAction>
          {isValid ? 'es valido' : 'no es valido'}
        </form>
      </Page>
  )
}
export default Signup