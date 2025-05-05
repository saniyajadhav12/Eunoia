import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './InsightsScreen.styles';
import { PieChart } from 'react-native-chart-kit';
import { getMoodLog, MoodEntry } from '../../../utils/moodStorage';

const screenWidth = Dimensions.get('window').width;

const InsightsScreen = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const prepareChartData = async () => {
      const log: MoodEntry[] = await getMoodLog();

      // Count mood occurrences
      const moodCounts: Record<string, number> = {};
      log.forEach((entry) => {
        moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
      });

      // Assign colors (fallback in case new moods are added)
      const moodColors: Record<string, string> = {
        '😊': '#A78BFA',
        '😐': '#FBBF24',
        '😔': '#60A5FA',
        '😡': '#F87171',
        '🥳': '#34D399',
      };

      // Build chart data
      const data = Object.entries(moodCounts).map(([mood, count]) => ({
        name: mood,
        population: count,
        color: moodColors[mood] || '#888',
        legendFontColor: '#333',
        legendFontSize: 14,
      }));

      setChartData(data);
    };

    prepareChartData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Mood Insights</Text>
      <Text style={styles.subtitle}>Last 7 Days</Text>

      {chartData.length === 0 ? (
        <Text style={styles.subtitle}>No mood data available yet.</Text>
      ) : (
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
      )}

      <View style={styles.summaryRow}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryLabel}>Most Frequent</Text>
          <Text style={styles.summaryValue}>
            {chartData.length > 0
              ? chartData.reduce((max, item) => (item.population > max.population ? item : max)).name
              : '-'}
          </Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryLabel}>Total Entries</Text>
          <Text style={styles.summaryValue}>{chartData.reduce((sum, item) => sum + item.population, 0)}</Text>
        </View>
      </View>
    </View>
  );
};

export default InsightsScreen;
