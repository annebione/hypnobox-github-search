// Third party imports
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Component imports
import  * as actions from './SearchActions'
import { CenteredForm } from './styles'

// Shared components imports
import SectionHeading from '../../shared/components/stateless/SectionHeading'
import Button from '../../shared/components/stateless/Button'
import MainSection from '../../shared/components/stateless/MainSection'
import TextInput from '../../shared/components/stateless/TextInput'
import Loading from '../../shared/components/stateless/Loading'
import TableWrapper from '../../shared/components/stateless/TableWrapper'
import { TablePagination } from 'react-pagination-table';


export class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.originalState = this.state;

    this.state = {
      queryValue: '',
      hasClients: false,
      loading: false
    };

  } 

  componentDidMount() {
    this.props.actions.searchFetch()
  }

  componentWillUnmount() {
    this.setState(this.originalState)
  }


  searchFieldUpdate = element => {
    this.setState({queryValue: element.target.value});

  }
  searchUser = (e) =>  {
    e.preventDefault();
    this.setState({ loading : true});
    
    this.props.actions.searchFetch(this.state.queryValue)
    if (this.props.result.length > 0) {
      setTimeout((function() {
        this.setState({hasClients: true, loading: false });
      }).bind(this), 2500)
    }
  }


  render() {
    return (
      <MainSection>
        <SectionHeading>Search</SectionHeading>
        <p>Type below to search by username.</p>
        <CenteredForm autocomplete="false">
          <TextInput 
            name="username" 
            label="Search repositories"
            onChange={this.searchFieldUpdate}
            value={this.state.queryValue}
            placeholder="Type an username..."
          />
          <Button children="Search"
             color="#ffff" 
             type="submit"
             backgroundColor="#3CE8B0"
             onClick={this.searchUser.bind(this)}
             isDisabled={this.state.loading}
          >
          </Button>
        </CenteredForm>
        { this.state.hasClients && !this.state.loading ? 
          <TableWrapper>
            <TablePagination
              data={this.props.result}
              headers={["ID", "Name", "Description", "Watchers"]}
              columns="id.name.description.watchers_count"
              perPageItemCount={10}
              totalCount={this.props.result.length}
              arrayOption={[["size", 'all', ', ']]}
            />
          </TableWrapper> 
        : this.state.loading ? <Loading></Loading>
        : null }
      </MainSection>
    )
  }
}
  

const mapStateToProps = state => ({
  result: state.search.result
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)
