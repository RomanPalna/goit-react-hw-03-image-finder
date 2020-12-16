import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Button from './components/Button/Button';
import imageApi from './components/services/ImageApi';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGalerry from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: null,
    modalImage: [],
    modalImageID: null,
    openModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImg();
    }
  }

  onSearch = query => {
    this.setState({ query, images: [], page: 1 });
  };

  fetchImg() {
    const { query } = this.state;
    return imageApi.fetchImages(query).then(img =>
      this.setState({
        images: [...img.hits, img],
      }),
    );
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = e => {
    this.setState({
      openModal: true,
      modalImageID: Number(e.currentTarget.id),
    });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  imageFind = () => {
    const largeImg = this.state.images.find(image => {
      return image.id === this.state.modalImageID;
    });

    return largeImg;
  };

  render() {
    console.log(this.state.images);

    return (
      <>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGalerry openModal={this.onOpenModal} images={this.state.images} />
        ,
        <Button fetchImages={this.loadMore} />,
        <ToastContainer autoclose={3000} />
        {this.state.openModal && (
          <Modal id={this.state.modalImageID} onClose={this.closeModal}>
            <img
              src={this.imageFind().largeImageURL}
              alt={this.imageFind().tags}
            ></img>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
