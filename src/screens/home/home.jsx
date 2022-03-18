import React, { useState } from "react";

import "./home.styles.scss";

import { MainTitleUI, SectionTitleUI } from "../../ui";
import { Card, InputSection, AntecipationSection, Divider } from "./components";

const Home = () => {
  const [saleAmount, onChangedSaleAmount] = useState("");
  const [installments, onChangedInstallments] = useState("");
  const [mdrPercentage, onChangedMdrPercentage] = useState("");

  const handleSaleAmountChange = (_, unmaskedValue) => {
    onChangedSaleAmount(unmaskedValue.toString());
  };

  const handleInstallmentsChange = (value) => {
    onChangedInstallments(value.target.value);
  };

  const handleIMdrPercentageChange = (percentage) => {
    onChangedMdrPercentage(percentage.target.value);
  };

  return (
    <div className="home">
      <Card>
        <div className="card-container">
          <div className="card-container__inputs">
            <MainTitleUI title="Simule sua antecipação" />
            <form>
              <InputSection
                saleAmount={saleAmount}
                installments={installments}
                mdrPercentage={mdrPercentage}
                onInstallmentsChanged={handleInstallmentsChange}
                onSaleAmountChanged={handleSaleAmountChange}
                onMdrPercentageChanged={handleIMdrPercentageChange}
              />
            </form>
          </div>
          <div className="card-container__results">
            <SectionTitleUI title="VOCÊ RECEBERÁ:" />
            <Divider />
            <AntecipationSection
              tomorrowAmount="0,00"
              fifteenDaysAmount="0,00"
              thirtyDaysAmount=""
              ninetyDaysAmount=""
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
