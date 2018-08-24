import React from "react";
import { connect } from "react-redux";
import { loadData, loadDataStop, loadDataStart } from "../actions/testAPI";

const apiLinkApi = ({
  apiLinkApiClick,
  apiLinkApiClickStart,
  apiLinkApiClickStop
}) => {
  return (
    <div>
      <button onClick={apiLinkApiClick}>apiLinkApi</button>
      <button onClick={apiLinkApiClickStart}>apiLinkApiStart</button>
      <button onClick={apiLinkApiClickStop}>apiLinkApiStop</button>
    </div>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  apiLinkApiClick: () => {
    dispatch(loadData());
  },
  apiLinkApiClickStart: () => {
    dispatch(loadDataStart());
  },
  apiLinkApiClickStop: () => {
    dispatch(loadDataStop());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(apiLinkApi);
