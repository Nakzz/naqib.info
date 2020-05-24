import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

type Props = {
  data: {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
    [key: string]: any;
  }[];
};


function FullOption(props: Props) {
  const [selected, setSelected] = useState<number | undefined>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);


  // console.log(props)
  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const lineWidth = 30;

  return (
    <PieChart
      style={{
        height: '100%',
        fontFamily:
          '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
        fontSize: '8px',
      }}
      data={data}

      
      // radius={PieChart.defaultProps.radius - 6}
      lineWidth={lineWidth}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
      
      // labelPosition={100 - lineWidth / 2}
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={(index) => ({
        fill: data[index].color,
        fontSize: '5px',
        fontFamily: 'sans-serif',
      })}
      radius={22}
      labelPosition={112}
      animate 
      rounded

      onClick={(_, index) => {
        setSelected(index === selected ? undefined : index);
      }}
      onMouseOver={(_, index) => {
        setHovered(index);
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}
    />
  );
}

export default FullOption;