import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Dimensions } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Badge } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


import PureChart from 'react-native-pure-chart';

export default class App extends Component {


  state = {
    currentId: 1

  }

  // Later on in your component
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      ...Ionicons.font,
    });
  }


  changeId = id => { 
    this.setState({ 
      currentId: id
    })
  }

  showVideo = () => { 
    const {currentId} = this.state;

    switch(currentId){ 
      case 1: 
        return "https://www.youtube.com/embed/MgaKDY1M4Pc"

      case 2: 
        return "https://www.youtube.com/embed/Aznb7eemR_s"

      default: 
        return "https://www.youtube.com/embed/MgaKDY1M4Pc"
    }
  }

  render() {
    console.log(this.state.currentId)

    const BUTTONS1 = [
      {
        name: 'Apps',
        iconName: 'apps',
        id: 1
      },

      {
        name: 'Camera',
        iconName: 'camera',
        id: 2
      },


      {
        name: 'Navigate',
        iconName: 'navigate',
        id: 3
      },

      {
        name: 'Contact',
        iconName: 'person',
        id: 4
      },
      {
        name: 'ETC',
        iconName: 'arrow-dropleft',
        id: 5
      },
    ]


    const BUTTONS2 = [
      {
        name: 'Apps',
        iconName: 'apps',
        id: 6
      },

      {
        name: 'Camera',
        iconName: 'camera',
        id: 7
      },


      {
        name: 'Navigate',
        iconName: 'navigate',
        id: 8
      },

      {
        name: 'Contact',
        iconName: 'person',
        id: 9
      },
      {
        name: 'ETC',
        iconName: 'arrow-dropleft',
        id: 10
      },
    ]

    const screenWidth = Math.round(Dimensions.get('window').width);

    let sampleData = [
      {
        value: 50,
        label: 'Marketing',
        color: '#003f5c',
      }, {
        value: 40,
        label: 'Sales',
        color: '#58508d'
      },

      {
        value: 25,
        label: 'Support',
        color: '#ffa600'
      },
      {
        value: 30,
        label: 'Funds',
        color: '#bc5090',
      }, {
        value: 10,
        label: 'HR',
        color: '#ff6361'
      },
    ]

    return (
      <Container style={styles.container}>

        <Header>
          <Body>
            <Text style={{ color: 'white', fontSize: 25, }}>Header</Text>
          </Body>
        </Header>

        <Content>
          <View style={{ borderWidth: 2, borderColor: 'lightgrey', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', }}>
            <PureChart data={sampleData} type='pie'> </PureChart>
            <Text style={{ fontSize: 15, position: 'absolute', right: 40, top: -25 }}>Marketing<Text style={{ fontSize: 80, color: '#003f5c', }}>.</Text></Text>
            <Text style={{ fontSize: 15, position: 'absolute', right: 40, }}>HR<Text style={{ fontSize: 80, color: '#ff6361' }}>.</Text></Text>
            <Text style={{ fontSize: 15, position: 'absolute', right: 40, top: 25 }}>Support<Text style={{ fontSize: 80, color: '#ffa600' }}>.</Text></Text>
            <Text style={{ fontSize: 15, position: 'absolute', right: 40, top: 50 }}>Funds<Text style={{ fontSize: 80, color: '#bc5090' }}>.</Text></Text>
            <Text style={{ fontSize: 15, position: 'absolute', right: 40, top: 75 }}>Sales<Text style={{ fontSize: 80, color: '#58508d' }}>.</Text></Text>

          </View>


          <WebView
            style={{ width: screenWidth, height: 200, marginTop: 0 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: this.showVideo() }}
          />

        </Content>


        <View style={styles.footer}>
          <Footer>
            <FooterTab style={{ backgroundColor: 'white' }}>


              {BUTTONS1.map(item => ( 
                <Button vertical key = {item.id} onPress = {() => this.changeId(item.id)}>
                  <Icon name = {item.iconName}/>
                  <Text>{item.name}</Text>
                </Button>
              ))}

            </FooterTab>
          </Footer>

          <Footer >
            <FooterTab style={{ backgroundColor: 'white', }}>



            {BUTTONS2.map(item => ( 
                <Button vertical key = {item.id} onPress = {() => this.changeId(item.id)}>
                  <Icon name = {item.iconName}/>
                  <Text>{item.name}</Text>
                </Button>
              ))}

            </FooterTab>
          </Footer>
        </View>

      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    color: 'white',
  },

  chart: {
    height: 100,
    width: 100,


  },

  footer: {
    borderTopWidth: 2,
    borderColor: 'black',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: 20,
    paddingTop: 15,
  },

  textCont: {
    fontSize: 10,
    color: 'black',
    fontWeight: '500',
  }
});
