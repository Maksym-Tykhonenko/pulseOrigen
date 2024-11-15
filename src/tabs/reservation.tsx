import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Pressable, Modal, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { TabContext } from './navigation';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import Reset from '../../assets/svg/reset.svg';
import DropdownSvg from '../../assets/svg/drop-down.svg'
import CloseSvg from '../../assets/svg/close-button.svg'

export default function Reservation({ navigation }: any) {
  const { routeName, setRouteName } = useContext(TabContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [occupation, setOccupation] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      setRouteName('reservation');
    }, [])
  );

  const data = [ 'Birthday', 'Meetting', 'Networking', 'Business', 'Party', 'Other']

  return (
    <View style={{ paddingHorizontal: 20, flex: 1, backgroundColor: '#FFF' }}>
      <Text style={styles.title}>Book seats</Text>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.subTitle}>Your information details</Text>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value: string) => setName(value)}
          value={name}
          placeholder="Name Surname"
        />
        <Text style={styles.label}>Your Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value: string) => setEmail(value)}
          value={email}
          placeholder="email@gmail.com"
        />
        <Text style={styles.label}>Your phone Number</Text>
        <PhoneInput
          defaultCode="UA"
          layout="first"
          onChangeFormattedText={(value: string) => setFormattedValue(value)}
          onChangeText={(value: string) => setPhone(value)}
          value={phone}
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.textContainer}
          textInputStyle={styles.textInput}
          codeTextStyle={styles.codeText}
          placeholder="0000000000"
        />
        <Text style={styles.label}>Occupation</Text>
        <Pressable
          style={[styles.input, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}
          onPress={() => setIsModalVisible(true)}
        >
          <Text
            style={{
              color: selectedItem ? '#1E1E1E' : '#D9D9D9',
            }}
          >
            {selectedItem ? selectedItem : 'Select'}
          </Text>
          <DropdownSvg />
        </Pressable>
        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <TouchableOpacity 
            style={styles.modalOverlay} 
            onPress={() => setIsModalVisible(false)}
            activeOpacity={0.7}
          />
          <View style={styles.modalContainer}>
            <TouchableOpacity 
              onPress={() => setIsModalVisible(false)}
              activeOpacity={0.7}
            >
              <CloseSvg width={15} style={{marginLeft: 15}}/> 
            </TouchableOpacity>
            <FlatList
              data={data}
              keyExtractor={(item: any) => item}
              renderItem={({ item }: any) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedItem(item)
                    setIsModalVisible(false)
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
        <TouchableOpacity activeOpacity={0.7}>
          <LinearGradient colors={['#0F9A86', '#1EFBFB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
            <Text style={styles.buttonText}>Confirm</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.button, { borderWidth: 1, borderColor: '#1E1E1E', marginTop: 0, flexDirection: 'row' }]}
          onPress={() => {
            setName('');
            setEmail('');
            setPhone('');
            setFormattedValue('');
            setOccupation('');
          }}
        >
          <Reset />
          <Text style={[styles.buttonText, { color: '#1E1E1E', marginLeft: 5 }]}>Reset</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 70,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28.8,
  },
  subTitle: {
    marginVertical: 20,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
  },
  label: {
    color: '#999999',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    marginBottom: 10,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    marginBottom: 20,
  },
  phoneInputContainer: {
    width: '100%',
    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  textInput: {
    fontSize: 14,
  },
  codeText: {
    fontSize: 14,
    marginLeft: 5,
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FBFBFB',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '100%',
    paddingTop: 55,
    paddingBottom: 40,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
});
