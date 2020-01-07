import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import EachAlert from '../components/each_alert';
import {json} from '../fake_data/fake_data_alert';

export class AlertScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: json.data,
    };
  }

  // this.state.data의 alert속성 종류에 따라 어떤 스크린으로 navigate할지 결정해야 함

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
          {this.state.data.map((objData, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => {}}>
                <EachAlert data={objData} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{height: 50, backgroundColor: '#021b02'}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#021b02'},
});

export default AlertScreen;
