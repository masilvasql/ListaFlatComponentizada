import React from 'react'
import { View, Text, FlatList } from 'react-native'
import estiloLista from '../estilo/estiloLista'


export default props => {

    const renderItem = ({ item }) => {
        
        return (
            <View style={estiloLista.alinhamento}>
                <View style={parseInt(item.Id) % 2 == 0 ? estiloLista.card : estiloLista.card2}>
                    <Text style={estiloLista.fonte}>Id: {item.Id}</Text>
                    <Text style={estiloLista.fonte}>Nome: {item.nome}</Text>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={props.nomes}
            renderItem={renderItem}
        />
    )

}

