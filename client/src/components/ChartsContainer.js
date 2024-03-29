import React from "react";
import { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";

import Wrapper from "../assets/wrappers/ChartsContainer";

export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);

  const { monthlyApplications: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>

      <button
        onClick={() => {
          setBarChart(!barChart);
        }}
        type="button"
      >
        {barChart ? "AreaChart" : "BarChart"}
      </button>

      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}
