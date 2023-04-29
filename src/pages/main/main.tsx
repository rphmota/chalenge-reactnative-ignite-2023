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
import React, {useState, useEffect} from 'react';
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
  const [taskDone, setTaskDone] = useState<number>(0);
  const [taskUndone, setTaskUnone] = useState<number>(0);

  //add a new task, if task text alredy been place a alert will appear
  const handleAddTask = () => {
    if (taskstate.text.trim()) {
      const taskExists = taskItens.some(item => item.text === taskstate.text);
      if (taskExists) {
        Alert.alert('Esta tarefa já existe.');
      } else {
        setTaskItens(prevState => [...prevState, taskstate]);
        setTaskstate({text: '', done: false});
      }
    } else {
      Alert.alert('Você não digitou nada.');
    }
  };

  //to do task as done
  const onDone = (task: ITask) => {
    const updatedTaskItens = taskItens.map(item =>
      item.text === task.text ? {...item, done: true} : item,
    );
    setTaskItens(updatedTaskItens);
  };
  //To undo de task
  const onUnDone = (task: ITask) => {
    const updatedTaskItens = taskItens.map(item =>
      item.text === task.text ? {...item, done: false} : item,
    );
    setTaskItens(updatedTaskItens);
  };
  const onRemove = (task: ITask) => {
    const updatedTaskItens = taskItens.filter(item => item.text !== task.text);
    setTaskItens(updatedTaskItens);
  };

  useEffect(() => {
    const doneTasks = taskItens.filter(task => task.done).length;
    setTaskDone(doneTasks);
    setTaskUnone(taskItens.length - doneTasks);
  }, [taskItens]);

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
                <Text style={styles.taskCreatedDoneNumberText}>
                  {taskUndone}
                </Text>
              </View>
            </View>
            <View style={styles.containerTaskCreated}>
              <Text style={styles.taskCreatedDoneText}>Concluídas</Text>
              <View style={styles.containerNumberText}>
                <Text style={styles.taskCreatedDoneNumberText}>{taskDone}</Text>
              </View>
            </View>
          </View>

          {taskItens.length > 0 ? (
            <FlatList
              data={taskItens}
              keyExtractor={item => item.text}
              renderItem={({item}) => (
                <Task
                  onDone={() => onDone(item)}
                  onUnDone={() => onUnDone(item)}
                  onRemove={() => onRemove(item)}
                  task={item}
                />
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
