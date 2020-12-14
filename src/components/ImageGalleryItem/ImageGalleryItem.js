import { Component } from 'react';
import imageApi from '../services/ImageApi';

export default class ImageGaleryItem extends Component {
  state = {
    query: null,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevProps.query) {
      this.fetchImg(this.state.query);
      console.log(this.state.images);
      return;
    }
  }

  async fetchImg() {
    return imageApi
      .fetchImages(this.state.query)
      .then(img => this.setState({ images: [...img.hits] }));
  }

  render() {
    return (
      <>
        {this.state.images.map(image => (
          <li key={image.id} className="ImageGalleryItem">
            <img
              src={image.webformatUrl}
              alt=""
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </>
    );
  }
}

// images => this.setState({ images: [...images] });
