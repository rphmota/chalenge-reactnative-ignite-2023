import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Done from '../../../assets/done.png';
import Undone from '../../../assets/undone.png';
import Trash from '../../../assets/trash.png';
import {style} from './styles';

interface ITask {
  text: string;
  done: boolean;
}
interface IProps {
  task: ITask;
  onDone?: () => void;
  onUnDone?: () => void;
  onRemove?: () => void;
}

export function Task({task, onDone, onUnDone, onRemove}: IProps) {
  return (
    <>
      <View style={style.taskContainer}>
        <TouchableOpacity
          style={style.done}
          onPress={task.done === false ? onDone : onUnDone}>
          <Image source={task.done === true ? Done : Undone} />
        </TouchableOpacity>
        <Text style={task.done === false ? style.taskText : style.TextDone}>
          {task.text}
        </Text>

        <TouchableOpacity onPress={onRemove}>
          <Image style={style.trashIcon} source={Trash} />
        </TouchableOpacity>
      </View>
    </>
  );
}
