import React, { useState } from 'react'
import { SearchNormal1, ArrowRight2, Archive, ProfileCircle, Setting3, Home, Cards, Profile, Heart } from 'iconsax-react-native';
import { car, travel, cars } from './src/assets/Image';
import { fontType, colors } from './src/theme';
import { Dimensions, ScrollView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from 'react-native';

const win = Dimensions.get('window')
  // const [selected, setSelected] = useState(1)

            {/* <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 1 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(1)}>
              <Text style={ [styles.category, { color: selected == 1 ? 'white' : 'black'}] }>Indonesia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 2 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(2)}>
              <Text style={ [styles.category, { color: selected == 2 ? 'white' : 'black'}] }>Malaysia</Text>
            </TouchableOpacity> */}

export default function App() {
  return (
    <View style={ styles.container }>
      <ScrollView>
        {/* Search Bar */}
        <View style={ styles.header }>
          <View style={{ flex:1, marginHorizontal:15, marginBottom:15, marginTop:28 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', left: 10}}>
              <View style={{ flexDirection: 'column'}}>
              <Text style={{ color:'black'}}>
                Selamat Datang
              </Text>
              <Text style={{ fontSize:26, fontWeight: 'bold', color:'black'}}>
              Bagas Anardi
            </Text>
              </View>
              <ProfileCircle size="42" color="black" style={{ right: 32 }}/>
            </View>
          </View>
        </View>
        <View style={ styles.searchContainer }>
          <SearchNormal1 variant='Linear' color='grey' style={{ marginLeft: 12, }} />
          <TextInput style={ styles.search } placeholder='Tujuan Liburan' placeholderTextColor={'grey'}/>
          <Setting3 variant='Linear'size="28" color='grey'/>
        </View>
        {/* Add on */}
        <ScrollView horizontal>
          <View style={ styles.categoryContainer }>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>America</Text>
            </View>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>Paris</Text>
            </View>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>Brazil</Text>
            </View>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>Rusia</Text>
            </View>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>Africa</Text>
            </View>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>English</Text>
            </View>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>Swiss</Text>
            </View>
            <View style={ styles.categoryContainer2 }>
              <Text style={ styles.category }>Germany</Text>
            </View>
          </View>
        </ScrollView>

        {/* Menu Konten */}
        <View style={ styles.fiturContainer }>
          <View style={styles.fiturContainer2}>
            <Image
              source={travel}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Hangout</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={cars}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Car</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={car}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Ride</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={car}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Bus</Text>
          </View>
        </View>
        {/* Baris 2 */}
        <View style={ styles.fiturContainer }>
          <View style={styles.fiturContainer2}>
            <Image
              source={car}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Trains</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={car}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Hotel</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={car}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Villa</Text>
          </View>
        </View>

        {/* KONTEN BAWAH */}
        <View style={{marginHorizontal:20, marginBottom:8, marginTop:20, flexDirection:'row'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
            Recommendation
          </Text>
          <View style={{justifyContent:'flex-end', alignItems :'center', flex:11, flexDirection:'row'}}>
            <Text style={{fontSize:14, color:'black'}}>Lihat Semua</Text>
            <ArrowRight2  size="14" color="black"/>
          </View>
        </View>

        <ScrollView horizontal style={ styles.box }>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1591284915748-bc48608e894d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Ampat</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, Papua</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBhbmQlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Elima</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, Bali</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Enam</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, NTT</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Tujuh</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, Yogyakarta</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Duwa</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, Lombok</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
        </ScrollView>
      </ScrollView>
        <View style={{ backgroundColor:'#02acf5', height: 50, marginBottom: 20, marginHorizontal: 18, borderRadius: 20, flexDirection:'row', elevation: 3}}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Home size="26" color="white"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Cards size="26" color="white"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Heart size="26" color="white"/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Profile size="26" color="white"/>
          </TouchableOpacity>
        </View>
    </View>

  )
}
const apps = StyleSheet.create({
  icon: {
    top: 8,
    left: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  background: {
    width: 65,
    height: 65,
    backgroundColor: '#00AA13',
    borderRadius: 15,
    marginHorizontal: 15,
  },
  txtIcon: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 14,
    color: colors.black(),
    top: 12,
    left: 5,
  },
})
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 136,
    backgroundColor: '#02acf5',
  },

  logoHeader: {
    width: win.width,
    height:128,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 32,
    borderRadius: 10,
    marginTop: -28,
  },
  boxButton: {
    height: 60,
    backgroundColor: 'white',
    elevation: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    marginBottom: -30,
  },

  search: {
    marginHorizontal: 8,
    color: 'grey',
    width: win.width-160,
  },

  categoryContainer: {
    marginHorizontal: 32,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 6,
    marginHorizontal: 4,
  },
  
  category: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 12,
  },

  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 112,
    marginHorizontal: 32,
  },

  fiturContainer2: {
    alignItems: 'center',
    marginTop: 14,
  },

  box: {
    marginTop: 16,
    height:300,
    marginHorizontal: 8,
  },

  box2: {
    marginTop: 2,
    marginHorizontal: 8,
  },

  iklanHeader: {
    color: 'black',
    fontWeight: '500',
    fontSize: 22,

  },

  iklanImage: {
    marginTop: 6,
    borderRadius: 15,
    width: win.width-233,
    height:150,
  },

  iklanTextHeader: {
    fontSize: 16,
    marginTop: 6,
    color: 'black',
    fontWeight: 'bold',
  },

  iklanTextSponsored: {
    marginTop: 2,
    color: 'grey',
  },
})