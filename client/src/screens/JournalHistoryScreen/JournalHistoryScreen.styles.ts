import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6D28D9',
  },
  entryBox: {
    backgroundColor: '#F9F9FF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
  },
  prompt: {
    fontWeight: '600',
    marginBottom: 4,
  },
  entry: {
    fontSize: 15,
    color: '#333',
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#999',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#8B5CF6',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f9f7ff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  deleteButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#FECACA',
    borderRadius: 6,
  },
  deleteText: {
    color: '#B91C1C',
    fontWeight: '500',
  },
});
