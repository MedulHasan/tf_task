import { StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { BarChart, ruleTypes } from "react-native-gifted-charts";

const data = [
  {
    value: 900,
    frontColor: '#F6DB56',
    gradientColor: '#F6DB56',
    spacing: 2,
    label: '07 May',
  },
  {value: 600, frontColor: '#FAFAFA80', gradientColor: '#FAFAFA80'},

  {
    value: 400,
    frontColor: '#F6DB56',
    gradientColor: '#F6DB56',
    spacing: 2,
    label: '08 May',
  },
  {value: 800, frontColor: '#FAFAFA80', gradientColor: '#FAFAFA80'},

  {
    value: 20,
    frontColor: '#F6DB56',
    gradientColor: '#F6DB56',
    spacing: 2,
    label: '09 May',
  },
  {value: 700, frontColor: '#FAFAFA80', gradientColor: '#FAFAFA80'},

  {
    value: 680,
    frontColor: '#F6DB56',
    gradientColor: '#F6DB56',
    spacing: 2,
    label: '10 May',
  },
  {value: 0, frontColor: '#FAFAFA80', gradientColor: '#FAFAFA80'},

  {
    value: 500,
    frontColor: '#F6DB56',
    gradientColor: '#F6DB56',
    spacing: 2,
    label: '11 May',
  },
  {value: 450, frontColor: '#FAFAFA80', gradientColor: '#FAFAFA80'},
];

const Barchart = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
      <BarChart
        data={data}
        barWidth={15}
        spacing={16}
        yAxisThickness={1}
        xAxisThickness={1}
        yAxisColor={'lightgray'}
        xAxisColor={'lightgray'}
        yAxisTextStyle={{color: 'lightgray'}}
        stepValue={250}
        maxValue={1000}
        noOfSections={4}
        yAxisLabelTexts={['0', '250', '500', '750', '1000']}
        labelWidth={60}
        xAxisLabelTextStyle={{color: 'lightgray', textAlign: 'center'}}
    />
    )
}

export default Barchart

const Styles = (colors) => StyleSheet.create({})