import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { CustomDropDownList } from '../components/CustomDropDownList'

export function ArticleScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })
  const [selectedType, setSelectedType] = useState(null)
  const [selectedState, setSelectedState] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const itemTypes = [
    { title: 'Mobiliario de oficina' },
    { title: 'Equipo de cómputo' },
    { title: 'Otros' },
  ]

  const itemState = [
    { title: 'Sin determinar' },
    { title: 'Mal estado' },
    { title: 'Regular' },
    { title: 'Buen estado' },
    { title: 'Excelente estado' },
  ]

  const locations = [
    { title: 'Almacén' },
    { title: 'Recepción' },
  ]

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Agregar artículo</Header>

      <TextInput
        label="Nombre del artículo"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Descripción general"
        returnKeyType="next"
        value={description.value}
        onChangeText={(text) => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
      />

      <CustomDropDownList
        data={itemTypes}
        placeholder="Seleccionar tipo de artículo"
        selectedValue={selectedType}
        setSelectedValue={setSelectedType}
      />

      <CustomDropDownList
        data={itemState}
        placeholder="Seleccionar estado del artículo"
        selectedValue={selectedState}
        setSelectedValue={setSelectedState}
      />

      <CustomDropDownList
        data={locations}
        placeholder="Seleccionar ubicación"
        selectedValue={selectedLocation}
        setSelectedValue={setSelectedLocation}
      />

      <Button mode="contained" style={{ marginTop: 24 }}>Guardar artículo</Button>
    </Background>
  )
}
