import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Page from '../../components/Page';
import { useUser } from '../../contexts/UserContext';
import { FormControlLabel, FormControlInput, Button, FormControl, FormControlAction } from '../../globalStyles';

const Login = () => {

  const { register, handleSubmit, reset, formState: { errors, isValid }} = useForm({mode: 'onChange'});
  // mode: onChange

  const { setAuth, setUserInfo } = useUser();
  const navigate = useNavigate();

  const onSubmitLogin = (data) => {
    console.log('data', data);
    // call request login //
    if(data.email === 'jarv1009@gmail.com' && data.password === 'sofia0725'){
      setAuth(true);
      setUserInfo({name: 'Jaiber Restrepo', email: 'jarv1009@gmail.com', phone: 3206644863});

      reset();
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } else {
      alert('Error en la autenticacion');
    }
  }

  return (
    <Page>
      <h1>Inicio Sesion</h1>

      <form onSubmit={handleSubmit(onSubmitLogin)}>

        <FormControl>
          <FormControlLabel htmlFor='email'>Email</FormControlLabel>
          <FormControlInput 
            type="email" 
            placeholder='Email' 
            id='email' 
            {...register('email', { required: true, pattern: /\S+@\S+\S+./ })} 
          />
          { errors.email?.type === "required" && 
            (<span>Este campo es obligatorio</span>)
          }
          { errors.email?.type === "pattern" && 
            (<span>Ingrese un correo valido</span>)
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
          { errors.password?.type === "required" && 
            (<span>El password es obligatorio</span>)
          }
        </FormControl>

        <FormControlAction>
          <Button
            disabled={!isValid}
            type="submit"
            >Ingresar
          </Button>
        </FormControlAction>
        { isValid ? '': 'no es valido'}
      </form>
    </Page>
  )
}

export default Login