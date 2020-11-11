import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    backgroundColor: '#2980b9',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: '#ecf0f1',
    marginBottom: 20,
  },
  textInput: {
    padding: 5,
    backgroundColor: '#ecf0f1',
  },
  listItem: {
    marginVertical: 10,
  },
  listItemText: {
    fontSize: 17,
    color: '#ecf0f1',
  },
});

export default class InputList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      currentText: null,
    };
  }

  setCurrentText = (text) => this.setState({currentText: text});

  saveText = () => {
    const {list, currentText} = this.state;

    if (!currentText.length) {
      return;
    }

    const newList = [...list, currentText];
    this.setState({list: newList, currentText: ''});
  };

  renderList = (listItem, index) => (
    <TouchableOpacity
      onPress={() => this.deleteItem(listItem)}
      key={`listItem-${index}`}
      style={styles.listItem}>
      <Text style={styles.listItemText}>{listItem}</Text>
    </TouchableOpacity>
  );

  deleteItem = (listItem) => {
    Alert.alert('Alerta', `Quieres borrar "${listItem}"`, [
      {
        text: 'Si quiero',
        onPress: () => this.confirmDelete(listItem),
      },
      {
        text: 'No quiero',
      },
    ]);
  };

  confirmDelete = (listItem) => {
    const {list} = this.state;

    const newList = list.filter(
      (currentListItem) => currentListItem !== listItem,
    );

    this.setState({list: newList});
  };

  render() {
    const {currentText, list} = this.state;
    const listRenderElements = list.map(this.renderList);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista</Text>
        <TextInput
          value={currentText}
          placeholder="¿Qué quieres agregar a la lista?"
          style={styles.textInput}
          onChangeText={this.setCurrentText}
          onSubmitEditing={this.saveText}
          keyboardType="email-address"
        />
        {listRenderElements}
      </View>
    );
  }
}
