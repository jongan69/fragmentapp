import React, {Component} from 'react';

import PropTypes from "prop-types";

import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class QuestionnaireBool extends Component {

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
    <ScrollView data-layer="adb41076-8861-4f77-aabe-bb33d1ec7cf1" style={styles.questionnaireFinance2}>
        <View data-layer="75a88d70-9078-42e6-9e68-2577b4964bbf" style={styles.questionnaireFinance2_continue4251b33c}>
            <View data-layer="9cf8914a-abc6-46ea-91aa-daca2a0f2016" style={styles.questionnaireFinance2_continue4251b33c_rectangle13268fcfd9f}></View>
            <Text data-layer="b4ca8885-9950-4169-97c6-890566c27acd" style={styles.questionnaireFinance2_continue4251b33c_yes}>YES</Text>
        </View>
        <View data-layer="d9535660-d839-485c-902d-3ed16d319638" style={styles.questionnaireFinance2_headerfa1f36d1}>
            <View data-layer="32076f48-7949-4483-8a31-f347ed080f02" style={styles.questionnaireFinance2_headerfa1f36d1_rectangle1348a012d5f}></View>
            <Text data-layer="5eb449c0-8df0-4ab1-9884-1da034d781c4" style={styles.questionnaireFinance2_headerfa1f36d1_adobeXd}>ADOBE XD</Text>
        </View>
        <View data-layer="314e311f-67d3-41f7-ba03-56611bd972c8" style={styles.questionnaireFinance2_divider}></View>
        <View data-layer="5ddf857f-76a9-4bd0-9ba2-c7ab43d79275" style={styles.questionnaireFinance2_header}>
            <View data-layer="f407c03d-3e4b-4cac-a79b-b927f45d46d4" style={styles.questionnaireFinance2_header_rectangle134}></View>
            <Text data-layer="620a9476-d4e4-4288-a099-6533e2e14595" style={styles.questionnaireFinance2_header_finance}>Finance</Text>
        </View>
        <Text data-layer="3d08e00b-3311-4a0f-af87-efa6d6e6ff9c" style={styles.questionnaireFinance2_doYouHaveASavingsAccount}>Do you have a savings account?</Text>
        <View data-layer="868a4103-db4a-4297-a0e5-e836f93b8600" style={styles.questionnaireFinance2_continue}>
            <View data-layer="10d67e43-6f84-475e-a6a3-8cba1163e1e3" style={styles.questionnaireFinance2_continue_rectangle132}></View>
            <Text data-layer="010834f8-9256-4d9d-acf7-d35489ae4cb5" style={styles.questionnaireFinance2_continue_no}>NO</Text>
        </View>
        <Text data-layer="a7f8b699-c9a0-4e81-b37a-2a93aad71b30" style={styles.questionnaireFinance2_questionnaireFinance24c459d1660df}></Text>
    </ScrollView>
    );
  }
}

QuestionnaireFinance2.propTypes = {

}

QuestionnaireFinance2.defaultProps = {

}


const styles = StyleSheet.create({
  "questionnaireFinance2": {
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
  "questionnaireFinance2_continue4251b33c": {
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
    "top": 459
  },
  "questionnaireFinance2_continue4251b33c_rectangle13268fcfd9f": {
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
  "questionnaireFinance2_continue4251b33c_yes": {
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
    "width": 20,
    "height": 13,
    "left": 138,
    "top": 18.5
  },
  "questionnaireFinance2_headerfa1f36d1": {
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
  "questionnaireFinance2_headerfa1f36d1_rectangle1348a012d5f": {
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
  "questionnaireFinance2_headerfa1f36d1_adobeXd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 30,
    "fontWeight": "700",
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
    "width": 156,
    "height": 33,
    "left": 110,
    "top": 112
  },
  "questionnaireFinance2_divider": {
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
    "width": 295,
    "height": 4,
    "left": 40,
    "top": 402
  },
  "questionnaireFinance2_header": {
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
  "questionnaireFinance2_header_rectangle134": {
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
  "questionnaireFinance2_header_finance": {
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
    "width": 106,
    "height": 33,
    "left": 135,
    "top": 112
  },
  "questionnaireFinance2_doYouHaveASavingsAccount": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
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
    "width": 295,
    "height": 140,
    "left": 40,
    "top": 202
  },
  "questionnaireFinance2_continue": {
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
    "top": 524
  },
  "questionnaireFinance2_continue_rectangle132": {
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
  "questionnaireFinance2_continue_no": {
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
    "width": 15,
    "height": 13,
    "left": 141,
    "top": 18.5
  },
  "questionnaireFinance2_questionnaireFinance24c459d1660df": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
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
    "width": 0,
    "height": 0,
    "left": 218,
    "top": 369
  }
});