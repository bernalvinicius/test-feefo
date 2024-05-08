import React, { useEffect, useState } from 'react';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import SaleCalculation from '../SaleCalculation/sale-calculation';
import './sales.css';
import { useSelector } from 'react-redux';

const Sales = () => {
  const { t } = useTranslation();

  const [uploadSuccess, setUploadSuccess] = useState(0);
  const [linesSaved, setLinesSaved] = useState(0);

  const salesOverview = useSelector(
    (state) => state.accountOverview.salesOverview
  );

  useEffect(() => {
    if (salesOverview) {
      const auxUploadSuccess =
        (salesOverview.successfulUploads * 100) / salesOverview.uploads;
      setUploadSuccess(auxUploadSuccess);

      const auxLinesSaved =
        (salesOverview.linesSaved * 100) / salesOverview.linesAttempted;
      setLinesSaved(auxLinesSaved);
    }
  }, [salesOverview]);

  return (
    <div className="sales-container">
      <div>
        <div className="content-upload">
          <div>
            <FontAwesomeIcon className="upload-icon" icon={faUpload} />
            <span className="sales-title">{t('sales.title')}</span>
          </div>
          <div>
            <span>
              <FontAwesomeIcon className="info-icon" icon={faInfoCircle} />
            </span>
          </div>
        </div>
        <div className="content-sales">
          <span className="sales-report">
            {t('sales.youHad')}{' '}
            <span className="bold">
              {salesOverview.successfulUploads} {t('sales.uploads')}
            </span>{' '}
            {t('sales.and')}{' '}
            <span className="bold">{salesOverview.linesSaved}</span>{' '}
            {t('sales.linesAdded')}
          </span>
        </div>
      </div>
      <div>
        <SaleCalculation
          uploadSuccess={uploadSuccess}
          linesSaved={linesSaved}
        />
      </div>
    </div>
  );
};

export default Sales;
