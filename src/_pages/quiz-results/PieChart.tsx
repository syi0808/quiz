'use client';

import { useEffect, useRef } from 'react';
import * as sx from '@stylexjs/stylex';
import { EChartsOption, init } from 'echarts';
import { PRIMARY_GREEN, RED } from '@/shared/styles/tokens.stylex';

const getOptions = ({
  correctAnswerCount,
  incorrectAnswerCount,
}: {
  correctAnswerCount: number;
  incorrectAnswerCount: number;
}): EChartsOption => ({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      type: 'pie',
      radius: ['20%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 4,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 28,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: correctAnswerCount, name: 'Correct Answers', itemStyle: { color: PRIMARY_GREEN } },
        { value: incorrectAnswerCount, name: 'Incorrect Answers', itemStyle: { color: RED } },
      ],
    },
  ],
});

export default function PieChart({
  correctAnswerCount,
  incorrectAnswerCount,
}: {
  correctAnswerCount: number;
  incorrectAnswerCount: number;
}) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = init(chartRef.current);

      chart.setOption(getOptions({ correctAnswerCount, incorrectAnswerCount }));
    }
  }, [correctAnswerCount, incorrectAnswerCount]);

  return <div ref={chartRef} {...sx.props(styles.chartContainer)} />;
}

const styles = sx.create({
  chartContainer: {
    width: '350px',
    height: '350px',
  },
});
