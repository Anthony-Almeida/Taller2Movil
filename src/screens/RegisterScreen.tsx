import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constantsColor';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';


interface FormRegister {
  email: string;
  password: string;
  nombre:string;
  Apellido:string;
  pais:string;
}

export const RegisterScreen = () => {

  
  const [formRegister, setFormRegister] = useState<FormRegister>({
    email: '',
    password: '',
    nombre:'',
    Apellido:'',
    pais:'',
  });

  
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  
  const navigation = useNavigation();

  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  }

  
  const handleSignUp = () => {
    console.log(formRegister);
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Regístrate' />
      <BodyComponent>
        <View>
          <Text
            style={styles.titleBody}>
            Unete a nuestra comunidad de videojugadores a nivel mundial.
          </Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponent
            placeholder='Correo'
            handleSetValues={handleSetValues}
            name='email' />
             <InputComponent
            placeholder='Nombre'
            handleSetValues={handleSetValues}
            name='Nombre' />
             <InputComponent
            placeholder='Apellido'
            handleSetValues={handleSetValues}
            name='Apellido' />
             <InputComponent
            placeholder='Pais'
            handleSetValues={handleSetValues}
            name='pais' />
          <InputComponent
            placeholder='Contraseña'
            handleSetValues={handleSetValues}
            name='password'
            isPassword={hiddenPassword}
            hasIcon={true}
            actionIcon={() => setHiddenPassword(!hiddenPassword)} />
        </View>
        <ButtonComponent textButton='Registrar' actionButton={handleSignUp} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirection}>
            Ya tienes una cuenta? Iniciar sesión ahora
          </Text>
        </TouchableOpacity>
        <Text style={styles.avisoRegistro}>
          Compra de una manera totalmente diferente, obteniendo beneficos exclusivos para usuarios registrados.
          </Text>
      </BodyComponent>
    </View>
  )
}
