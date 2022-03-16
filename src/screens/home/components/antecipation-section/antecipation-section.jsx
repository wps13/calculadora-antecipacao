import React from "react";
import PropTypes from "prop-types";

import { TextBlockUI } from "../../../../ui";

const AntecipationSection = (props) => {
  const {
    tomorrowAmount,
    fifteenDaysAmount,
    thirtyDaysAmount,
    ninetyDaysAmount
  } = props;

  return (
    <>
      <TextBlockUI label="Amanhã:" amount={tomorrowAmount} />
      <TextBlockUI label="Em 15 dias:" amount={fifteenDaysAmount} />
      <TextBlockUI label="Em 30 dias:" amount={thirtyDaysAmount} />
      <TextBlockUI label="Em 90 dias:" amount={ninetyDaysAmount} />
    </>
  );
};

export default AntecipationSection;

AntecipationSection.propTypes = {
  tomorrowAmount: PropTypes.string.isRequired,
  fifteenDaysAmount: PropTypes.string.isRequired,
  thirtyDaysAmount: PropTypes.string.isRequired,
  ninetyDaysAmount: PropTypes.string.isRequired
};