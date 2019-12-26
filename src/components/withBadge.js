import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Badge} from 'native-base';

const WithBadge = (value, options = {}) => WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // value 관리는 redux로 해야할듯
        value: value,
        focused: this.props.focused,
        badgeWidth: 19,
      };
    }

    widthFunc = () => {
      if (this.state.value > 99) {
        return 32;
      } else if (this.state.value > 9) {
        return 25;
      } else {
        return 19;
      }
    };

    render() {
      // console.log(this.props);
      const badgeValue = this.state.value > 99 ? '99+' : value;
      const width = this.widthFunc();
      const {
        height = 18,
        top = -6,
        left = 8,
        hidden = !value,
        ...badgeProps
      } = options;
      return (
        <View>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              style={[
                styles.badgeContainer,
                styles.badge,
                {height, width, top, left},
              ]}
              {...badgeProps}>
              <Text style={styles.badgeText}>{badgeValue}</Text>
            </Badge>
          )}
        </View>
      );
    }
  };

const styles = StyleSheet.create({
  badge: {},
  badgeContainer: {
    position: 'absolute',
  },
  badgeText: {
    fontSize: 11,
    color: 'white',
    // paddingHorizontal: 0,
  },
});

export default WithBadge;
