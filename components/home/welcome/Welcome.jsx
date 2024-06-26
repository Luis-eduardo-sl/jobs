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

const jobTypes= ["Tempo Integral", "Meio Período", "Empreita", "Home Office", "Jovem-Aprendiz", "Estágio"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')


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

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={()=> {
                setActiveJobType(item),
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}> {item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome