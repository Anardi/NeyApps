import React, { useState } from 'react'
import { SearchNormal1, ArrowRight2, Archive, ProfileCircle, Setting3, Home, Cards, Profile, Heart } from 'iconsax-react-native';
import { car, travel, bus, rides, hotel, plane, villa, train } from './src/assets/Image';
import { fontType, colors } from './src/theme';
import { Dimensions, ScrollView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from 'react-native';

const win = Dimensions.get('window')

export default function App() {
  //useState
  const [selected, setSelected] = useState(1)
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
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 1 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(1)}>
              <Text style={ [styles.category, { color: selected == 1 ? 'white' : 'black'}] }>Indonesia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 2 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(2)}>
              <Text style={ [styles.category, { color: selected == 2 ? 'white' : 'black'}] }>Malaysia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 3 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(3)}>
              <Text style={ [styles.category, { color: selected == 3 ? 'white' : 'black'}] }>America</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 4 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(4)}>
              <Text style={ [styles.category, { color: selected == 4 ? 'white' : 'black'}] }>Paris</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 5 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(5)}>
              <Text style={ [styles.category, { color: selected == 5 ? 'white' : 'black'}] }>Brazil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 6 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(6)}>
              <Text style={ [styles.category, { color: selected == 6 ? 'white' : 'black'}] }>Rusia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 7 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(7)}>
              <Text style={ [styles.category, { color: selected == 7 ? 'white' : 'black'}] }>Africa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 8 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(8)}>
              <Text style={ [styles.category, { color: selected == 8 ? 'white' : 'black'}] }>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 9 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(9)}>
              <Text style={ [styles.category, { color: selected == 9 ? 'white' : 'black'}] }>Swiss</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ [styles.categoryContainer2, { backgroundColor: selected == 10 ? '#02acf5' : '#f3f3f3'}] } onPress={()=>setSelected(10)}>
              <Text style={ [styles.category, { color: selected == 10 ? 'white' : 'black'}] }>Germany</Text>
            </TouchableOpacity>
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
              source={car}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Car</Text> 
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={rides}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Ride</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={bus}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Bus</Text>
          </View>
        </View>
        {/* Baris 2 */}
        <View style={ styles.fiturContainer }>
          <View style={styles.fiturContainer2}>
            <Image
              source={plane}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Plane</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={train}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Trains</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={hotel}
              style={apps.icon}
            />
            <Text style={apps.txtIcon}>Hotel</Text>
          </View>
          <View style={styles.fiturContainer2}>
            <Image
              source={villa}
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
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Ampat</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, Papua</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1668611084771-e0548ce981b5?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Elima</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, Bali</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1604560929658-bbc3c2ba6a36?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Enam</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, NTT</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1631681895793-4dbe543350e2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            <Text style={ styles.iklanTextHeader }>Wisata Raja Tujuh</Text>
            <Text style={ styles.iklanTextSponsored }>Indonesia, Yogyakarta</Text>
            <Archive style={{ position:'absolute', right:5, bottom: 100 }} size="23" color="#02acf5" />
          </View>
          <View style={ styles.box2 }>
            <Image style={styles.iklanImage} source={{ uri: 'https://images.unsplash.com/photo-1600790314350-3925299bab61?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
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