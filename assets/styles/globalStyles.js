import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';

const globalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('Raleway', 600),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default globalStyles;
