import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignIn extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="0665a78c-bf66-4927-93b4-412b3566938c" style={styles.signIn}>
        <View data-layer="fa349bdd-c8c9-4d2c-a4f8-2b9530a2fdca" style={styles.signIn_login}>
            <View data-layer="cab18d99-bdf1-4d8e-b7f6-7e0b108d93ff" style={styles.signIn_login_rectangle133}></View>
            <Text data-layer="944d4e44-6843-4c8f-b906-183d9b4b7464" style={styles.signIn_login_loginWithFacebook}>LOGIN WITH FACEBOOK</Text>
            <View data-layer="0bb53b93-8008-4aed-8ab9-1cef403c4709" style={styles.signIn_login_group3}>
                <View data-layer="0ad1ce2b-b67b-4878-ac6d-244ccede3581" style={styles.signIn_login_group3_rectangle1458}></View>
                <Svg data-layer="640ef6c9-bea0-4143-ab78-a91ad8da4071" style={styles.signIn_login_group3_path1} preserveAspectRatio="none" viewBox="80 0 8.3555908203125 16" fill="rgba(38, 153, 251, 1)"><SvgPath d="M 85.42222595214844 16 L 85.42222595214844 8.711111068725586 L 87.91111755371094 8.711111068725586 L 88.26667785644531 5.8666672706604 L 85.42222595214844 5.8666672706604 L 85.42222595214844 4.088889122009277 C 85.42222595214844 3.288889169692993 85.68890380859375 2.666667222976685 86.84445190429688 2.666667222976685 L 88.35556030273438 2.666667222976685 L 88.35556030273438 0.08888889104127884 C 88 0.08888889104127884 87.11111450195312 0 86.13333129882812 0 C 84 0 82.4888916015625 1.333333373069763 82.4888916015625 3.733333110809326 L 82.4888916015625 5.866666793823242 L 80 5.866666793823242 L 80 8.711111068725586 L 82.4888916015625 8.711111068725586 L 82.4888916015625 16 L 85.42222595214844 16 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="b6f8cdf8-fe5b-44b6-b5f4-aecf3d9b22eb" style={styles.signIn_continue93fd6803}>
            <View data-layer="73c22260-4e14-412a-8345-c1ade6f1dc02" style={styles.signIn_continue93fd6803_rectangle132}></View>
            <Text data-layer="453583cd-6aa6-4f15-b534-133823d59906" style={styles.signIn_continue93fd6803_continue}>CONTINUE</Text>
            <View data-layer="962da951-7a1d-477c-bde8-fe4804cde192" style={styles.signIn_continue93fd6803_group6}>
                <Svg data-layer="a7793bdd-c19c-4781-9294-bb8c25321d7b" style={styles.signIn_continue93fd6803_group6_path79} preserveAspectRatio="none" viewBox="0 0 19 10.1490478515625" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0 10.14906787872314 L 3.422359943389893 4.838509559631348 L 0.3540372252464294 0 L 2.714285373687744 0 L 4.720496654510498 3.30434775352478 L 6.726707458496094 0 L 9.086956024169922 0 L 6.018633365631104 4.956521511077881 L 9.440993309020996 10.14906787872314 L 6.962733268737793 10.14906787872314 L 4.720496654510498 6.608695507049561 L 2.478260517120361 10.14906787872314 L 0 10.14906787872314 Z M 10.5031042098999 0 L 14.16149139404297 0 C 14.98757648468018 0 15.69565200805664 0.1180124208331108 16.04969024658203 0.2360248416662216 C 16.75776290893555 0.3540372550487518 17.22981262207031 0.7080745100975037 17.70186233520508 1.180124282836914 C 18.17391204833984 1.65217387676239 18.40993881225586 2.124223709106445 18.64596176147461 2.832298040390015 C 18.88198661804199 3.540372848510742 19 4.248447418212891 19 5.192546844482422 C 19 6.018633365631104 18.88198661804199 6.726707935333252 18.64596176147461 7.316769123077393 C 18.40993881225586 8.024845123291016 18.05590057373047 8.614907264709473 17.58384895324707 9.086956024169922 C 17.22981262207031 9.440994262695312 16.75776290893555 9.677018165588379 16.16770362854004 9.913043022155762 C 15.69565296173096 10.03105640411377 15.1055908203125 10.14906692504883 14.39751434326172 10.14906692504883 L 10.5031042098999 10.14906692504883 L 10.5031042098999 0 Z M 12.50931644439697 1.770186424255371 L 12.50931644439697 8.496894836425781 L 14.04347896575928 8.496894836425781 C 14.6335391998291 8.496894836425781 14.98757839202881 8.496894836425781 15.22360229492188 8.37888240814209 C 15.57763957977295 8.260869979858398 15.81366443634033 8.142857551574707 16.04969024658203 7.906832218170166 C 16.28571319580078 7.670807361602783 16.40372657775879 7.4347825050354 16.63975143432617 6.962732791900635 C 16.87577629089355 6.490683078765869 16.87577629089355 5.900620460510254 16.87577629089355 5.074533462524414 C 16.87577629089355 4.248447418212891 16.75776290893555 3.658384561538696 16.63975143432617 3.30434775352478 C 16.52173805236816 2.950310230255127 16.28571319580078 2.596273183822632 16.04969024658203 2.360248327255249 C 15.81366443634033 2.124223470687866 15.45962715148926 2.006211280822754 15.10558891296387 1.888198494911194 C 14.86956596374512 1.770186305046082 14.27950382232666 1.770186305046082 13.45341682434082 1.770186305046082 L 12.50931644439697 1.770186305046082 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="c1bb6132-fc48-492d-889d-a6af11ef0867" style={styles.signIn_header}>
            <View data-layer="c259d0c0-35a4-401c-aabb-e212be8d3b6c" style={styles.signIn_header_rectangle134}></View>
            <Text data-layer="d4ae8c06-7795-4965-bd66-c444b8c235f1" style={styles.signIn_header_signIn07e4b9df}>Sign in</Text>
        </View>
        <ScrollView data-layer="674cca54-5df3-4af7-a4c8-c71775244b78" style={styles.signIn_inputsff4f792e}>
            <View data-layer="e8b660a2-d273-468a-b99a-487926396d79" style={styles.signIn_inputsff4f792e_inputseb9189ed}>
                <View data-layer="9de6e69d-22f3-4fd3-a22f-42bb3a8dd1e8" style={styles.signIn_inputsff4f792e_inputseb9189ed_rectangle12330d7170b}></View>
                <Text data-layer="48cfd51e-acb1-4e8a-adff-434218e09859" style={styles.signIn_inputsff4f792e_inputseb9189ed_johndossse8d85530c}>johndoe@mail.com</Text>
            </View>
            <View data-layer="34a7146c-1749-4818-a3d4-13d4b7827812" style={styles.signIn_inputsff4f792e_inputs35575a80}>
                <View data-layer="20cb8882-30af-4552-92e4-533547949286" style={styles.signIn_inputsff4f792e_inputs35575a80_rectangle12359559d9c}></View>
                <Text data-layer="b8257735-4d49-48b3-8952-2c7ca8266fd6" style={styles.signIn_inputsff4f792e_inputs35575a80_johndossse71d1477b}>●●●●●●●</Text>
            </View>
            <View data-layer="99370b7c-c79f-4099-b019-66f5de1d97b8" style={styles.signIn_inputsff4f792e_inputs}>
                <View data-layer="03e37245-fb95-4112-9ec0-dce42b3a4f55" style={styles.signIn_inputsff4f792e_inputs_rectangle123}></View>
                <Text data-layer="61face7a-182a-4799-80bf-bb094a9b91ae" style={styles.signIn_inputsff4f792e_inputs_johndossse}>●●●●●●●</Text>
            </View>
        </ScrollView>
        <View data-layer="386715af-d697-4038-8ef1-00b863a81eec" style={styles.signIn_divider}></View>
    </ScrollView>
    );
  }
}

SignIn.propTypes = {

}

SignIn.defaultProps = {

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