import './Chart.scss'
import ChartBar from "./ChartBar";

const Chart = props => {
    const {dataPointList} = props;
    const valueList = dataPointList.map(point => point.value);
    const maxValue  = Math.max(...valueList);
    return (
        <div className="chart">
            {dataPointList.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />
            )}

        </div>
    )
}
export default Chart;