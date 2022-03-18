import React, { useState } from "react";

import "./home.styles.scss";

import { MainTitleUI, SectionTitleUI } from "../../ui";
import { Card, InputSection, AntecipationSection, Divider } from "./components";

const MINIMUN_INSTALLMENTS = 1;
const MAXIMUM_INSTALLMENTS = 12;
const IS_NUMBER_PATTERN = /^[0-9]+$/;

const Home = () => {
  const [saleAmount, onChangedSaleAmount] = useState("");
  const [installments, onChangedInstallments] = useState("");
  const [mdrPercentage, onChangedMdrPercentage] = useState("");

  const handleSaleAmountChange = (_, unmaskedValue) => {
    onChangedSaleAmount(unmaskedValue.toString());
  };

  const handleInstallmentsChange = (value) => {
    const newInstallments = value.target.value;
    const isValid = IS_NUMBER_PATTERN.test(newInstallments);

    if (
      newInstallments === "" ||
      (isValid &&
        newInstallments >= MINIMUN_INSTALLMENTS &&
        newInstallments <= MAXIMUM_INSTALLMENTS)
    ) {
      onChangedInstallments(newInstallments.toString());
    }
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
