import React, {Component} from 'react';

import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight,TouchableOpacity
} from 'react-native';
import {Image as ReactImage} from 'react-native';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignIn extends Component {



  render() {
    
    return (
    <ScrollView data-layer="0665a78c-bf66-4927-93b4-412b3566938c" style={styles.signIn}>
     <View data-layer="c1bb6132-fc48-492d-889d-a6af11ef0867" style={styles.signIn_header}>
            <View data-layer="c259d0c0-35a4-401c-aabb-e212be8d3b6c" style={styles.signIn_header_rectangle134}></View>
            <Text data-layer="d4ae8c06-7795-4965-bd66-c444b8c235f1" style={styles.signIn_header_signIn07e4b9df}>Sign in</Text>
        </View>


     <ScrollView data-layer="674cca54-5df3-4af7-a4c8-c71775244b78" style={styles.signIn_inputsff4f792e}>
            <View data-layer="e8b660a2-d273-468a-b99a-487926396d79" style={styles.signIn_inputsff4f792e_inputseb9189ed}>
                <View data-layer="9de6e69d-22f3-4fd3-a22f-42bb3a8dd1e8" style={styles.signIn_inputsff4f792e_inputseb9189ed_rectangle12330d7170b}></View>
                <TextInput style={styles.signIn_inputsff4f792e_inputseb9189ed_johndossse8d85530c}>
                Email
                </TextInput>
            </View>
            <View data-layer="34a7146c-1749-4818-a3d4-13d4b7827812" style={styles.signIn_inputsff4f792e_inputs35575a80}>
                <View data-layer="20cb8882-30af-4552-92e4-533547949286" style={styles.signIn_inputsff4f792e_inputs35575a80_rectangle12359559d9c}></View>
               <TextInput style={styles.signIn_inputsff4f792e_inputs35575a80_johndossse71d1477b}>
                Password
                </TextInput>
            </View>
        </ScrollView>

         <View data-layer="386715af-d697-4038-8ef1-00b863a81eec" style={styles.signIn_divider}></View>

        <TouchableOpacity>
        <View data-layer="fa349bdd-c8c9-4d2c-a4f8-2b9530a2fdca" style={styles.signIn_login}>
            <View data-layer="cab18d99-bdf1-4d8e-b7f6-7e0b108d93ff" style={styles.signIn_login_rectangle133}></View>
            <Text data-layer="944d4e44-6843-4c8f-b906-183d9b4b7464" style={styles.signIn_login_loginWithFacebook}>LOGIN WITH FACEBOOK</Text>
            <View data-layer="0bb53b93-8008-4aed-8ab9-1cef403c4709" style={styles.signIn_login_group3}>
                <View data-layer="0ad1ce2b-b67b-4878-ac6d-244ccede3581" style={styles.signIn_login_group3_rectangle1458}></View>
            </View>
        </View>
        </TouchableOpacity>

     <TouchableOpacity>
        <View data-layer="b6f8cdf8-fe5b-44b6-b5f4-aecf3d9b22eb" style={styles.signIn_continue93fd6803}>
            <View data-layer="73c22260-4e14-412a-8345-c1ade6f1dc02" style={styles.signIn_continue93fd6803_rectangle132}></View>
            <Text data-layer="453583cd-6aa6-4f15-b534-133823d59906" style={styles.signIn_continue93fd6803_continue}>CONTINUE</Text>
            <View data-layer="962da951-7a1d-477c-bde8-fe4804cde192" style={styles.signIn_continue93fd6803_group6}>
            </View>
        </View>
           </TouchableOpacity>
    </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  "signIn": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "signIn_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 295,
    "height": 48,
    "left": 40,
    "top": 579
  },
  "signIn_login_rectangle133": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(38, 153, 251, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(38, 153, 251, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(38, 153, 251, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(38, 153, 251, 1)",
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "signIn_login_loginWithFacebook": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "center",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 120,
    "height": 13,
    "left": 88,
    "top": 18.5
  },
  "signIn_login_group3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16,
    "height": 16,
    "left": 21,
    "top": 16
  },
  "signIn_login_group3_rectangle1458": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "signIn_login_group3_path1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 8.36,
    "height": 16,
    "left": 4,
    "top": 0
  },
  "signIn_continue93fd6803": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 295,
    "height": 48,
    "left": 40,
    "top": 514
  },
  "signIn_continue93fd6803_rectangle132": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(38, 153, 251, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "signIn_continue93fd6803_continue": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "center",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52,
    "height": 13,
    "left": 122,
    "top": 18.5
  },
  "signIn_continue93fd6803_group6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19,
    "height": 10.15,
    "left": 19.48,
    "top": 19.34
  },
  "signIn_continue93fd6803_group6_path79": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19,
    "height": 10.15,
    "left": 0,
    "top": 0
  },
  "signIn_header": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 169,
    "left": 0,
    "top": 0
  },
  "signIn_header_rectangle134": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(38, 153, 251, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 169,
    "left": 0,
    "top": 0
  },
  "signIn_header_signIn07e4b9df": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 33,
    "left": 142,
    "top": 112
  },
  "signIn_inputsff4f792e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 295,
    "height": 192,
    "left": 40,
    "top": 209
  },
  "signIn_inputsff4f792e_inputseb9189ed": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "signIn_inputsff4f792e_inputseb9189ed_rectangle12330d7170b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(188, 224, 253, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(188, 224, 253, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(188, 224, 253, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(188, 224, 253, 1)",
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "signIn_inputsff4f792e_inputseb9189ed_johndossse8d85530c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 121,
    "height": 16,
    "left": 24,
    "top": 16
  },
  "signIn_inputsff4f792e_inputs35575a80": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 72
  },
  "signIn_inputsff4f792e_inputs35575a80_rectangle12359559d9c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(188, 224, 253, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(188, 224, 253, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(188, 224, 253, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(188, 224, 253, 1)",
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "signIn_inputsff4f792e_inputs35575a80_johndossse71d1477b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 16,
    "left": 25,
    "top": 16
  },
  "signIn_inputsff4f792e_inputs": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 144
  },
  "signIn_inputsff4f792e_inputs_rectangle123": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(188, 224, 253, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(188, 224, 253, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(188, 224, 253, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(188, 224, 253, 1)",
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 295,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "signIn_inputsff4f792e_inputs_johndossse": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 16,
    "left": 25,
    "top": 16
  },
  "signIn_divider": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(188, 224, 253, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 2,
    "borderTopRightRadius": 2,
    "borderBottomLeftRadius": 2,
    "borderBottomRightRadius": 2,
    "width": 24,
    "height": 4,
    "left": 176,
    "top": 455
  }
});