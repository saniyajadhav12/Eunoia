import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './InsightsScreen.styles';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const dummyData = [
  { name: '😊', mood: 'Happy', count: 4, color: '#A78BFA', legendFontColor: '#333', legendFontSize: 14 },
  { name: '😐', mood: 'Neutral', count: 2, color: '#FBBF24', legendFontColor: '#333', legendFontSize: 14 },
  { name: '😔', mood: 'Sad', count: 1, color: '#60A5FA', legendFontColor: '#333', legendFontSize: 14 },
];

const chartData = dummyData.map((item) => ({
  name: item.mood,
  population: item.count,
  color: item.color,
  legendFontColor: item.legendFontColor,
  legendFontSize: item.legendFontSize,
}));

const InsightsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Mood Insights</Text>
      <Text style={styles.subtitle}>Here's a quick look at your recent mood trends.</Text>

      {/* Chart Placeholder */}
      <Text style={styles.title}>Your Mood Insights</Text>
      <Text style={styles.subtitle}>Last 7 Days</Text>

      <PieChart
        data={chartData}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: () => '#555',
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'16'}
        center={[0, 0]}
        absolute
      />

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
