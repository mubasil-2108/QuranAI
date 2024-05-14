import React, { Component } from 'react';
// import { View, } from 'react-native';
// import { totalSize } from 'react-native-dimension';
import { Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, StatusBars, Images, } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appImages } from '../../../services';
import { Image } from 'react-native';
// import { useHooks } from './hooks';
export default function Index(props) {
  // const { navigate } = props.navigation

  // const { handleLogin } = useHooks()
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Wrapper>
          <StatusBars.Light />
          <Wrapper isCenter style={{backgroundColor:'red'}}>
            <Image source={appImages.logo} style={{ flex: 1, marginTop: 60, height:responsiveHeight(13), width:responsiveWidth(75) }} />
          </Wrapper>

        </Wrapper>

      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

