import styled from "styled-components";

const Header = styled.div`
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
    background: red;
  }
  #navbar{
    color: red;
    font-family: Lucida Handwriting;
    font-style: italic;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
  }
}
#register
{
  margin:0px;
}

  .navbar-nav a
  {
    color: black !important;
    padding:10px;
    margin-left:10px;
  }

  .navbar-nav a:hover
  {
    color:white !important;
    background:green !important;
    border-bottom:4px solid darkgreen;
    text-decoration:none;
  }

  .navbar-nav .active
  {
    color:white !important;
    background:green !important;
    border-bottom:4px solid darkgreen;
    text-decoration:none;
  }
  
`;
export default Header;
