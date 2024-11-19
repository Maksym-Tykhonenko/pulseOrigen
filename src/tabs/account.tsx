import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Pressable, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import { TabContext } from './navigation';
import Reset from '../../assets/svg/reset.svg'
//import ActiveCheckout from '../../assets/svg/active-checkout.svg'
//import NonActiveCheckout from '../../assets/svg/nonactive-checkout.svg'
import Avatar from '../../assets/svg/avatar.svg'
import Camera from '../../assets/svg/camera.svg'
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

export default function Account({ navigation }: any) {
  const { routeName, setRouteName } = useContext(TabContext);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showSelectedDate, setShowSelectedDate] = useState<boolean>(false);
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      setRouteName('account')
      setIsEdit(false)
    }, []),
  );

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  
  const handleDatePickerConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(date);
    setShowSelectedDate(true);
  };

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.8,
    };

    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setImageUri(selectedImage.uri);
        saveImageLocally(selectedImage.uri);
      }
    });
  };

  const saveImageLocally = async (uri: string) => {
    try {
      const fileName = `image_${Date.now()}.jpg`;
      const destinationPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      await RNFS.copyFile(uri, destinationPath);
    } catch (error) {
      console.log('Error saving image:', error);
    }
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#FFF'
      }}
    >
      <Text
        style={styles.title}
      >
        Personal Data
      </Text>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={{
            alignItems: 'center',
            marginTop: 30,
          }}
          onPress={() => pickImage()}
          disabled={!isEdit}
        >
          {!imageUri ? 
            <Avatar/>
            :
            <Image
            source={{ uri: imageUri }}
            style={{ 
              width: 127,
              height: 116,
              borderRadius: 10,
            }}
            />
          }
          <Camera style={{
            position: 'relative',
            bottom: 25,
            right: -50,
          }} />
        </Pressable>
        <Text
          style={styles.label}
        >
          Your Name
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value: string) => setName(value)}
          value={name}
          placeholder="Name Surname"
          editable={isEdit}
        />
        {/**Coment email */}
        {/** 
        <Text
          style={styles.label}
        >
          Your Email
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value: string) => setEmail(value)}
          value={email}
          placeholder="email@gmail.com"
          editable={isEdit}
        />*/}
        {/**Coment date bird */}
        {/** 
        <Text
          style={styles.label}
        >
          Date Of Birth
        </Text>
        <Pressable
          style={styles.input}
          disabled={!isEdit}
          onPress={() => {
            setDatePickerVisible(true);
          }}
        >
          <Text
            style={{
              color: showSelectedDate ? '#1E1E1E' : '#C4C3C3',
              fontFamily: 'Comfortaa',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 17,
            }}>
            {showSelectedDate
              ? moment(selectedDate).format('DD/MM/YYYY')
              : 'DD/MM/YYYY'}
          </Text>
        </Pressable>*/}
        {/**Coment gender  */}
        {/** 
        <Text
          style={styles.label}
        >
          Your Genger
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Pressable
            style={[
              styles.input,
              {
              width: '45%',
              flexDirection: 'row',
              }
            ]}
            onPress={() => setGender('male')}
            disabled={!isEdit}
          >
            {gender === 'male' ? 
              <ActiveCheckout/>
              :
              <NonActiveCheckout/>
            }
            <Text
              style={styles.genderText}
            >
              Male
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.input,
              {
              width: '45%',
              flexDirection: 'row',
              }
            ]}
            onPress={() => setGender('female')}
            disabled={!isEdit}
          >
            {gender === 'female' ? 
              <ActiveCheckout/>
              :
              <NonActiveCheckout/>
            }
            <Text
              style={styles.genderText}
            >
              Female
            </Text>
          </Pressable>
        </View>*/}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsEdit(!isEdit)}
        >
          <LinearGradient
            colors={['#0F9A86','#1EFBFB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            {isEdit ?
              <Text
                style={styles.buttonText}
              >
                Save the data
              </Text>
              :
              <Text
                style={styles.buttonText}
              >
                Change the data
              </Text>
            }
          </LinearGradient>
        </TouchableOpacity>
        {isEdit ?
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, {
              borderWidth: 1,
              borderColor: '#1E1E1E',
              marginTop: 0,
              flexDirection: 'row'
            }]}
            onPress={() => {
              setName('')
              setEmail('')
              setGender('')
              setShowSelectedDate(false);
              setImageUri('');
            }}
          >
            <Reset/>
            <Text
              style={[styles.buttonText, {color: '#1E1E1E', marginLeft: 5}]}
            >
              Reset
            </Text>
          </TouchableOpacity>
          : 
          <Text
            style={[styles.genderText, {textAlign: 'center', marginBottom: 30}]}
          >
            Delete account?
          </Text>
        }
      </ScrollView>
      <DateTimePickerModal
        date={new Date(selectedDate)}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleDatePickerConfirm}
        onCancel={hideDatePicker}
        textColor="#1E1E1E"
        display="spinner"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 70,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 28.8,
  },
  subTitle: {
    marginVertical: 20,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
  },
  label: {
    color: '#999999',
    fontWeight: 400,
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
    fontWeight: 500,
    color: '#FBFBFB',
  },
  genderText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19.2,
    color: '#1E1E1E',
    marginLeft: 5,
  },
})