import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";

import styles from './Schedule.module.css'

Chart.register(CategoryScale, ChartDataLabels );


const Data = [{price: 6300, item: "Products"}, {price: 5900, item: "Fish"}, {price: 4000, item: "Meat"}, {price: 3200, item: "Vegetables"}, {price: 2900, item: "Fruits"}, {price: 300, item: "Spices"}]

export const Schedule = () => {
  const [indexAxsis, setIndexAxsis] = useState('x')
    
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.screen.width >= 768 ? setIndexAxsis('x') :  setIndexAxsis('y') 
    })
  }, [])
    
  const [chartData, setChartData] = useState({
      labels: Data.map((data) => data.item),
      datasets: [
        {
          label: Data.map((data) => data.item),
          data: Data.map((data) => data.price),
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
              size: indexAxsis === 'y' ? 0 : 14
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
            size: indexAxsis === 'x' ? 0 : 14
          },
        },
      },
    } 
  } 

  return (
        <section className={styles.schedule}>
            <div className={styles.container}>
              <div className={styles.wrapper_canvas}>
                <Bar style={{}} chartData={chartData} options={options} data={chartData}/>
              </div>
            </div>
        </section>
  )
}