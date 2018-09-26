import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lista from './src/components/lista'

const nomesTeste =[
  {Id:1, nome:'Marcelo'},
  {Id:2, nome:'Matheus'},
  {Id:3, nome:'Julio'},
  {Id:4, nome:'Juliano'},
  {Id:5, nome:'Douglas'},
  {Id:6, nome:'Junior'},
  {Id:7, nome:'Pedro'},
  {Id:8, nome:'Guilherme'},
  {Id:9, nome:'Paula'},
  {Id:10, nome:'Anna'},
  {Id:11, nome:'Henzo'},
  {Id:12, nome:'Pablo'},
  {Id:13, nome:'Maria'},
  {Id:14, nome:'Joaquim'},
  {Id:15, nome:'Cafuncio'},
]

export default class App extends React.Component {

  render() {
    return (
        <Lista
          nomes ={nomesTeste}
        />
  
    );
  }
}


