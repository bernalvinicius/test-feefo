import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './support-contact.css';

const SupportContact = () => {
  const { t } = useTranslation();

  const supportContact = useSelector(
    (state) => state.accountOverview.supportContact
  );
  const name = supportContact.name;

  return (
    <div>
      <div>
        <span className="title-support">{t('supportContact.title')}</span>
      </div>
      <div className="container-support">
        <div className="content-contact">
          <div className="initial-name">
            <span className="first-letter">{name.charAt(0)}</span>
          </div>
          <div className="container-contact">
            <span className="support">{t('supportContact.support')}</span>
            <div className="email-content">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="email">{supportContact.email}</span>
            </div>
          </div>
        </div>
        <div className="phone-content">
          <span>{supportContact.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default SupportContact;
