import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import styles from './Schedule.module.css'

Chart.register(CategoryScale, ChartDataLabels );



export const Schedule = ({data}) => {
  
  useEffect(() => {
    setChartData({
      labels: data.map((financeFlow) => financeFlow.desciption),
      datasets: [
        {
          label: data.map((financeFlow) => financeFlow.item),
          data: data.map((financeFlow) => financeFlow.sum),
          backgroundColor: [
            "#FF751D",
            "#FFDAC0",
            "#FFDAC0",
          ],
          borderRadius: 15,
          barThickness: 50,
        },
      ],
    })
  }, [data])
  
  const [indexAxsis, setIndexAxsis] = useState('x')
    
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.screen.width >= 768 ? setIndexAxsis('x') :  setIndexAxsis('y') 
    })
  }, [])
    
  const [chartData, setChartData] = useState({
      labels: data.map((financeFlow) => financeFlow.desciption),
      datasets: [
        {
          label: data.map((financeFlow) => financeFlow.item),
          data: data.map((financeFlow) => financeFlow.sum),
          backgroundColor: [
            "#FF751D",
            "#FFDAC0",
            "#FFDAC0",
          ],
          borderRadius: 15,
          barThickness: 50,
        },
      ],
  })
  

  const options = {
    responsive: true,
    maintainAspectRatio: indexAxsis === 'x' ? true : false,
    indexAxis: indexAxsis,
    layout: {
      padding: {
        top: 50
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        labels: {
          value: {
            color: "black"
          }
        },
        anchor: indexAxsis === 'x' ? 'end' : 'start',
        align: indexAxsis === 'x' ? '-90' : '0',
        formatter: (value) => `${value} грн`,
        color: '#52555F',
        clamp: true,
        font: {
          size: 14
        }
      } 
    },
    scales: {
      x: {
        ticks: {
          color: 'black',
          font: {
            size: indexAxsis === 'y' ? 0 : 14,
            color: '#ffffff',
          }
        }
      },
      y: {
        ticks: {
          padding: 10,
          minRotation: 90, 
          maxRotation: 90,
          color: 'black',
          font: {
            size: indexAxsis === 'x' ? 0 : 14,
            color: '#ffffff',
          },
        },
      },
    } 
  } 

  return (
    <section className={styles.schedule}>
        <div className={styles.container}>
          {data.length > 0 ? <div className={styles.wrapper_canvas}>
            <Bar style={{}} chartData={chartData} options={options} data={chartData}/>
          </div> : <div><h3>Немає данних</h3></div>}
        </div>
    </section>
  )
}