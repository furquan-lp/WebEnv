import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { colors0, colors1 } from "./ComponentStyles";
import utils from '../services/WEUtils';

const manufactureChartData = (chartData) => {
  return {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data
      }
    ]
  };
};

const EnvChart = ({ chartData, chartType }) => <View style={{ marginTop: 200, alignItems: 'center' }}>
  <LineChart
    data={manufactureChartData(chartData)}
    width={utils.isWeb() ? 470 : Dimensions.get("window").width - 10} // from react-native
    height={220}
    yAxisSuffix={chartType == 0 ? '°C' : '%'}
    yAxisInterval={2}
    chartConfig={{
      backgroundColor: colors0.bluel,
      backgroundGradientFrom: colors0.bluel,
      backgroundGradientTo: colors1.blued,
      backgroundGradientToOpacity: 0.5,
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: colors0.bluel
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>;

export default EnvChart;