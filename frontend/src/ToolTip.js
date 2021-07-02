import React, { useMemo } from 'react';

export const ToolTip = ({ hoveredValue, hoveredData, mousePosition }) => {
  const styles = {
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
  };

  return (
    <div className="Tooltip" style={styles}>
      {useMemo(
        () => (
          <table>
            <thead>
              <tr>
                <th colSpan="2">{hoveredValue} County</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="1">Fully Vaccinated Cumulative</td>
                <td colSpan="1">
                  {hoveredData && hoveredData.fullyvaccinatedcumulative
                    ? hoveredData.fullyvaccinatedcumulative
                    : 'No Data'}
                </td>
              </tr>
              <tr>
                <td colSpan="1">Fully Vaccinated Today</td>
                <td colSpan="1">
                  {hoveredData && hoveredData.fullyvaccinated
                    ? hoveredData.fullyvaccinated
                    : 'No Data'}
                </td>
              </tr>
              <tr>
                <td colSpan="1">At Least One Dose Cumulative</td>
                <td colSpan="1">
                  {hoveredData && hoveredData.atleastonedosecumulative
                    ? hoveredData.atleastonedosecumulative
                    : 'No Data'}
                </td>
              </tr>
              <tr>
                <td colSpan="1">At Least One Dose Today</td>
                <td colSpan="1">
                  {hoveredData && hoveredData.atleastonedose
                    ? hoveredData.atleastonedose
                    : 'No Data'}
                </td>
              </tr>
            </tbody>
          </table>
        ),
        [hoveredData, hoveredValue]
      )}
    </div>
  );
};
