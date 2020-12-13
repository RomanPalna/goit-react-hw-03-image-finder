import { Component } from 'react';
import imageApi from '../services/ImageApi';

export default class ImageGaleryItem extends Component {
  state = {
    query: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.state.query) {
      imageApi
        .fetchImages(this.state.query)
        .then(query => this.setState({ query }));
    }
  }

  render() {
    return (
      <>
        {hits.map(hit => (
          <li key={hit.id} className="ImageGalleryItem">
            <img
              src={hit.webformatUrl}
              alt=""
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </>
    );
  }
}
