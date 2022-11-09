import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {connect} from 'react-redux';
import {
  deleteTask,
  editTask,
  isCompleted,
} from '../../redux/actions/toDoActions';
import Header from '../../components/Header';
import ListEmptyComp from '../../components/ListEmptyComp';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleCheckBox: false,
    };
  }

  handleDeleteTask = currId => {
    const {
      taskData,
      route: {
        params: {type},
      },
    } = this.props;
    const prevData = taskData[type];
    const newData = prevData.filter(tasks => tasks.id !== currId);
    // console.log(prevData);
    // console.log(newData);
    this.props.pDeleteTask(newData, type);
  };

  handleEdit = (item, type) => {
    this.props.navigation.navigate('Add New Task', {type, item, edit: true});
  };

  changeStatus = (newVal, item) => {
    console.log(newVal);
    const {
      taskData,
      route: {
        params: {type},
      },
    } = this.props;
    const prevData = taskData[type];
    const finalData = prevData.map(element => {
      if (element.id === item.id) {
        return {
          ...element,
          isCompleted: newVal,
        };
      } else {
        return element;
      }
    });
    this.props.pEditTask(finalData, type);
  };

  render() {
    const {navigation} = this.props;
    const {
      taskData,
      route: {
        params: {type},
      },
    } = this.props;
    console.log(taskData[type]);

    //  console.log(this.props.route);
    return (
      <View style={styles.mainContainer}>
        <Header
          heading={this.props.route.params.title}
          navigation={navigation}
        />
        
        
        <FlatList
          data={taskData[type]}
          renderItem={({item}) => {
            return (
              <View style={styles.taskSection}>
                <View style={styles.taskDetail}>
                  <CheckBox
                    disabled={taskData[type].isCompleted}
                    value={item.isCompleted}
                    onValueChange={newVal => {
                      this.changeStatus(newVal, item);
                    }}
                  />
                  <View style={styles.taskData}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                </View>

                <View style={styles.operationSection}>
                  <TouchableOpacity onPress={() => this.handleEdit(item, type)}>
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/editing.png')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.handleDeleteTask(item.id)}>
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return <ListEmptyComp navigation={navigation} type={type} />;
          }}
        />
  
        {/* <Text>Completed Tasks</Text> */}
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
  pEditTask: editTask,
  pDeleteTask: deleteTask,
  pIsCompleted: isCompleted,
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  taskSection: {
    backgroundColor: '#E6E6FA',
    margin: 10,
    borderRadius: 20,
  },
  taskDetail: {
    height: 90,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskData: {
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'rgb(48,31,107)',
    marginBottom: 3,
  },
  description: {
    color: 'rgb(48,31,107)',
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

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
