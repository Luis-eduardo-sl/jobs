import { useState} from 'react'
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image 
} from 'react-native'
import {useRouter} from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/popularjobcard.style'

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  const jobs = [
    {
      id: 1,
      title: 'Job 1',
      image: 'data:image/png;base64,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',
      salary: '5000.00',
      summary: 'This is a summary of job 1fbfgbdgbh dbsgdfgb dfgsbuyfdg fgdvgsg dguyg greghruegfe gegheryg ghowergher hyufwebgyu ghfdg yjhjhr rnybgbh',
    },
    {
      id: 2,
      title: 'Job 1',
      image: 'https://example.com/image1.png',
      salary: '5000.00',
      summary: 'This is a summary of job 1fbfgbdgbh dbsgdfgb dfgsbuyfdg fgdvgsg dguyg greghruegfe gegheryg ghowergher hyufwebgyu ghfdg yjhjhr rnybgbh',
    },
    {
      id: 3,
      title: 'Job 1',
      image: 'https://example.com/image1.png',
      salary: '5000.00',
      summary: 'This is a summary of job 1fbfgbdgbh dbsgdfgb dfgsbuyfdg fgdvgsg dguyg greghruegfe gegheryg ghowergher hyufwebgyu ghfdg yjhjhr rnybgbh',
    },
    {
      id: 4,
      title: 'Job 1',
      image: 'https://example.com/image1.png',
      salary: '5000.00',
      summary: 'This is a summary of job 1fbfgbdgbh dbsgdfgb dfgsbuyfdg fgdvgsg dguyg greghruegfe gegheryg ghowergher hyufwebgyu ghfdg yjhjhr rnybgbh',
    },
    {
      id: 5,
      title: 'Job 1',
      image: 'https://example.com/image1.png',
      salary: '5000.00',
      summary: 'This is a summary of job 1fbfgbdgbh dbsgdfgb dfgsbuyfdg fgdvgsg dguyg greghruegfe gegheryg ghowergher hyufwebgyu ghfdg yjhjhr rnybgbh',
    },
    {
      id: 6,
      title: 'Job 1',
      image: 'https://example.com/image1.png',
      salary: '5000.00',
      summary: 'This is a summary of job 1fbfgbdgbh dbsgdfgb dfgsbuyfdg fgdvgsg dguyg greghruegfe gegheryg ghowergher hyufwebgyu ghfdg yjhjhr rnybgbh',
    },
   
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trabalhos Populares</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Mostre mais</Text>
        </TouchableOpacity>
      </View>

      <View>
      <FlatList 
    data={jobs}
    renderItem={({ item }) => (
      <View style={{ flexDirection: 'row', margin: 10, backgroundColor: '#f5f5f7', borderRadius: 15, padding: 10, borderColor: '#a1b4f7', borderWidth: 2  }}>
        <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 7 }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ color: 'green', marginTop: 5 }}>Salário: R$ {item.salary}</Text>
          <Text style={{ marginTop: 5, flexWrap: 'wrap' }}>{item.summary}</Text>
        </View>
      </View>
      )}
  keyExtractor={item => item.id.toString()}
/>
    </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Algo deu errado</Text>
        ) : (
          <FlatList 
            // data= {[1,2,3,4]}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs