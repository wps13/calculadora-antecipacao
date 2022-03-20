/* eslint-disable max-len */
import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

import "./home.styles.scss";

import {
  MainTitleUI,
  SectionTitleUI,
  LoadingUI,
  RequestErrorUI
} from "../../ui";
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
  const [hasErrorOnTimeout, sethasErrorOnTimeout] = useState(false);

  const [invalidSaleAmount, setInvalidSaleAmout] = useState(false);
  const [invalidInstallments, setInvalidInstallments] = useState(false);
  const [invalidMDR, setInvalidMDR] = useState(false);

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
          sethasErrorOnTimeout(true);
        }

        if (code >= SERVER_ERROR_HTTP_MIN && code <= SERVER_ERROR_HTTP_MAX) {
          setHasErrorOnServer(true);
        }
      },
      retry: 2
    }
  );

  const handleSaleAmountChange = (_, unmaskedValue) => {
    if (unmaskedValue !== "" && invalidSaleAmount) {
      setInvalidSaleAmout(false);
    }
    setSaleAmount(unmaskedValue.toString());
  };

  const handleInstallmentsChange = (value) => {
    const newInstallments = value.target.value;

    if (
      newInstallments !== "" &&
      !isInstallmentBetweenBoundaries(newInstallments)
    ) {
      return;
    }

    if (newInstallments !== "" && invalidInstallments) {
      setInvalidInstallments(false);
    }

    setInstallments(newInstallments.toString());
  };

  const handleIMdrPercentageChange = (percentage) => {
    const percentageValue = percentage.target.value;

    if (percentageValue !== "" && !isMDRBetweenBoundaries(percentageValue)) {
      return;
    }

    if (percentageValue !== "" && invalidMDR) {
      setInvalidMDR(false);
    }

    setMdrPercentage(percentageValue.toString());
  };

  const requestAntecipationData = () => {
    const isMDREmpty = mdrPercentage === "";
    const isSaleEmpty = saleAmount === "";
    const isInstallmentsEmpty = installments === "";

    if (isMDREmpty) {
      setInvalidMDR(true);
    }

    if (isSaleEmpty) {
      setInvalidSaleAmout(true);
    }

    if (isInstallmentsEmpty) {
      setInvalidInstallments(true);
    }

    if (!isMDREmpty && !isSaleEmpty && !isInstallmentsEmpty) {
      const saleInCents = convertSaleToCents(saleAmount);

      mutationPostAntecipation.mutate({
        amount: saleInCents,
        installments: parseInt(installments, 10),
        mdr: parseInt(mdrPercentage, 10)
      });
    }
  };

  const handleSubmitByEnterInput = (e) => {
    if (e.code === "Enter") {
      requestAntecipationData();
    }
  };

  if (!navigator.onLine) {
    return (
      <div className="home">
        <RequestErrorUI message="Parece que você está sem internet. Confira sua conexão e tente novamente." />
      </div>
    );
  }

  if (
    mutationPostAntecipation?.isLoading &&
    !mutationPostAntecipation?.isError
  ) {
    return (
      <div className="home">
        <LoadingUI message="Carregando sua antecipação" />
      </div>
    );
  }

  if (hasErrorOnTimeout) {
    return (
      <div className="home">
        <RequestErrorUI message="Ocorreu um erro na requesição, retentando..." />
      </div>
    );
  }

  if (hasErroronServer) {
    return (
      <div className="home">
        <RequestErrorUI message="Servidor indisponivel, tente novamente mais tarde" />
      </div>
    );
  }

  if (mutationPostAntecipation?.isPaused) {
    return (
      <div className="home">
        <RequestErrorUI
          message="Parece que você está sem internet. Gostaria de tentar novamente?"
          onRetry={requestAntecipationData}
        />
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
                invalidSaleAmount={invalidSaleAmount}
                invalidInstallments={invalidInstallments}
                invalidMDR={invalidMDR}
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
