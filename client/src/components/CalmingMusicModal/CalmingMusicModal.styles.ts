import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#BFA2DB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
