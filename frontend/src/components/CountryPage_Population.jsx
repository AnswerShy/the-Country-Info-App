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

        console.log(xValues)

        const existingChart = Chart.getChart("myChart");

        if (existingChart) {
            existingChart.destroy();
        }

        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yValues
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    y: {
                        min: Math.min(yValues),
                        max: Math.max(yValues)
                    }
                }
            },
            height: 250,
            width: 250
        });
    }, [data]);

    return (
        <>
            <canvas id="myChart" style={{ width: "100%", maxWidth: "700px" }}></canvas>
        </>
    );
}