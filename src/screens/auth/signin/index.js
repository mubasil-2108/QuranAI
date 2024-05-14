import React, { Component } from 'react';
// import { View, } from 'react-native';
// import { totalSize } from 'react-native-dimension';
import { Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, StatusBars, Images, } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appImages, appFonts, colors } from '../../../services';
import { Image } from 'react-native';
// import { useHooks } from './hooks';
export default function Index(props) {
  // const { navigate } = props.navigation

  // const { handleLogin } = useHooks()
  return (
    <Wrapper isMain background1 style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Wrapper>
          <StatusBars.Light />
          <Wrapper isCenter style={{ backgroundColor: 'red' }}>
            <Image source={appImages.logo} style={{ flex: 1, marginTop: responsiveWidth(25), height: responsiveHeight(10), width: responsiveWidth(75), }} />
          </Wrapper>
          <Wrapper isCenter paddingHorizontalLarge paddingVerticalLarge style={{ marginTop: responsiveWidth(15), backgroundColor: 'green' }}>
            <Text isSmallTitle style={{}}>Login to your account</Text>
            <Text isTiny style={{ marginTop: responsiveWidth(1.5) }}>Please enter your details</Text>
          </Wrapper>
          <Wrapper marginVerticalBase paddingHorizontalSmall>
            <Text isTiny  style={{marginLeft:responsiveWidth(10)}}>Email Address</Text>
            <TextInputs.Colored containerStyle={{borderColor: colors.inputTextBorder,}}/>
          </Wrapper>

        </Wrapper>

      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

