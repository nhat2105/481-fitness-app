import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import navigateHome from '../HomeNavigation';
import * as Icon from 'react-native-feather'
import { theme } from '../theme';

const Footer = ({ params }) => {
  const themeColors = theme("gray")

  return (
    <View style={{position: 'absolute', bottom: 0, flexDirection: 'row',
        backgroundColor: "white", width: "100%", height: 40, justifyContent: 'space-between'}}>
        <Icon.Home onPress={navigateHome({params})}
        strokeWidth={3} width={35} height={35} style={{ marginLeft: 185, color: themeColors.bgColor(1), marginTop: 5}}/>
    </View> 
  );
};

export default Footer;
