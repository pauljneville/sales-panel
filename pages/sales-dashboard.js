import Head from 'next/head'
import Image from 'next/image'
import { Line } from 'react-chartjs-2';
// need these 2 unused imports to stop "Unhandled Runtime Error Error: "##" is not a registered scale."
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
    const dateTime = "10/02/2022 12:34pm";

    const OrdersPerState = ({ order }) => (
        <div className="flex flex-col items-stretch">
            {/* sub title */}
            <div className="flex justify-between">
                <p>Orders per state</p>
                <p>{dateTime}</p>
            </div>

            {/* maps order properties for orders for each state */}
            <div className="flex flex-wrap justify-between gap-2">
                {Object.keys(order).map((key, index) => (
                    <div className="p-6 text-center text-inherit border border-[#eaeaea] rounded-lg w-18 sm:w-32 lg:w-60" key={index}>
                        <h2 className="font-semibold lg:text-lg">{key.toUpperCase()}</h2>
                        <p className="lg:text-lg">{order[key]}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const ChartRevenuePerDay = ({ revenueData }) => {
        const options = {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return '$' + (value >= 1000 ? ((value.toFixed(2) / 1000).toFixed(1) + 'k') : value);
                        },
                        stepSize: 1000,
                    },
                    suggestedMin: 5000,
                }
            },
        };

        revenueData.datasets[0].label = "revenue";

        return (
            <div className="">
                <p>Revenue per day</p>
                <div className="bg-white rounded-xl flex items-center space-x-4 border-[1.5px] px-2 py-4 h-screen max-h-[20rem] sm:max-h-[30rem]">
                    <Line className=""
                        data={revenueData}
                        options={options} />
                </div>
            </div>
        );
    }

    const Content = () => {
        const { data, error } = useSWR('/api/data', fetcher);

        if (error) return <div>Failed to load</div>
        if (!data) return <div>Loading...</div>

        return (
            <>
                <OrdersPerState order={data.orders[0]} />
                <ChartRevenuePerDay revenueData={data.revenueThisWeek} />
            </>
        );
    }

    return (
        <div className="px-2 flex flex-col justify-between items-center h-screen">
            <Head>
                <title>Panel Charts</title>
                <meta name="description" content="Panel of sales data inc. charts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="py-16 flex flex-col space-y-4 w-full">
                <h1 className="text-2xl sm:text-4xl text-center" >
                    Welcome to <span className="text-blue-600">Panel Charts</span>
                </h1>
                <Content />
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
