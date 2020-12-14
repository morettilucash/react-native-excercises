import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ExcerciseOne from './components/excercise1/index';
import Excercise2 from './components/excercise2/index';

const App = () => {

  return <>
    <SafeAreaView>
      <View>
        <Excercise2 />
      </View>
    </SafeAreaView>
  </>
};


export default App;
