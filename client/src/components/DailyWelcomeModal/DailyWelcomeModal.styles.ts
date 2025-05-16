import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  moodRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  moodOption: {
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedMood: {
    borderColor: '#a88ffb',
    backgroundColor: '#eae6ff',
  },
  moodEmoji: {
    fontSize: 24,
  },
  submitButton: {
    backgroundColor: '#a88ffb',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  submitText: {
    color: 'white',
    fontWeight: '600',
  },
  skipButton: {
    marginTop: 4,
  },
  skipText: {
    color: '#999',
  },
});
