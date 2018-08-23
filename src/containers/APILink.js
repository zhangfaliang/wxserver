import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/testAPI';

const apiLinkApi = ({ apiLinkApiClick}) => (
  <button onclick={apiLinkApiClick}>
    apiLinkApi
  </button>
)

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  apiLinkApiClick: () => dispatch(loadData())
})

export default apiLinkApi