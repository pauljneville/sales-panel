import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const states = [{ "name": "NSW", "orderCount": 32 }, { "name": "VIC", "orderCount": 4 }, { "name": "QLD", "orderCount": 12 },];
  const dateTime = "10/02/2022 12:34pm";

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
    <div className="flex flex-col justify-between">
      <div className="flex justify-between">
        <p>Revenue per day</p>
      </div>
      <div className="bg-white rounded-xl flex items-center space-x-4 border-[1.5px] w-full min-h-[32rem] p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center w-full">little chart</div>
      </div>
    </div>
  );

  return (
    <div className="px-2 flex flex-col justify-between h-screen items-center">
      <Head>
        <title>Panel Charts</title>
        <meta name="description" content="Panel of sales data inc. charts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-16 flex flex-col space-y-4 flex-grow w-[18rem] sm:w-[36rem] lg:w-[48rem]">
        <h1 className="text-2xl sm:text-4xl" >
          Welcome to <span className="text-blue-600">Panel Charts</span>
        </h1>
        <OrdersPerState />
        <RevenuePerDay />
      </main>

      <footer className="flex py-2 border-t border-[#eaeaea] justify-center items-center max-h-[5rem] w-full">
        <p>
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </div>
  )
}
