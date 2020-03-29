import React, {Component} from 'react';

import PropTypes from "prop-types";

import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class QuestionnaireChecklist extends Component {


  render() {
    
    return (
    <ScrollView style={styles.questionnaireChecklist}>


        <Text style={styles.questionnaireChecklist_pleaseAnswerTheQuestionFromEachOfTheCategories}>To begin your journey, please answer questions from each of the following categories of stress..</Text>
       
        <TouchableOpacity style={styles.questionnaireChecklist_academicsButton}>
            <View style={styles.questionnaireChecklist_academicsButton_rectangle13268879b21}></View>
            <Text style={styles.questionnaireChecklist_academicsButton_academics}>ACADEMICS</Text>
            <View  style={styles.questionnaireChecklist_academicsButton_group4ef0cd32e}>
            </View>
        </TouchableOpacity>

        <View style={styles.questionnaireChecklist_dividerc2297785}></View>

        <TouchableOpacity style={styles.questionnaireChecklist_workButton}>
            <View style={styles.questionnaireChecklist_workButton_rectangle132bbf54e33}></View>
            <Text style={styles.questionnaireChecklist_workButton_work}>WORK</Text>
            <View style={styles.questionnaireChecklist_workButton_group40b68e599}>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questionnaireChecklist_financialButton}>
            <View style={styles.questionnaireChecklist_financialButton_rectangle132}></View>
            <Text style={styles.questionnaireChecklist_financialButton_financial}>FINANCIAL</Text>
            <View style={styles.questionnaireChecklist_financialButton_group4}>
            </View>
        </TouchableOpacity>

          <TouchableOpacity style={styles.questionnaireChecklist_login}>
            <View style={styles.questionnaireChecklist_login_rectangle133}></View>
            <Text style={styles.questionnaireChecklist_login_continue}>CONTINUE</Text>
            <View style={styles.questionnaireChecklist_login_group2}>
                <View style={styles.questionnaireChecklist_login_group2_rectangle1458}></View>
            </View>
        </TouchableOpacity>
    </ScrollView>
    );
  }
}

QuestionnaireChecklist.propTypes = {

}

QuestionnaireChecklist.defaultProps = {

}


const styles = StyleSheet.create({
  "questionnaireChecklist": {
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
  "questionnaireChecklist_login": {
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
    "top": 500
  },
  "questionnaireChecklist_login_rectangle133": {
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
  "questionnaireChecklist_login_continue": {
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
    "width": 52,
    "height": 13,
    "left": 122,
    "top": 18.5
  },
  "questionnaireChecklist_login_group2": {
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
  "questionnaireChecklist_login_group2_rectangle1458": {
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
  "questionnaireChecklist_login_group2_path1": {
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
  "questionnaireChecklist_academicsButton": {
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
    "top": 200
  },
  "questionnaireChecklist_academicsButton_rectangle13268879b21": {
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
  "questionnaireChecklist_academicsButton_academics": {
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
    "width": 60,
    "height": 13,
    "left": 118,
    "top": 18.5
  },
  "questionnaireChecklist_academicsButton_group4ef0cd32e": {
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
  "questionnaireChecklist_academicsButton_group4ef0cd32e_path79b0ad77ae": {
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
  "questionnaireChecklist_dividerc2297785": {
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
    "top": 166
  },
  "questionnaireChecklist_workButton": {
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
    "top": 300
  },
  "questionnaireChecklist_workButton_rectangle132bbf54e33": {
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
  "questionnaireChecklist_workButton_work": {
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
    "width": 32,
    "height": 13,
    "left": 132,
    "top": 18.5
  },
  "questionnaireChecklist_workButton_group40b68e599": {
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
  "questionnaireChecklist_workButton_group40b68e599_path799b2d09b3": {
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
  "questionnaireChecklist_divider40a01a2f": {
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
    "top": 313
  },
  "questionnaireChecklist_financialButton": {
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
    "top": 394
  },
  "questionnaireChecklist_financialButton_rectangle132": {
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
  "questionnaireChecklist_financialButton_financial": {
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
    "width": 54,
    "height": 13,
    "left": 121,
    "top": 18.5
  },
  "questionnaireChecklist_financialButton_group4": {
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
  "questionnaireChecklist_financialButton_group4_path79": {
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
  "questionnaireChecklist_financialButton_financialButton73d1cb518f23": {
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
    "width": 0,
    "height": 2,
    "left": 33,
    "top": 24.5
  },
  "questionnaireChecklist_divider": {
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
    "top": 570
  },
  "questionnaireChecklist_pleaseAnswerTheQuestionFromEachOfTheCategories": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(38, 153, 251, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "center",
    "lineHeight": 24,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 295,
    "height": 72,
    "left": 40,
    "top": 100
  },
  "questionnaireChecklist_header": {
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
  "questionnaireChecklist_header_rectangle134": {
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
  "questionnaireChecklist_header_questionaire": {
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
    "width": 196,
    "height": 33,
    "left": 90,
    "top": 112
  },
  "questionnaireChecklist_yes4518a64b": {
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
    "width": 24,
    "height": 24,
    "left": 287,
    "top": 406
  },
  "questionnaireChecklist_yes4518a64b_checkbox6df5be5a": {
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
    "width": 23.4,
    "height": 19,
    "left": 0,
    "top": 2
  },
  "questionnaireChecklist_yes4518a64b_rectangle55683286b7c": {
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
    "width": 18,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "questionnaireChecklist_yes6c6686df": {
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
    "width": 24,
    "height": 24,
    "left": 287,
    "top": 504
  },
  "questionnaireChecklist_yes6c6686df_checkbox0d60c8de": {
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
    "width": 23.4,
    "height": 19,
    "left": 0,
    "top": 2
  },
  "questionnaireChecklist_yes6c6686df_rectangle556c037c23f": {
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
    "width": 18,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "questionnaireChecklist_yes": {
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
    "width": 24,
    "height": 24,
    "left": 287,
    "top": 602
  },
  "questionnaireChecklist_yes_checkbox": {
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
    "width": 23.4,
    "height": 19,
    "left": 0,
    "top": 2
  },
  "questionnaireChecklist_yes_rectangle556": {
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
    "width": 18,
    "height": 18,
    "left": 0,
    "top": 0
  }
});