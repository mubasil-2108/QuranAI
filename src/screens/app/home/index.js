import React, { Component } from 'react';
import { View } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { Wrapper, Text, Images, Spacer, Icons, Buttons, ScrollViews, HeaderHome, Headers, Modals } from '../../../components';
import { useHooks } from './hooks'
import { navigate } from '../../../navigation/rootNavigation';
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons } from '../../../services';
import { Image } from 'react-native';


export default function Home() {
  const { modalHomeVisible, modalHomeVisibility, data, value, setValue } = useHooks()
  return (
    <Wrapper isMain isImageBackground source={appImages.backgroundImage}>
      <ScrollViews.KeyboardAvoiding>
        <Wrapper >
          <Wrapper flexDirectionRow justifyContentSpaceBetween paddingHorizontalBase style={{ backgroundColor: 'red', marginTop: height(6) }} >
            <Headers.Primary title={'Quran AI'} titleStyle={{ fontFamily: appFonts.appTextMedium, color: colors.appTextColor1, fontSize: fontSizes.h4, }} containerStyle={{height:height(10)}}/>
            <Wrapper flexDirectionRow>
              <Wrapper marginHorizontalSmall style={{ alignSelf: 'center', justifyContent: 'center', height: sizes.images.mediumSmall, width: sizes.images.mediumSmall, backgroundColor: colors.buttonColor3, borderRadius: 150}}>
                <Icons.Button   buttonStyle={{alignSelf: 'center', justifyContent: 'center', height: sizes.icons.large, width: sizes.icons.large}} iconSize={sizes.icons.medium} iconColor={colors.iconColor4} buttonColor={colors.transparent} iconName={'bell-outline'} iconType={'material-community'} />
              </Wrapper>
              <Wrapper  style={{ alignSelf: 'center', justifyContent: 'center', height: sizes.images.mediumSmall, width: sizes.images.mediumSmall, backgroundColor: 'pink', borderColor: colors.buttonColor1, borderRadius: 150, borderWidth: height(0.4) }} >
                <Icons.Custom onPress={modalHomeVisibility} icon={appImages.profile} containerStyle={{ alignSelf: 'center', justifyContent: 'center',  }} size={sizes.images.mediumXSmall} />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            {/* <Image style={{}} /> */}
          </Wrapper>

          <Modals.Swipable data={data} setValue={setValue} value={value} hideContent={true} hideHeader visible={modalHomeVisible} toggle={modalHomeVisibility} disableBackdropPress={false} />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}


