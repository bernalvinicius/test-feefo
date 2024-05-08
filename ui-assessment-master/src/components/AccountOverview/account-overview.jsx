import React from 'react';
import SupportContact from '../SupportContact';
import { useTranslation } from 'react-i18next';
import Sales from '../Sales';
import './account-overview.css';

export const AccountOverview = () => {
  const { t } = useTranslation();

  return (
    <div className="account-overview">
      <div className="content-support-component">
        <div className="container-title">
          <div>
            <span className="title">{t('accountOverview.title')}</span>
          </div>
        </div>
        <div>
          <SupportContact />
        </div>
      </div>
      <div>
        <Sales />
      </div>
    </div>
  );
};

export default AccountOverview;
