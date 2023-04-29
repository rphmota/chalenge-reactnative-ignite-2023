import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 8,
    paddingRight: 12,
    marginVertical: 8,
    width: 327,
    height: 64,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  containerTrash: {
    width: 32,
    height: 32,
    borderRadius: 4,
    flex: 0,
    flexGrow: 0,
  },
  taskText: {
    width: 235,
    height: 40,

    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#F2F2F2',
    flex: 1,
    flexGrow: 1,
  },
  done: {
    width: 24,
    height: 24,
    marginRight: 8,

    /* Inside auto layout */

    flex: 0,
    alignSelf: 'flex-start',
    flexGrow: 0,
  },
  trashIcon: {
    width: 32,
    height: 32,
    borderRadius: 4,

    // Inside auto layout
    flex: 0,

    flexGrow: 0,
  },
  TextDone: {
    width: 235,
    height: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,

    textDecorationLine: 'line-through',
    color: '#808080',
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    order: 1,
  },
});
