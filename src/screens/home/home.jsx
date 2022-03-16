import React from "react";

import "./home.styles.scss";

import { MainTitleUI, SectionTitleUI } from "../../ui";
import { Card, InputSection, AntecipationSection, Divider } from "./components";

const Home = () => {
  return (
    <div className="home">
      <Card>
        <div className="card-container">
          <div className="card-container__inputs">
            <MainTitleUI title="Simule sua antecipação" />
            <form>
              <InputSection
                saleAmount="1"
                installments="2"
                mdrPercentage="3.2"
                onInstallmentsChanged={() => {}}
                onSaleAmountChanged={() => {}}
                onMdrPercentageChanged={() => {}}
              />
            </form>
          </div>
          <div className="card-container__results">
            <SectionTitleUI title="VOCÊ RECEBERÁ:" />
            <Divider />
            <AntecipationSection />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
