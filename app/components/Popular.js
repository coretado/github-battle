import React from 'react';
import SelectLanguage from './SelectLanguage';
import apiCall from '../utils/api';
import RepoGrid from './RepoGrid';
import Loading from './Loading';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  componentDidUpdate() {

  }

  updateLanguage(language) {
    this.setState(() => {
      return {
        selectedLanguage: language,
        repos: null
      };
    });

    apiCall.fetchPopularRepos(language)
      .then(repos => {
        this.setState(() => {
          return {
            repos: repos
          }
        })
      });
  };

  render() {    
    return (
      <div>        
        <SelectLanguage 
        selectedLanguage={this.state.selectedLanguage} 
        onSelect={this.updateLanguage}/>
        {!this.state.repos 
        ? <Loading /> 
        : <RepoGrid repos={this.state.repos} />}        
      </div>
    );
  };
};

export default Popular;