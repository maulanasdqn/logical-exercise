const data = [
  {
    salesName: "Udin",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 50,
    salesDate: 2,
  },
];

const correction = [
  {
    type: "tambah",
    salesName: "Udin",
    totalSales: 100,
    salesDate: 2,
  },
];

const salesReport = (data, correction) => {
  const mergeData =
    correction.length === 0
      ? []
      : correction.map((x, i) => ({
          salesName: x.salesName,
          totalSales:
            x.type === "tambah" && data[i].salesName
              ? x.totalSales + data[i].totalSales
              : x.totalSales,
          salesDate: x.salesDate,
        }));

  const currentSales = [
    {
      salesName: "Budi",
      totalSales: 0,
    },
    {
      salesName: "Adi",
      totalSales: 0,
    },
    {
      salesName: "Poltak",
      totalSales: 0,
    },
    {
      salesName: "Sri",
      totalSales: 0,
    },
    {
      salesName: "Udin",
      totalSales: 0,
    },
  ];

  const merged = data.concat(currentSales, mergeData);

  console.log(merged)

  const calculate = Array.from(
    merged.reduce(
      (m, { salesName, totalSales }) =>
        m.set(salesName, (m.get(salesName) || 0) + totalSales),
      new Map()
    ),
    ([salesName, totalSales]) => ({ salesName, totalSales })
  );

  const onlyName = calculate.map((sales) => sales.salesName);
  const onlyTotalSales = calculate.map((sales) => sales.totalSales);

  const totalSalesByName = onlyName.reduce(
    (a, e, i) => ({ ...a, [e]: onlyTotalSales[i] }),
    {}
  );

  const monthlySales = onlyTotalSales.reduce(
    (x, y) => parseInt(x) + parseInt(y),
    0
  );

  const maxTotalSales = Math.max(...calculate.map((sales) => sales.totalSales));

  const findBestSales = calculate.filter(
    (sales) => sales.totalSales === maxTotalSales
  );

  const bestSalesman = `Penjualan terbanyak dilakukan oleh ${findBestSales[0].salesName} dengan total penjualan dalam 1 bulan sebesar ${findBestSales[0].totalSales}`;

  return {
    monthlySales,
    totalSalesByName,
    bestSalesman,
  };
};

console.log(salesReport(data, correction));

module.exports = {
  salesReport,
};
