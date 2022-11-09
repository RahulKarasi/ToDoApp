import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const date = () => {
    var now = new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    return now;
  };
  return (
    <View style={styles.container}>
      <View style={styles.emptyView} />
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Hello</Text>
        <Text style={styles.headerNameTxt}>Rahul</Text>
        <Text style={styles.date}>{date()}</Text>
      </View>
      <View style={styles.categorySection}>
        <TouchableOpacity
          style={styles.categories}
          onPress={() =>
            navigation.navigate('Tasks', {
              type: 'personal',
              title: "Personal Errands",
            })
          }>
          <Image
            style={styles.categoryIcon}
            source={require('../../assets/user.png')}
          />

          <Text style={styles.categoryTxt}>Personal Errands</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categories}
          onPress={() =>
            navigation.navigate('Tasks', {
              type: 'work',
              title: "Work Projects",
            })
          }>
            <Image
            style={styles.categoryIcon}
            source={require('../../assets/suitcase.png')}
          />
          <Text style={styles.categoryTxt}>Work Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categories}
          onPress={() =>
            navigation.navigate('Tasks', {
              type: 'grocery',
              title: "Grocery List",
            })
          }>
            <Image
            style={styles.categoryIcon}
            source={require('../../assets/grocery-cart.png')}
          />
          <Text style={styles.categoryTxt}>Grocery List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent:'space-evenly',
    // flex:1
  },
  emptyView: {
    height: 100,
  },
  date: {
    marginVertical: 10,
    color: 'rgb(48,31,107)',
  },
  header: {
    height: 160,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headerTxt: {
    fontSize: 45,
    color: 'rgb(48,31,107)',
  },
  headerNameTxt: {
    fontSize: 50,
    color: 'rgb(48,31,107)',
  },
  categorySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginTop:20
  },
  categoryIcon: {
    height: 27,
    width: 27,
    marginBottom:10
  },
  categories: {
    width: '45%',
    height: 150,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 5,
    backgroundColor: '#E6E6FA',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  categoryTxt: {
    color: 'rgb(48,31,107)',
  },
});

export default Home;
