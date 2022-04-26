import test from "ava"
import fixture from "nextjs-ava-fixture"

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

test("api endpoint", async (t) => {
    const { serverURL, axios } = await fixture(t)
    // axios is automatically configured with the base URL of the test server
    const { data: res } = await axios.get("/api/data")
    t.deepEqual(res, {
        "orders": orders,
        "revenueThisWeek": revenueThisWeek,
    })
})