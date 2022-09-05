import React from "react";
import axios from "axios";
import "./styles/BestBooks.css";
import FormModal from "./FormModal";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      status: "",
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get("http://localhost:3498/books")
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleOnChange = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  addBook = (event) => {
    event.preventDefault();

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: this.state.status,
    };

    console.log(obj);
    axios
      .post(`http://localhost:3498/books`, obj)
      .then((result) => {
        return this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.handleClose();
  };

  deleteBook = (id) => {
    axios
      .delete(`http://localhost:3498/books/${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });

      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div id="form">
          <>
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={this.handleShow}
            >
              Add a Book!
            </Button>
            <FormModal 
              show={this.state.show}
              handleClose={this.handleClose}
              addBook={this.addBook}
              handleOnChange={this.handleOnChange}

            />
          </>
        </div>
        <div id="CarouselDiv">
          {this.state.books.length ? (
            <div id="secondaryDiv" style={{ width: "400px" }}>
              <Carousel fade>
                {this.state.books.map((item) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={require("./background-react.png")}
                        alt="Slide"
                      />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.status}</p>
                        <Button
                          variant="light"
                          onClick={() => this.deleteBook(item._id)}
                        >
                          Delete This Book!
                        </Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </div>
      </div>
    );
  }
}

export default BestBooks;
