import Head from 'next/head'
import Image from 'next/image'
// import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
// need these 2 unused imports to stop "Unhandled Runtime Error Error: "##" is not a registered scale."
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import Link from 'next/link';

export default function Home() {

  const states = [
    { "name": "NSW", "orderCount": 32, "data": [4, 2, 3, 7, 20], "colour": 'rgb(255, 99, 132)' },
    { "name": "VIC", "orderCount": 4, "data": [0, 1, 4, 3, 8], "colour": 'rgb(54, 162, 235)' },
    { "name": "QLD", "orderCount": 12, "data": [2, 2, 3, 7, 4], "colour": 'rgb(75, 192, 192)' },
  ];
  const dateTime = "10/02/2022 12:34pm";

  const labels = ["0", "1", "2", "3", "4"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'NSW',
        data: [4, 2, 3, 7, 20],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'VIC',
        data: [2, 12, 4, 5, 15],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'QLD',
        data: [14, 11, 13, 17, 19],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)',
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      // plugins: {
      //   legend: {
      //     position: 'top',
      //   },
      //   title: {
      //     display: false,
      //     text: 'Revenue per day'
      //   }
      // }
    },
  };

  const OrdersPerState = () => (
    <div className="flex flex-col items-stretch">
      <div className="flex justify-between">
        <p>Orders per state</p>
        <p>{dateTime}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {states.map((state) => (
          <div className="p-6 text-center text-inherit no-underline border border-[#eaeaea] rounded-lg w-18 sm:w-32 lg:w-60 lg:h-32" key={state.name}>
            <h2 className="font-semibold lg:text-lg">{state.name}</h2>
            <p className="lg:text-lg">{state.orderCount}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const RevenuePerDay = () => (
    <div className="flex flex-col justify-between w-full">
      <div className="flex justify-between">
        <p>Revenue per day</p>
      </div>
      <div className="bg-white rounded-xl flex items-center space-x-4 border-[1.5px] w-full px-2 py-6">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center w-full">
          <Line
            data={config.data}
            options={config.options}
          />
        </div>
      </div>
    </div>
  );

  // const [chartData, setChartData] = useState({});

  // useEffect(() => {
  //   const fetchData = async = () => {
  //     const res = await fetch("add");
  //     const data = await = res.json();
  //     console.log(data);
  //     setChartData({
  //       labels: data.data.map((crypto) => crypto.name),
  //       datasets: [
  //         {
  //           label: "Price in USD",
  //           data: data.data.map((crypto) => crypto.priceUsd),
  //           borderColor: data.borderColor,
  //           backgroundColor: data.backgroundColor,
  //         }
  //       ]
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="px-2 flex flex-col justify-between h-screen items-center">
      <Head>
        <title>Panel Charts</title>
        <meta name="description" content="Panel of sales data inc. charts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-16 flex flex-col space-y-4 flex-grow w-[18rem] sm:w-[36rem] lg:w-[48rem] xl:w-[72rem]">
        <h1 className="text-2xl sm:text-4xl text-center" >
          Welcome to <span className="text-blue-600">Panel Charts</span>
        </h1>
        {/* <OrdersPerState />
        <RevenuePerDay /> */}
        <Link href="/sales-dashboard">
          <a className="text-center underline hover:text-blue-400">&rarr; to Sales Dashboard</a>
        </Link>
      </main >

      <footer className="flex py-2 border-t border-[#eaeaea] justify-center items-center max-h-[5rem] w-full">
        <p>
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </div >
  )
}
