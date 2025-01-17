import React, { useState } from 'react';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView style={styles.centeredView}>
    <Modal
    animationType="slide"
    visible={modal}
    onRequestClose={() => {setModal(!modal)}}>
    <View style={styles.container}>
    <Text>This is modal...</Text>
      <Pressable onPress={() => setModal(!modal)}>
        <Text>Close</Text>
      </Pressable>
    </View>
    </Modal>
    <Pressable
    onPress={() => setModal(true)}
    >
      <Text>Show modal message</Text>
    </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
