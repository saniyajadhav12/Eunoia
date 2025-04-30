import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import styles from './SettingsScreen.styles';

const SettingsScreen = () => {
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Preferences</Text>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Reminders</Text>
        <Switch
          value={remindersEnabled}
          onValueChange={setRemindersEnabled}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
        />
      </View>

      <Text style={styles.sectionTitle}>Account</Text>

      <TouchableOpacity
        onPress={() => Alert.alert('Logout', 'Logout functionality coming soon!')}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
