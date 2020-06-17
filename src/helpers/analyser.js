const getTopProduct = (data) => {
  let topProduct;
  let topAmount = 0;
  data.length &&
    data
      .filter((x) => x.transaction)
      .map((product) => {
        if (product.amount > topAmount) {
          topAmount = product.amount;
          topProduct = product.item;
        }
      });
  return { topAmount, topProduct };
};

const pieChart = (data) => {
  let incomingAmount = 0;
  let outgoingAmount = 0;
  data.length &&
    data
      .filter(
        (x) => x.transaction === "Bill" || x.transaction === "Bill Payment"
      )
      .map((x) => {
        outgoingAmount += Number(x.amount);
      });
  data.length &&
    data
      .filter(
        (x) => x.transaction === "Order" || x.transaction === "Order Payment"
      )
      .map((x) => {
        incomingAmount += Number(x.amount);
      });
  return [
    { name: "outgoing", value: outgoingAmount },
    { name: "incoming", value: incomingAmount },
  ];
};

const lineChart = (data) => {
  const result =
    data.length &&
    data
      .filter((x) => x.transaction)
      .map((x) => ({
        item: x.item,
        value: x.amount,
      }));
  return result;
};

const barChart = (data) => {
  const result =
    data.length &&
    data
      .filter((x) => x.transaction)
      .map((x) => ({
        item: x.item,
        quantity: x.quantity,
      }));
  return result;
};

const analyser = (data) => {
  return {
    topProduct: getTopProduct(data),
    pieChart: pieChart(data),
    lineChart: lineChart(data),
    barChart: barChart(data),
  };
};
export default analyser;
