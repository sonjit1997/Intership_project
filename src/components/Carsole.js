import React, { useState } from "react";
import Slider from "react-slick";
import { Modal, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/Carsole.css";
function Carsole() {
  const [userModal, setUserModal] = useState(false);

  const openUserModal = () => {
    setUserModal(true);
  };

  const closeUserModal = () => {
    setUserModal(false);
  };

  {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="row m-4">
        <div className="col-11" id="main">
          <Slider {...settings}>
            <div>
              <h1>
                <span class="c8gkmzg c1w8ohg7 u1l3w0tx dir dir-ltr">
                  <img
                    class="i1wps9q8 dir dir-ltr"
                    src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </span>
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
            <div>
              <h1>
                <img
                  class="i1wps9q8 dir dir-ltr"
                  src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
                  alt=""
                  width="24"
                  height="24"
                />
              </h1>
            </div>
          </Slider>
        </div>
        <div className="col-1" id="mfilt">
          {" "}
          <button type="button" class="btn" id="filter" onClick={openUserModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-ui-checks"
              viewBox="0 0 16 16"
            >
              <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>
        {userModal ? (
          <Modal
            show={userModal}
            onHide={closeUserModal}
            backdrop="static"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Filter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form class="form-floating"></form>
              <label for="customRange1" class="form-label">
                PRICE RANGE
              </label>
              <input type="range" class="form-range" id="customRange1"></input>
              <div class="container text-center">
                <div class="row">
                  <div class="col ">₹10,000+</div>
                  <div class="col">₹80,000</div>
                </div>
              </div>
              <hr />
              <div className="mt-4">
                <h3>ROOMS</h3>
                <input
                  type="radio"
                  class="btn-check "
                  name="options"
                  id="option1"
                  autocomplete="off"
                />
                <label class="btn btn-dark " for="option1">
                  1
                </label>

                <input
                  type="radio"
                  class="btn-check m-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  2
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  3
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option4"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option4">
                  4
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  5
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  6
                </label>
                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  7
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  8
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option4"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option4">
                  9
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  10
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  11
                </label>
                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  12+
                </label>
              </div>
              <div className="mt-2">
                <h3 className="mt-2">BEDS</h3>
                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option1"
                  autocomplete="off"
                />
                <label class="btn btn-dark" for="option1">
                  1
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  2
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  3
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option4"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option4">
                  4
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  5
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  6
                </label>
                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  7
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  8
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option4"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option4">
                  9
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  10
                </label>

                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option3">
                  11
                </label>
                <input
                  type="radio"
                  class="btn-check ml-2"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-dark" for="option2">
                  12+
                </label>
              </div>
              <Button
                onClick={closeUserModal}
                className="btn btn-outline-dark my-1 float-start mt-2"
              >
                Clear
              </Button>
              <Button
                onClick={closeUserModal}
                className="btn btn-dark my-1 float-end mt-2"
              >
                Show More
              </Button>
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Carsole;
