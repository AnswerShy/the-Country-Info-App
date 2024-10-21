import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function CountryPage_Population({ data }) {
    useEffect(() => {
        if (!Array.isArray(data) || data.length === 0) {
            return;
        }

        const xValues = data.map(item => item.year);
        const yValues = data.map(item => item.value);

        const existingChart = Chart.getChart("myChart");

        if (existingChart) {
            existingChart.destroy();
        }

        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    label: "population",
                    fill: false,
                    lineTension: 0,
                    tension: 0.1,
                    borderColor: 'rgb(75, 192, 192)',
                    data: yValues
                }]
            },
        });
    }, [data]);

    return (
        <>
            <canvas id="myChart" style={{ width: "100%", maxHeight: "500px", maxWidth: "75%", margin: "0 auto" }}></canvas>
        </>
    );
}