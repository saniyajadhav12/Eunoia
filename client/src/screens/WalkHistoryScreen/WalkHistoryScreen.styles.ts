// WalkHistoryScreen.styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  summary: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  entryBox: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  entryText: {
    fontSize: 16,
    color: '#222',
  },
  status: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '500',
  },
  completed: {
    color: 'green',
  },
  early: {
    color: 'orange',
  },
});
