import React from "react";
import PropTypes from "prop-types";

import { TextBlockUI } from "../../../../ui";

import "./antecipation-section.styles.scss";

const AntecipationSection = (props) => {
  const {
    tomorrowAmount,
    fifteenDaysAmount,
    thirtyDaysAmount,
    ninetyDaysAmount
  } = props;

  return (
    <div className="antecipation-section" data-testid="antecipation-section">
      <TextBlockUI
        label="Amanhã:"
        amount={tomorrowAmount}
        testID="tomorrow-result"
      />
      <TextBlockUI
        label="Em 15 dias:"
        amount={fifteenDaysAmount}
        testID="fifteen-result"
      />
      <TextBlockUI
        label="Em 30 dias:"
        amount={thirtyDaysAmount}
        testID="thirty-result"
      />
      <TextBlockUI
        label="Em 90 dias:"
        amount={ninetyDaysAmount}
        testID="ninety-result"
      />
    </div>
  );
};

export default AntecipationSection;

AntecipationSection.propTypes = {
  tomorrowAmount: PropTypes.string.isRequired,
  fifteenDaysAmount: PropTypes.string.isRequired,
  thirtyDaysAmount: PropTypes.string.isRequired,
  ninetyDaysAmount: PropTypes.string.isRequired
};
