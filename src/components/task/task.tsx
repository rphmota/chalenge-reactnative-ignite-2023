import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Done from '../../../assets/done.png';
import Undone from '../../../assets/undone.png';
import Trash from '../../../assets/trash.png';
import {style} from './styles';
interface IProps {
  text: string;
  done: boolean;
}

export function Task({text, done}: IProps) {
  const [task, setTask] = useState<IProps>({text, done});
  function handleDoneTask() {
    if (!task.done) {
      setTask({text: task.text, done: true});
    } else {
      setTask({text: task.text, done: false});
    }
  }
  return (
    <>
      {console.log(task)}
      <View style={style.taskContainer}>
        <TouchableOpacity style={style.done} onPress={handleDoneTask}>
          <Image source={task.done === true ? Done : Undone} />
        </TouchableOpacity>
        <Text style={task.done === false ? style.taskText : style.TextDone}>
          {task.text}
        </Text>

        <TouchableOpacity>
          <Image style={style.trashIcon} source={Trash} />
        </TouchableOpacity>
      </View>
    </>
  );
}
