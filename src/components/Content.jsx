import PropTypes from "prop-types";
import { useState } from "react";
import texts from "./texts";

function Content() {
  const [index, setIndex] = useState(1);

  const onNextButtonClick = () => {
    if (index < 3) {
      setIndex(index + 1);
    }
  };

  const onPrevButtonClick = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  const section = `section${index}`;
  const { title, text } = texts[section];

  const titleParts = title.split(" ");
  const titleFirstHalf = titleParts
    .slice(0, Math.ceil(titleParts.length / 2))
    .join(" ");
  const titleSecondHalf = titleParts
    .slice(Math.ceil(titleParts.length / 2))
    .join(" ");

  let buttonComponent;

  switch (index) {
    case 1:
      buttonComponent = (
        <a className="main-button" onClick={onNextButtonClick}>
          <span>Show More</span>
        </a>
      );
      break;
    case 2:
      buttonComponent = (
        <>
          <a className="main-button" onClick={onPrevButtonClick}>
            <span>Prev</span>
          </a>
          <a className="main-button" onClick={onNextButtonClick}>
            <span>Next</span>
          </a>
        </>
      );
      break;
    case 3:
      buttonComponent = (
        <a className="main-button" onClick={onPrevButtonClick}>
          <span>Prev</span>
        </a>
      );
      break;
    default:
      buttonComponent = null;
  }
  return (
    <div className="content">
      <h1>
        <span style={{ color: "rgb(3, 253, 170)" }}>{titleFirstHalf}</span>
        <br /> {titleSecondHalf}
      </h1>
      <p>{text}</p>
      <div className="wrapper">{buttonComponent}</div>
    </div>
  );
}

Content.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  prevButtonText: PropTypes.string.isRequired,
  nextButtonText: PropTypes.string.isRequired,
  onPrevButtonClick: PropTypes.func.isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
};

export default Content;
