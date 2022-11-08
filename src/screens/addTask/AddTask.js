import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTask, editTask} from '../../redux/actions/toDoActions';
import Header from '../../components/Header';

export class AddTask extends Component {
  constructor(props) {
    super(props);
    const {
      route: {params},
    } = props;
    this.state = {
      title: params?.item?.title || '',
      description: params?.item?.description || '',
    };
  }

  handleAddTodo = () => {
    const {
      taskData,
      route: {
        params: {type, item, edit},
      },
    } = this.props;

    if (edit) {
      const prevData = taskData[type];
      const finalData = prevData.map(element => {
        if (element.id === item.id) {
          return {
            ...element,
            title: this.state.title,
            description: this.state.description,
          };
        } else {
          return element;
        }
      });
      // console.log('finalData',finalData);
      this.props.pEditTask(finalData, type);
    } else {
      const newTask = {
        title: this.state.title,
        description: this.state.description,
        id: +new Date(),
      };

      taskData[type].push(newTask);
      // console.log('taskData[type]',taskData[type])

      this.props.pAddTask(taskData[type], type);
      // this.props.navigation.navigate('Tasks')
    }
    this.props.navigation.goBack();
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <Header heading="Add Task" navigation={navigation} />
        <View style={styles.content}>
          <TextInput
            value={this.state.title}
            onChangeText={text => this.setState({title: text})}
            style={styles.inputTxt}
            placeholder="   Enter title"></TextInput>
          <TextInput
            value={this.state.description}
            onChangeText={text => this.setState({description: text})}
            style={styles.inputTxt}
            placeholder="   Enter description"></TextInput>
          <TouchableOpacity
            onPress={() => this.handleAddTodo()}
            style={styles.btn}>
            <Text style={styles.btnTxt}>ADD TASK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  pAddTask: addTask,
  pEditTask: editTask,
};

const mapStateToProps = state => {
  return {
    taskData: state.toDoReducer,
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '45%',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop:20
  },
  inputTxt: {
    width: '90%',
    height: 50,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: 'rgb(236,89,91)',
    height: 45,
    width: '45%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
