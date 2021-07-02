import { useRef, useEffect, useMemo } from 'react';
import {
  scaleLinear,
  scaleTime,
  max,
  timeFormat,
  extent,
  bin,
  timeDays,
  sum,
  brushX,
  select,
} from 'd3';

import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const margin = { top: 10, right: 0, bottom: 65, left: 100 };
const xAxisLabelOffset = 45;
const yAxisLabelOffset = 75;

const TimeChart = ({ data, width, height, setBrushExtent, xValue }) => {
  const brushRef = useRef();

  const xAxisLabel = 'Date';

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d['fullyvaccinatedcumulative'];
  const yAxisLabel = 'Cumulative';

  const xAxisTickFormat = timeFormat('%m/%d/%Y');

  const xScale = useMemo(
    () =>
      scaleTime()
        .domain(extent(data, xValue))
        .range([margin.left, width])
        .nice(),
    [data, xValue, width]
  );

  const binnedData = useMemo(() => {
    const [start, stop] = xScale.domain();
    return bin()
      .value(xValue)
      .domain(xScale.domain())
      .thresholds(timeDays(start, stop))(data)
      .map((array) => ({
        y: sum(array, yValue),
        x0: array.x0,
        x1: array.x1,
      }));
  }, [xValue, yValue, xScale, data]);

  const yScale = useMemo(
    () =>
      scaleLinear()
        .domain([0, max(binnedData, (d) => d.y)])
        .range([innerHeight, 0]),
    [binnedData, innerHeight]
  );

  useEffect(() => {
    const brush = brushX().extent([
      [margin.left, margin.top],
      [width, innerHeight + margin.top],
    ]);
    brush(select(brushRef.current));

    brush.on('brush end', (event) => {
      setBrushExtent(event.selection && event.selection.map(xScale.invert));
    });
  }, [innerWidth, innerHeight, setBrushExtent, width, xScale.invert]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(0,${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={7}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset + margin.left}, ${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>

        <AxisLeft
          yScale={yScale}
          left={margin.left}
          innerWidth={innerWidth}
          tickOffset={7}
        />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={(d) => d}
          circleRadius={2}
          innerHeight={innerHeight}
        />
      </g>
      <g ref={brushRef} />
    </svg>
  );
};

export default TimeChart;
