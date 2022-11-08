import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ListEmptyComp = (props) => {
  return (
    <View style={styles.emptyListStyle}>
      <Text style={styles.listEmptyTxt}>Nothing To Do</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Add New Task', {
            type: props.type,
          });
        }}
        style={styles.listEmptyBtn}>
        <Text style={styles.listEmptyBtnTxt}>ADD TASK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    emptyListStyle: {
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
      },
      listEmptyTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#301F6B',
      },
      listEmptyBtn: {
        marginTop: 20,
        backgroundColor: 'rgb(236,89,91)',
        height: 45,
        width: '45%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      listEmptyBtnTxt: {
        color: 'white',
        fontWeight: 'bold',
      },
})

export default ListEmptyComp;
