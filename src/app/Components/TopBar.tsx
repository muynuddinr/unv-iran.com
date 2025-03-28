import { useLanguage } from '../../context/LanguageContext';
import { FiMail, FiPhone } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';

const TopBar = () => {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="bg-white py-2 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a href="mailto:info@uniview.com" className="flex items-center text-gray-600 hover:text-blue-600 text-sm">
              <FiMail className="w-4 h-4 mr-2 rtl:ml-2" />
              {t('header.email')}
            </a>
            <a href="tel:+15551234567" className="flex items-center text-gray-600 hover:text-blue-600 text-sm">
              <FiPhone className="w-4 h-4 mr-2 rtl:ml-2" />
              {t('header.phone')}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default TopBar; 