// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const orders = [
    {
      nsw: 45,
      qld: 20,
      vic: 12
    },
  ];

  const revenueThisWeek = {
    labels: ['11/12', '12/12', '13/12', '14/12'], // TODO: you'll need to loop through some dates here (I recommend date-fns)
    datasets: [
      {
        data: [8459, 12924, 10926, 9652],  // Hint: Maybe you can format the Axes "ticks" so it returns a nice format? e.g. $8.4k
        borderColor: '#f58120',
        backgroundColor: '#f58120',
      }
    ],
  };

  return res.status(200).json({
    "orders": orders,
    "revenueThisWeek": revenueThisWeek,
  });
}

// const handler = (req, res) => {
//   return res.json({ hello: 'world!' });
// };
// export default handler;

// export default (req, res) => {
//     res.statusCode = 200
//     res.json({ name: 'John Doe' })
// }