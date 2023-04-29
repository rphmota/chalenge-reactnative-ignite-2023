import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import React from 'react';
import Logo from '../../../assets/Logo.png';
import Plus from '../../../assets/plus.png';
import Clipboard from '../../../assets/Clipboard.png';
export function Main() {
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
            style={styles.input}
          />
          <TouchableOpacity style={styles.button}>
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
          <View style={styles.containerTaskIsEmpty}>
            <Image source={Clipboard} />
            <Text style={styles.textOneEmpty}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.textTwoEmpty}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
