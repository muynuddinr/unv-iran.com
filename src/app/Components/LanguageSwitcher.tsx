import { useLanguage } from '../../context/LanguageContext';
import { FiGlobe } from 'react-icons/fi';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button
        onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md 
          hover:bg-blue-50 transition-all duration-300"
      >
        <FiGlobe className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">
          {language === 'en' ? 'English' : 'فارسی'}
        </span>
      </button>
      
      <div className="absolute top-full right-0 rtl:left-0 rtl:right-auto mt-1 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 bg-white shadow-lg rounded-lg 
        border border-gray-100 w-32 py-1">
        <button
          onClick={() => setLanguage('en')}
          className={`w-full text-left rtl:text-right px-4 py-2 text-sm
            hover:bg-blue-50 transition-colors
            ${language === 'en' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('fa')}
          className={`w-full text-left rtl:text-right px-4 py-2 text-sm
            hover:bg-blue-50 transition-colors
            ${language === 'fa' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
        >
          فارسی
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;