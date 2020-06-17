import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import { getTransactions } from "../../../actions/fileActions";
import { State } from "../../../reducers/transactionReducer";
import analyser from "../../../helpers/analyser";

import theme from "../../../theme";

import BarChartComponent from "./barChart";
import PieChartComponent from "./pieChart";
import LineChartComponent from "./lineChart";

const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  margin-top: 50px;
  grid-gap: 50px;
`;

const Heading = styled.h2`
  font-size: ${theme.fontSize.h2};
  font-weight: ${theme.fontWeight.fontSemi};
  grid-column: 1 / -1;
`;

type StateProps = {
  transactions: State;
};

type DispatchProps = {
  getTransactions: () => void;
};

type Props = StateProps & DispatchProps;

const Charts = (props: Props) => {
  const { transactions, getTransactions } = props;
  // eslint-disable-next-line
  useEffect(() => getTransactions(), []);
  const { pieChart, lineChart, barChart } = analyser(transactions);
  return (
    <Container>
      <Heading> Charts </Heading>
      <LineChartComponent data={lineChart} />
      <BarChartComponent data={barChart} />
      <PieChartComponent data={pieChart} />
    </Container>
  );
};

const mapStateToProps = (state: State) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getTransactions: () => dispatch(getTransactions()),
  };
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Charts);
