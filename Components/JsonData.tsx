import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const JsonData = ({route}: any) => {
  const RawJson = route.params.input;

  console.log(RawJson);

  return (
    <View style={styles.View1}>
      <Text>{RawJson}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View1: {
    flex: 1,
    backgroundColor: '#ffffe0',
  },
});

export default JsonData;
