import {useState} from 'react'
import {
   View, 
   Text,
   TextInput,
   TouchableOpacity,
   Image,
   FlatList
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter();


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.UserName}>Olá Luis</Text>
        <Text style={styles.welcomeMessage}>Ache o emprego perfeito</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='Oque está procurando?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* min 43 */}
    </View>
  )
}

export default Welcome