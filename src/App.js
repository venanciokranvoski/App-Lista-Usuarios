import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserForm from './View/UserForm.js';
import UserList from './View/UserList.js';
import { Button, Icon } from 'react-native-elements';



const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="UserList"
            screenOptions={screenOptions}>

                <Stack.Screen 
                    name={"UserForm"}
                    component={UserForm}
                    options={{
                        title: "Formulario de Contatos"
                    }}  
                />
                <Stack.Screen 
                    name={"UserList"}
                    component={UserList}
                    options={({navigation}) =>{
                        return {
                            title: "Lista de Usuarios",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type= "clear"
                                    icon={<Icon  name="add" size={25} color="white" />}
                                />
                            )
                        }
                    }}

                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#4682B4'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}