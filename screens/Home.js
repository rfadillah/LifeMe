import React, { Component } from 'react'
import { Box, Text } from 'native-base'
import { getAuth } from "firebase/auth"
import { app } from '../firebase';
import { BarChart } from 'react-native-chart-kit'
import { Dimensions } from "react-native";

export class Home extends Component {
  render() {
    
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };

    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [95, 45, 28, 78, 99, 43]
        }
      ]
    };

    const auth = getAuth(app)
    return (
      <Box>
        <Text> Home </Text>
        <Text>{auth.currentUser?.email}</Text>
        <BarChart
          // style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </Box>
    )
  }
}

export default Home
