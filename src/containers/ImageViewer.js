import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateForm from '../components/DateForm';
import { getDate } from '../selectors/imageSelector';
import { updateDate, fetchImage } from '../actions/imageActions';
import SelectedDate from '../components/SelectedDate';

class ImageViewer extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    updateDate: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.date);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetch(this.props.date);
  }
  
  render() {
    const { date, updateDate } = this.props;
    return (
      <>
        <DateForm date={date} handleUpdate={updateDate} handleSubmit={this.handleSubmit} />
        <SelectedDate date={date} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  date: getDate(state)
});

const mapDispatchToProps = dispatch => ({
  updateDate: ({ target }) => dispatch(updateDate(target.value)),
  fetch: (date) => dispatch(fetchImage(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewer);
