import { useMemo } from 'react';

export const Marks = ({
  binnedData,
  xScale,
  yScale,
  tooltipFormat,
  innerHeight,
}) => (
  <>
    {useMemo(
      () =>
        binnedData.map((d) => (
          <rect
            key={d.x0}
            className="mark"
            x={xScale(d.x0)}
            y={yScale(d.y)}
            width={xScale(d.x1) - xScale(d.x0)}
            height={innerHeight - yScale(d.y)}
          >
            <title>{tooltipFormat(d.y)}</title>
          </rect>
        )),
      [binnedData, xScale, yScale, tooltipFormat, innerHeight]
    )}
  </>
);
