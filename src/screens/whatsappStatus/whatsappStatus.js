import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {styles} from './styles';
import { IconContainer } from '../../components/iconContainer';
export default function WhatsappStatus() {
  return (
    <View>
      <View style={StyleSheet.header}>
        <IconContainer
        icon={<MaterialCommunityIcons
         name="dots-horizontal" 
         size={40} 
         color="black" />}
        />
        
         </View>
         <Text style={styles.headerText}>Updates</Text>
         <View style={styles.statusListing}>
         <View style={styles.statusListingHeading}>

          <Text style={styles.headerSubText}>Status</Text>
          
            <IconContainer
              icon={<FontAwesome name="camera" size={24} color="black" />}
            />
              
            <IconContainer
            icon={<Ionicons name="pencil" size={24} color="black" />}
             />
            
             </View>
          </View>
         </View>
      
  )
}
