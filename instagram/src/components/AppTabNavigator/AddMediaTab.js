import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Icon } from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class AddMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  };

  selectPicutre = () => {
    // ImagePicker.showImagePicker({}, response => {
    //   if (response.didCancel) {
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //   }
    // });
  };

  render() {
    console.log(this.props.navigation);
    return (
      <View style={style.container}>
        <Button title="사진 선택" onPress={this.selectPicutre} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
