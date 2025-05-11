import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import styles from './InsightsScreen.styles';
import {PieChart} from 'react-native-chart-kit';
import {getMoodLog, MoodEntry} from '../../../utils/moodStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BarChart} from 'react-native-chart-kit';
import {format, subDays} from 'date-fns';

const screenWidth = Dimensions.get('window').width;

const InsightsScreen = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [walkData, setWalkData] = useState<{labels: string[]; data: number[]}>({
    labels: [],
    data: [],
  });

  useEffect(() => {
    const prepareChartData = async () => {
      const log: MoodEntry[] = await getMoodLog();

      // Count mood occurrences
      const moodCounts: Record<string, number> = {};
      log.forEach(entry => {
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

  useEffect(() => {
    const loadWalkData = async () => {
      try {
        const raw = await AsyncStorage.getItem('walkLog');
        const log = raw ? JSON.parse(raw) : [];

        // Group by day for last 7 days
        const today = new Date();
        const labels: string[] = [];
        const data: number[] = [];

        for (let i = 6; i >= 0; i--) {
          const day = subDays(today, i);
          const dayLabel = format(day, 'EEE');
          const dayKey = format(day, 'yyyy-MM-dd');

          labels.push(dayLabel);

          const count = log.filter((entry: any) =>
            entry.timestamp.startsWith(dayKey),
          ).length;
          data.push(count);
        }

        setWalkData({labels, data});
      } catch (err) {
        console.error('Failed to load walk data:', err);
      }
    };

    loadWalkData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
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
                  ? chartData.reduce((max, item) =>
                      item.population > max.population ? item : max,
                    ).name
                  : '-'}
              </Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryLabel}>Total Entries</Text>
              <Text style={styles.summaryValue}>
                {chartData.reduce((sum, item) => sum + item.population, 0)}
              </Text>
            </View>
          </View>

          <View style={{marginTop: 40}}>
            <Text style={styles.title}>Your Walk Insights</Text>
            <Text style={styles.subtitle}>Walks per Day (Last 7 Days)</Text>

            {walkData.data.length === 0 ? (
              <Text style={styles.subtitle}>No walk data available yet.</Text>
            ) : (
              <BarChart
                data={{
                  labels: walkData.labels,
                  datasets: [{data: walkData.data}],
                }}
                width={screenWidth - 32}
                height={220}
                yAxisInterval={1}
                yAxisLabel=""
                fromZero
                showValuesOnTopOfBars
                withInnerLines={false}
                withHorizontalLabels={true}
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0,
                  color: () => '#7FB77E',
                  labelColor: () => '#333',
                  propsForBackgroundLines: {
                    strokeDasharray: '', // remove dashed grid lines
                    strokeWidth: 0,
                  },
                }}
                style={{marginVertical: 10, borderRadius: 8, marginLeft: -12}}
                yAxisSuffix={''}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InsightsScreen;
