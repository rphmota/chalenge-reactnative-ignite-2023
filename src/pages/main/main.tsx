import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import React, {useState} from 'react';
import Logo from '../../../assets/Logo.png';
import Plus from '../../../assets/plus.png';
import Clipboard from '../../../assets/Clipboard.png';
import {Task} from '../../components/task/task';

interface ITask {
  text: string;
  done: boolean;
}

export function Main() {
  const [taskstate, setTaskstate] = useState<ITask>({text: '', done: false});
  const [taskItens, setTaskItens] = useState<ITask[]>([]);

  const handleAddTask = () => {
    if (taskstate.text.trim()) {
      setTaskItens(prevState => [...prevState, taskstate]);
      setTaskstate({text: '', done: false});
    } else {
      Alert.alert('Você não digitou nada na tarefa.');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={text => setTaskstate({text, done: false})}
            style={styles.input}
            value={taskstate.text}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={Plus} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerTasks}>
          <View style={styles.containerTasksDivision}>
            <View style={styles.containerTaskCreated}>
              <Text style={styles.taskCreatedDoneText}>Criadas</Text>
              <View style={styles.containerNumberText}>
                <Text style={styles.taskCreatedDoneNumberText}>0</Text>
              </View>
            </View>
            <View style={styles.containerTaskCreated}>
              <Text style={styles.taskCreatedDoneText}>Concluídas</Text>
              <View style={styles.containerNumberText}>
                <Text style={styles.taskCreatedDoneNumberText}>0</Text>
              </View>
            </View>
          </View>
          {taskItens.length > 0 ? (
            <FlatList
              data={taskItens}
              keyExtractor={item => item.text}
              renderItem={({item}) => (
                <Task done={item.done} text={item.text} />
              )}
            />
          ) : (
            <View style={styles.containerTaskIsEmpty}>
              <Image source={Clipboard} />
              <Text style={styles.textOneEmpty}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textTwoEmpty}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
}
