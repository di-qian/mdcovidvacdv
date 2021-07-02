import { useMemo } from 'react';
import { geoAlbersUsa, geoPath } from 'd3';
const projection = geoAlbersUsa().translate([-3330, 800]).scale([15000]);
const path = geoPath(projection);
const missingDataColor = 'grey';

export const Marks = ({
  data,
  rowByCounty,
  onHover,
  hoveredValue,
  fadeOpacity,
  colorScale,
  colorValue,
}) => (
  <>
    {useMemo(
      () =>
        data.features.map((feature, i) => (
          <g
            key={i}
            className="geomarks"
            onMouseEnter={() => {
              onHover(feature.properties.county);
            }}
            onMouseOut={() => {
              onHover(null);
            }}
            opacity={
              hoveredValue && feature.properties.county === hoveredValue
                ? fadeOpacity
                : 1
            }
          >
            <path
              fill={
                rowByCounty.get(feature.properties.county)
                  ? colorScale(
                      colorValue(rowByCounty.get(feature.properties.county))
                    )
                  : missingDataColor
              }
              d={path(feature)}
            />
          </g>
        )),
      [
        rowByCounty,
        colorScale,
        colorValue,
        hoveredValue,
        data.features,
        fadeOpacity,
        onHover,
      ]
    )}
  </>
);
