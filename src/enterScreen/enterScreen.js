import React, {Component} from 'react';

import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default function EnterScreen () {

  // constructor(props) {
  //     super(props);
  //     this.state = {
          
  //     };
  // }


  // handlePress(target, owner) {
  //   if (this.props.onPress) {
  //       let name;
  //       let id;
  //       let index = -1;
  //       if (target.search("::") > -1) {
  //           const varCount = target.split("::").length;
  //           if (varCount === 2) {
  //               name = target.split("::")[0];
  //               id = target.split("::")[1];
  //           } else if (varCount === 3) {
  //               name = target.split("::")[0];
  //               index = parseInt(target.split("::")[1]);
  //               id = target.split("::")[2];
  //           }
  //       } else {
  //           name = target;
  //       }
  //       this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
  //   }
  // }

  // handleChangeTextinput(name, value) {
  //     let id;
  //     let index = -1;
  //     if (name.search('::') > -1) {
  //         const varCount = name.split("::").length;
  //         if (varCount === 2) {
  //             name = name.split("::")[0];
  //             id = name.split("::")[1];
  //         } else if (varCount === 3) {
  //             name = name.split("::")[0];
  //             index = name.split("::")[1];
  //             id = name.split("::")[2];
  //         }
  //     } else {
  //         name = name;
  //     }
  //     let state = this.state;
  //     state[name.split('::').join('')] = value;
  //     this.setState(state, () => {
  //         if (this.props.onChange) {
  //             this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
  //         }
  //     });
  // }

    
    return (
    <ScrollView style={styles.enterScreen}>
        <Text style={styles.enterScreen_enter}>Enter</Text>
        <View style={styles.enterScreen_title}>
            <Text style={styles.enterScreen_title_anApplicationForCollegeStudentsAlikeToRelaxAndJustVibe}>An application for college students alike to relax and just vibe.</Text>
            <Text style={styles.enterScreen_title_welcomeToFragment}>Fragment</Text>
        </View>
        <View style={styles.enterScreen_logo}>
        <TouchableOpacity>
            <ReactImage source={require('./assets/peace.png')} style={styles.enterScreen_logo_peace} />
        </TouchableOpacity>
        </View>
    </ScrollView>
    );
  }

// EnterScreen.propTypes = {

// }

// EnterScreen.defaultProps = {

// }


const styles = StyleSheet.create({
  "enterScreen": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0.6509803921568628)",
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
  "enterScreen_enter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 14,
    "fontWeight": "700",
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
    "width": 36,
    "height": 16,
    "left": 276,
    "top": 781
  },
  "enterScreen_title": {
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
    "width": 327,
    "height": 182,
    "left": 24,
    "top": 365
  },
  "enterScreen_title_anApplicationForCollegeStudentsAlikeToRelaxAndJustVibe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "lineHeight": 24,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 327,
    "height": 80,
    "left": 0,
    "top": 108
  },
  "enterScreen_title_welcomeToFragment": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 39,
    "fontWeight": "400",
    "fontStyle": "normal",
    // "fontFamily": "Blanka",
    "textAlign": "center",
    "lineHeight": 45,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 324,
    "height": 118,
    "left": 3,
    "top": -3
  },
  "enterScreen_learnMore": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 75,
    "height": 16,
    "left": 268,
    "top": 35
  },
  "enterScreen_forwardArrow": {
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
    "left": 335,
    "top": 781
  },
  "enterScreen_forwardArrow_path10": {
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
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "enterScreen_logo": {
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
    "width": 222,
    "height": 212,
    "left": 77,
    "top": 159
  },
  "enterScreen_logo_peace": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 222,
    "height": 212,
    "left": 0,
    "top": 0
  }
});