import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Conta from "../paginas/conta";
import Sobre from "../paginas/Sobre";
import Duvidas from "../paginas/Duvidas";
import Creditos from "../paginas/creditos";
import Configuracoes from "../paginas/configuracoes/Index";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
            name="Conta" 
            component={Conta} 
            />

            <Drawer.Screen 
            name="Sobre" 
            component={Sobre} 
            />

            <Drawer.Screen 
            name="Duvidas" 
            component={Duvidas} 
            />
            
            <Drawer.Screen 
            name="Creditos" 
            component={Creditos} 
            />

            <Drawer.Screen 
            name="Configuracoes" 
            component={Configuracoes} 
            />          
        </Drawer.Navigator>    
    )
}