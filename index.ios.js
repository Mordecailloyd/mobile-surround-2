/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MobileSurround2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeVerificationThreshold: 3,
      timeVerificationNum: 0,
      timeVerificationBool: false,
      pos: "foo"
    };
    this.tick = this.tick.bind(this);
    this.posUpdate = this.posUpdate.bind(this);
    this.geoTimeMedian = this.geoTimeMedian.bind(this);

  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  audioStop(){

  }



  audioPlay(){



  }


  geoTimeMedian(pos){
    if (this.timeVerificationNum === this.timeVerificationThreshold
      && this.timeVerificationBool === true){
        setTimeout(this.audioPlay,(this.state.date-pos.timestamp)*1000);
        this.setState({timeVerificationBool: false});
        this.setState({timeVerificationNum: 0});
    }
    else{
      this.setState({timeVerificationNum: this.state.timeVerificationNum + 1});
    }
  }

  startAudioCallback(date,audioID){
    this.timeVerificationBool = true;
    this.setState({date: date});
    for (var i = 0; i < 5; i++) {
      window.navigator.geolocation.getCurrentPosition(
        (pos)=>{
          this.geoTimeMedian(pos);
        }
      );
    }
  }

  timeUpdate(time){
    this.setState({time: time});
  }

  tick() {
    window.navigator.geolocation.getCurrentPosition(
      (geoStamp)=>{
        // console.log({pos});
        this.timeUpdate(geoStamp.timestamp);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.time} is time</Text>
      </View>
    );
  }
}


//
//
//   render() {
//
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



// Import the react-native-sound module
var Sound = require('react-native-sound');
// Enable playback in silence mode (iOS only)
Sound.setCategory('Playback');


var maldicion = new Sound('MusicSamples/maldicion.m4a', '', (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + maldicion.getDuration() + 'number of channels: ' + maldicion.getNumberOfChannels());
});
// Play the sound with an onEnd callback
maldicion.play((success) => {
  if (success) {
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});


// Reduce the volume by half
// maldicion.setVolume(0.5);

// Position the sound to the full right in a stereo field
// maldicion.setPan(1);

// Loop indefinitely until stop() is called
// maldicion.setNumberOfLoops(-1);

// Get properties of the player instance
console.log('volume: ' + maldicion.getVolume());
console.log('pan: ' + maldicion.getPan());
console.log('loops: ' + maldicion.getNumberOfLoops());

// Seek to a specific point in seconds
// maldicion.setCurrentTime(2.5);

// Get the current playback point in seconds
// maldicion.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
// maldicion.pause();

// Stop the sound and rewind to the beginning
// maldicion.stop(() => {
//   // Note: If you want to play a sound after stopping and rewinding it,
//   // it is important to call play() in a callback.
//   maldicion.play();
// });

// Release the audio player resource
// maldicion.release();

maldicion.play();
let myDate = Date.now();










AppRegistry.registerComponent('MobileSurround2', () => MobileSurround2);
