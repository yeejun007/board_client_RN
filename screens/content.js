import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          {/* <Header hasTabs /> */}
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Tab1">
              <Tab1 />
            </Tab>
            <Tab heading="Tab2">
              <Tab2 />
            </Tab>
            <Tab heading="Tab3">
              <Tab3 />
            </Tab>
            <Tab heading="Tab4">
              <Tab4 />
            </Tab>
            <Tab heading="Tab5">
              <Tab5 />
            </Tab>
          </Tabs>
        </Container>
        <Footer>
          <FooterTab>
            <Button active={false}>
              <Fontisto name="hipchat" size={30} color="gray" />
            </Button>
            <Button active={false}>
              <Fontisto name="hipchat" size={30} color="gray" />
            </Button>
            <Button active={false}>
              <Fontisto name="hipchat" size={30} color="gray" />
            </Button>
            <Button active={false}>
              <FontAwesome name="user-circle" size={30} color="gray" />
            </Button>
          </FooterTab>
        </Footer>
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default Content;
