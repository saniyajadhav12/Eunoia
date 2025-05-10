import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#BFA2DB',
    opacity: 0.8,
  },
  phaseText: {
    marginTop: 40,
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  closeButton: {
    marginTop: 60,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 24,
  },
  closeText: {
    color: '#333',
    fontWeight: 'bold',
  },

});
