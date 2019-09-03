import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateForm from '../components/DateForm';
import { getDate, getImage, getMediaType, getTitle, getExplanation } from '../selectors/imageSelector';
import { updateDate, fetchImage } from '../actions/imageActions';
import SelectedDate from '../components/SelectedDate';
import MediaDisplay from '../components/MediaDisplay';

class ImageViewer extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    updateDate: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    image: PropTypes.string.isRequied,
    mediaType: PropTypes.string.isRequied,
    explanation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.date);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetch(this.props.date);
  }
  
  render() {
    const { date, updateDate, image, mediaType, explanation, title } = this.props;
    return (
      <>
        <DateForm date={date} handleUpdate={updateDate} handleSubmit={this.handleSubmit} />
        <SelectedDate date={date} />
        <MediaDisplay 
          media={image} 
          mediaType={mediaType} 
          title={title}
          explanation={explanation} 
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  date: getDate(state),
  image: getImage(state),
  mediaType: getMediaType(state),
  title: getTitle(state),
  explanation: getExplanation(state)
});

const mapDispatchToProps = dispatch => ({
  updateDate: ({ target }) => dispatch(updateDate(target.value)),
  fetch: (date) => dispatch(fetchImage(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewer);
