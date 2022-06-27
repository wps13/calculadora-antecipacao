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
  SERVER_ERROR_HTTP_MIN,
  REQUEST_TEXTS,
  HOME_TEXTS
} from "../../utils/constants";

const Home = () => {
  const [inputData, setInputData] = useState({
    saleAmount: "",
    installments: "",
    mdrPercentage: ""
  });

  const [response, setResponse] = useState({
    fifteenDaysAmount: "",
    tomorrowAmount: "",
    thirtyDaysAmount: "",
    ninetyDaysAmount: ""
  });

  const [errors, setErrors] = useState({
    server: false,
    timeout: false
  });

  const [invalid, setInvalid] = useState({
    saleAmount: false,
    installments: false,
    mdrPercentage: false
  });

  const mutationPostAntecipation = useMutation(
    (antecipationData) => axios.post(API_URL, antecipationData),
    {
      onSuccess: (responseData) => {
        setResponse({
          fifteenDaysAmount: convertCentToReal({ responseData, period: "15" }),
          tomorrowAmount: convertCentToReal({ responseData, period: "1" }),
          thirtyDaysAmount: convertCentToReal({ responseData, period: "30" }),
          ninetyDaysAmount: convertCentToReal({ responseData, period: "90" })
        });
      },
      onError: async (error) => {
        const code = error?.response?.status;
        if (code >= CLIENT_ERROR_HTTP_MIN && code <= CLIENT_ERROR_HTTP_MAX) {
          setErrors((previousState) => ({ ...previousState, timeout: true }));
        }

        if (code >= SERVER_ERROR_HTTP_MIN && code <= SERVER_ERROR_HTTP_MAX) {
          setErrors((previousState) => ({ ...previousState, server: true }));
        }
      },
      retry: 2
    }
  );

  const handleSaleAmountChange = (_, unmaskedValue) => {
    if (unmaskedValue !== "" && invalid.saleAmount) {
      setInvalid((previousState) => ({ ...previousState, saleAmount: false }));
    }
    setInputData((previousState) => ({
      ...previousState,
      saleAmount: unmaskedValue.toString()
    }));
  };

  const handleValue = (value, type, checkFn) => {
    const newValue = value.target.value;

    if (newValue !== "" && !checkFn(newValue)) {
      return;
    }

    if (newValue !== "" && invalid.Value) {
      setInvalid((previousState) => ({ ...previousState, [type]: false }));
    }
    setInputData((previousState) => ({
      ...previousState,
      [type]: newValue.toString()
    }));
  };

  const handleInstallmentsChange = (value) => {
    handleValue(value, "installments", isInstallmentBetweenBoundaries);
  };

  const handleIMdrPercentageChange = (percentage) => {
    handleValue(percentage, "mdrPercentage", isMDRBetweenBoundaries);
  };

  const requestAntecipationData = () => {
    let invalidCount = 0;

    Object.keys(inputData).forEach((key) => {
      if (inputData[key] === "") {
        setInvalid((previousState) => ({ ...previousState, [key]: true }));
        invalidCount += 1;
      }
    });

    if (invalidCount === 0) {
      const saleInCents = convertSaleToCents(inputData.saleAmount);

      mutationPostAntecipation.mutate({
        amount: saleInCents,
        installments: parseInt(inputData.installments, 10),
        mdr: parseInt(inputData.mdrPercentage, 10)
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
        <RequestErrorUI message={REQUEST_TEXTS.OFFLINE} />
      </div>
    );
  }

  if (
    mutationPostAntecipation?.isLoading &&
    !mutationPostAntecipation?.isError
  ) {
    return (
      <div className="home">
        <LoadingUI message={REQUEST_TEXTS.LOADING} />
      </div>
    );
  }

  if (errors.timeout) {
    return (
      <div className="home">
        <RequestErrorUI message={REQUEST_TEXTS.TIMEOUT} />
      </div>
    );
  }

  if (errors.server) {
    return (
      <div className="home">
        <RequestErrorUI message={REQUEST_TEXTS.SERVER_ERROR} />
      </div>
    );
  }

  if (mutationPostAntecipation?.isPaused) {
    return (
      <div className="home">
        <RequestErrorUI
          message={REQUEST_TEXTS.CONNECTION_FAILED}
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
            <MainTitleUI title={HOME_TEXTS.INPUT_TITLE} />
            <form>
              <InputSection
                saleAmount={inputData.saleAmount}
                installments={inputData.installments}
                mdrPercentage={inputData.mdrPercentage}
                onInstallmentsChanged={handleInstallmentsChange}
                onSaleAmountChanged={handleSaleAmountChange}
                onMdrPercentageChanged={handleIMdrPercentageChange}
                onSubmitInput={handleSubmitByEnterInput}
                invalidSaleAmount={invalid.saleAmount}
                invalidInstallments={invalid.installments}
                invalidMDR={invalid.mdrPercentage}
              />
            </form>
          </div>
          <div className="card-container__results">
            <SectionTitleUI title={HOME_TEXTS.RESULTS_TITLE} />
            <Divider />
            <AntecipationSection
              tomorrowAmount={response.tomorrowAmount}
              fifteenDaysAmount={response.fifteenDaysAmount}
              thirtyDaysAmount={response.thirtyDaysAmount}
              ninetyDaysAmount={response.ninetyDaysAmount}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
