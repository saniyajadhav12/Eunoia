import React from 'react';
import { View, Text } from 'react-native';
import styles from './InsightsScreen.styles';

const InsightsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Mood Insights</Text>
      <Text style={styles.subtitle}>Here's a quick look at your recent mood trends.</Text>

      {/* Chart Placeholder */}
      <View style={styles.chartBox}>
        <Text style={styles.chartText}>📊 Mood Chart Coming Soon</Text>
      </View>

      {/* Summary Boxes */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryLabel}>Most Frequent</Text>
          <Text style={styles.summaryValue}>😊</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryLabel}>Streak</Text>
          <Text style={styles.summaryValue}>3 days</Text>
        </View>
      </View>
    </View>
  );
};

export default InsightsScreen;
