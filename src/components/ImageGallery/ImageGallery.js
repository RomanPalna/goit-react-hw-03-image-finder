import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import imageApi from '../services/ImageApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGalerry extends Component {
  state = {
    id: null,
    webformatUrl: null,
    query: '',
    status: Status.IDLE,
  };

  hanleSearchbarSubmit = query => {
    this.setState({ query });
  };
  //   componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.hanleSearchbarSubmit} />
        <ul className="ImageGallery"></ul>
      </div>
    );
  }
}
