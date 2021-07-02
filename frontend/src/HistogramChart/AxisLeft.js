import { useMemo } from 'react';

export const AxisLeft = ({ yScale, left, innerWidth, tickOffset = 3 }) => (
  <>
    {useMemo(
      () =>
        yScale.ticks(5).map((tickValue) => (
          <g
            key={tickValue}
            className="tick"
            transform={`translate(${left},${yScale(tickValue)})`}
          >
            <line x2={innerWidth} />
            <text style={{ textAnchor: 'end' }} x={-tickOffset} dy="0.32em">
              {tickValue}
            </text>
          </g>
        )),
      [yScale, left, innerWidth, tickOffset]
    )}
  </>
);
