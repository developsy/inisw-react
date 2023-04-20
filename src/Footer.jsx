import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  //styled componen는 html 태그와 같은 이름의 함수를 제공해줌.
  //이 스타일이 적용된 하나의 컴포넌트를 리턴한다.
  //div``문법은 Tagged template literal.
  //footerbox도 하나의 컴포넌트이기에 동적인 부분은 함수로 넣어줘야 함.
  const FooterBox = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: ${(props) => (props.theme === "basic" ? "skyblue" : "yellow")};
    text-align: center;
  `;
  return <FooterBox theme={props.theme}>React styled components</FooterBox>;
};

export default Footer;
