import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importando as páginas/telas
import Perguntas from "../paginas/perguntas";
import Pesquisar from "../paginas/pesquisar";
import Conta from "../paginas/conta";
import Sobre from "../paginas/Sobre";
import Duvidas from "../paginas/Duvidas";
import Creditos from "../paginas/creditos";
import Configuracoes from "../paginas/configuracoes";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Perguntas"
                component={Perguntas}
            />
            <Stack.Screen
                name="Pesquisar"
                component={Pesquisar}
            />
            <Stack.Screen
                name="Conta"
                component={Conta}
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
            />
            <Stack.Screen
                name="Duvidas"
                component={Duvidas}
            />
            <Stack.Screen
                name="Creditos"
                component={Creditos}
            />
            <Stack.Screen
                name="Configuracoes"
                component={Configuracoes}
            />
        </Stack.Navigator>
    );
}
