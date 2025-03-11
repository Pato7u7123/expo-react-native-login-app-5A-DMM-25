import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from '@expo/vector-icons/Ionicons';

export function ArticleScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })
  const [selectedType, setSelectedType] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const itemTypes = [
    { title: 'Mobiliario de oficina' },
    { title: 'Equipo de cómputo' },
    { title: 'Otros' },
  ];

  const itemState = [
    { title: 'Sin determinar' },
    { title: 'Mal estado' },
    { title: 'Regular' },
    { title: 'Buen estado' },
    { title: 'Excelente estado' },
  ];

  const locations = [
    { title: 'Almacén' },
    { title: 'Recepción' },
  ];

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
      
      {[{ data: itemTypes, state: selectedType, setState: setSelectedType, placeholder: 'Seleccionar tipo de artículo' },
        { data: itemState, state: selectedState, setState: setSelectedState, placeholder: 'Seleccionar estado del artículo' },
        { data: locations, state: selectedLocation, setState: setSelectedLocation, placeholder: 'Seleccionar ubicación' }].map((dropdown, index) => (
        <SelectDropdown
          key={index}
          data={dropdown.data}
          onSelect={(selectedItem) => dropdown.setState(selectedItem)}
          renderButton={(selectedItem, isOpened) => (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || dropdown.placeholder}
              </Text>
              <Ionicons 
                name={isOpened ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#151E26" 
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          )}
          renderItem={(item, index, isSelected) => (
            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: theme.colors.primaryLight }) }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          )}
          buttonStyle={styles.customDropdownButton}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      ))}

      <Button mode="contained" style={{ marginTop: 24 }}>Guardar artículo</Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
  },
  dropdownMenuStyle: {
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  dropdownItemStyle: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  dropdownItemTxtStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
  },
  customDropdownButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
});