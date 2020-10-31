import { connect } from "react-redux";
import Add from "../Components/Add";
import { addBizz } from "../Redux/actions";

const mapStateToProps = (state) => {
  return {
    bizzes: state.bizzes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBizz: (listing) => dispatch(addBizz(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
