import React from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = (props) => {
  const languages = ['All', 'CSS', 'Java', 'JavaScript', 'Python', 'Ruby'];
  return (    
    <ul className='languages'>
      {languages.map(language => (
        <li 
          key={language} 
          style={language === props.selectedLanguage 
          ? {color: '#d0021b'} 
          : null}
          onClick={() => props.onSelect(language)}>
          {language}
        </li>
      ))}
    </ul>
  );
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectLanguage;