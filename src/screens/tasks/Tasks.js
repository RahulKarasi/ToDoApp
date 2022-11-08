import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import { deleteTask } from '../../redux/actions/toDoActions';
import Header from '../../components/Header';

class Tasks extends React.Component {

    handleDeleteTask = (currId)=>{
        const {taskData,route: {params: {type}}} = this.props;
        const prevData = taskData[type]
        const newData = prevData.filter(tasks => tasks.id !== currId)
        // console.log(prevData);
        console.log(newData);
        this.props.pDeleteTask(newData,type)
    }

    handleEdit = (item,type)=>{
        this.props.navigation.navigate('Add New Task',{type,item,edit:true})
    }

  render() {

    const {navigation} = this.props;
    const {taskData,route: {params: {type},},} = this.props;
    // console.log(taskData[type]);

    

    return (
      <View style={styles.mainContainer}>
        <Header heading="Tasks" navigation={navigation} />
        <FlatList
          data={taskData[type]}
          renderItem={({item}) => {
            return (
              <View style={styles.taskSection}>
                <View style={styles.taskDetail}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={styles.operationSection}>
                  <TouchableOpacity onPress={()=>this.handleEdit(item,type)}>
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/editing.png')}
                    />
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={()=>this.handleDeleteTask(item.id)}>
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Add New Task', {
              type: type,
            });
          }}>
          <Image
            style={styles.addIcon}
            source={require('../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskData: state.toDoReducer,
  };
};

const mapDispatchToProps = {
    
    pDeleteTask: deleteTask
  };

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor:'red',
    flex: 1,
    // paddingHorizontal:10
  },
  taskSection: {
    backgroundColor:'#E6E6FA',
    margin: 10,
    borderRadius:20

  },
  taskDetail: {
    height: 90,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    fontWeight:'bold',
    fontSize: 25,
    color:'rgb(48,31,107)'
  },
  operationSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgb(48,31,107)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 52,
    alignItems: 'center',
  },
  editIcon: {
    height: 20,
    width: 20,
  },
  addIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
