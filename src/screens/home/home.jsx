import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

import "./home.styles.scss";

import { MainTitleUI, SectionTitleUI } from "../../ui";
import { Card, InputSection, AntecipationSection, Divider } from "./components";

import {
  isMDRBetweenBoundaries,
  isInstallmentBetweenBoundaries,
  convertSaleToCents,
  convertCentToReal
} from "../../utils/input-helpers";

import {
  API_URL,
  CLIENT_ERROR_HTTP_MIN,
  CLIENT_ERROR_HTTP_MAX,
  SERVER_ERROR_HTTP_MAX,
  SERVER_ERROR_HTTP_MIN
} from "../../utils/constants";

const Home = () => {
  const [saleAmount, setSaleAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdrPercentage, setMdrPercentage] = useState("");

  const [fifteenDaysAmount, setFifteenDaysAmout] = useState("");
  const [tomorrowAmount, setTomorrowAmount] = useState("");
  const [thirtyDaysAmount, setThirtyDaysAmount] = useState("");
  const [ninetyDaysAmount, setNinetyDaysAmount] = useState("");

  const [hasErroronServer, setHasErrorOnServer] = useState(false);
  const [hasErroroTimeout, setHasErrorOTimeout] = useState(false);

  const mutationPostAntecipation = useMutation(
    (antecipationData) => axios.post(API_URL, antecipationData),
    {
      onSuccess: (responseData) => {
        setFifteenDaysAmout(convertCentToReal({ responseData, period: "15" }));
        setTomorrowAmount(convertCentToReal({ responseData, period: "1" }));
        setThirtyDaysAmount(convertCentToReal({ responseData, period: "30" }));
        setNinetyDaysAmount(convertCentToReal({ responseData, period: "90" }));
      },
      onError: async (error) => {
        const code = error?.response?.status;
        if (code >= CLIENT_ERROR_HTTP_MIN && code <= CLIENT_ERROR_HTTP_MAX) {
          setHasErrorOTimeout(true);
        }

        if (code >= SERVER_ERROR_HTTP_MIN && code <= SERVER_ERROR_HTTP_MAX) {
          setHasErrorOnServer(true);
        }
      }
    }
  );

  const handleSaleAmountChange = (_, unmaskedValue) => {
    console.log("sale", unmaskedValue.toString());
    setSaleAmount(unmaskedValue.toString());
  };

  const handleInstallmentsChange = (value) => {
    const newInstallments = value.target.value;
    console.log("installments", newInstallments);

    if (
      newInstallments !== "" &&
      !isInstallmentBetweenBoundaries(newInstallments)
    ) {
      return;
    }

    setInstallments(newInstallments.toString());
  };

  const handleIMdrPercentageChange = (percentage) => {
    const percentageValue = percentage.target.value;

    if (percentageValue !== "" && !isMDRBetweenBoundaries(percentageValue)) {
      return;
    }
    setMdrPercentage(percentageValue.toString());
  };

  const handleSubmitByEnterInput = (e) => {
    if (e.code === "Enter") {
      console.log("submit by input");

      const isMDREmpty = mdrPercentage === "";
      const isSaleEmpty = saleAmount === "";
      const isInstallmentsEmpty = installments === "";

      if (isMDREmpty) {
        // set error for mdr
      }

      if (isSaleEmpty) {
        // set error for sale
      }

      if (isInstallmentsEmpty) {
        // set error for installments
      }

      if (!isMDREmpty && !isSaleEmpty && !isInstallmentsEmpty) {
        const saleInCents = convertSaleToCents(saleAmount);

        mutationPostAntecipation.mutate({
          amount: saleInCents,
          installments: parseInt(installments, 10),
          mdr: parseInt(mdrPercentage, 10)
        });
      }
    }
  };

  if (
    mutationPostAntecipation?.isLoading &&
    !mutationPostAntecipation?.isError
  ) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (hasErroroTimeout) {
    return (
      <div>
        <p>Algo deu errado aqui!</p>
      </div>
    );
  }

  if (hasErroronServer) {
    return (
      <div>
        <p>Algo deu errado no servidor!</p>
      </div>
    );
  }

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
                onSubmitInput={handleSubmitByEnterInput}
              />
            </form>
          </div>
          <div className="card-container__results">
            <SectionTitleUI title="VOCÊ RECEBERÁ:" />
            <Divider />
            <AntecipationSection
              tomorrowAmount={tomorrowAmount}
              fifteenDaysAmount={fifteenDaysAmount}
              thirtyDaysAmount={thirtyDaysAmount}
              ninetyDaysAmount={ninetyDaysAmount}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
