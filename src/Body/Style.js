import styled from "styled-components";

const Body = styled.div`
  .carousel__data {
    width: 100%;
    height: 600px !important;
    margin-top: -20px !important;
  }
  .MuiTypography-body2 {
    font-weight: bolder !important;
    font-size: "15px";
  }
  .video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  .d-block:hover {
    transform: scale(1.5);
  }
  .d-block {
    transition: 1s all ease;
  }
`;

export default Body;
