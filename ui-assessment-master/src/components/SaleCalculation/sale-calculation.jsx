import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './sale-calculation.css';

const SaleCalculation = ({ uploadSuccess, linesSaved }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container-calculation">
        <div className="percentage-card upload">
          <span className="percentage">{uploadSuccess}%</span>
          <span className="percentage-label">
            {t('saleCalculation.uploadSuccess')}
          </span>
        </div>
        <div className="percentage-card">
          <span className="percentage">{linesSaved}%</span>
          <span className="percentage-label">
            {t('saleCalculation.linesSaved')}
          </span>
        </div>
      </div>
    </div>
  );
};

SaleCalculation.propTypes = {
  uploadSuccess: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
};

export default SaleCalculation;
