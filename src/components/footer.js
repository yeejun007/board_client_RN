import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Footer, FooterTab, Button} from 'native-base';

// Deprecated
class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active={true}>
            <FontAwesome name="edit" size={22} color="gray" />
            <Text style={styles.footerTxt}>board</Text>
          </Button>
          <Button active={false}>
            <Fontisto name="photograph" size={22} color="gray" />
            <Text style={styles.footerTxt}>photo</Text>
          </Button>
          <Button>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={22}
              color="gray"
            />
            <Text style={styles.footerTxt}>search</Text>
          </Button>
          <Button active={false}>
            <Entypo name="shop" size={22} color="gray" />
            <Text style={styles.footerTxt}>trade</Text>
          </Button>
          <Button active={false}>
            <AntDesign name="message1" size={22} color="gray" />
            <Text style={styles.footerTxt}>chat</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footerTxt: {color: 'gray'},
});

export default footer;
