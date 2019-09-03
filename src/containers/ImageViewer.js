import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateForm from '../components/DateForm';
import { getDate } from '../selectors/imageSelector';
import { updateDate } from '../actions/imageActions';

class ImageViewer extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    updateDate: PropTypes.func.isRequired,
  }
  
  render() {
    const { date, updateDate } = this.props;
    return (
      <DateForm date={date} handleUpdate={updateDate} />
    );
  }
}

const mapStateToProps = state => ({
  date: getDate(state)
});

const mapDispatchToProps = dispatch => ({
  updateDate: ({ target }) => dispatch(updateDate(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewer);
