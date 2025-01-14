import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 46%;
  margin: 2% 27%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: var(--text-prettysmall);
  padding: 1% 2%;
  border-radius: 10px;
  background-color: var(--white);
  flex: 0 0 auto;
  cursor:pointer;


  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
    padding: 0 5%;
    display: flex;
    padding: 10px 10px;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: center;
    font-size: var(--text-prettysmall);
    border-radius: 10px;
    background-color: var(--white);
  }
`;

const Left = styled.span`
  display: flex;
  text-align: left;
  font-weight: 700;
  align-items: center;
  padding: 2% 5px;
`;

const Right = styled.span`
  display: flex;
  flex-direction: row;
  padding: 1.5% 0;
  align-items: center;
  padding: 2% 5px;
`;

const Image = styled.img`
  height: 20px;
  padding: 0 5px;
`;

const InvestMoreDAI = props => {
  return (
      <Container onClick={props.onPress}>
        <Left>{props.label}</Left>
        <Right>
          <Image src={`../images/r_dai.png`} />
          <Image src={`../images/little_arrow.png`} />
          <Image src={`../images/eaBoth.png`} />
        </Right>
      </Container>
  );
};

InvestMoreDAI.defaultProps = {
  label: "Invest More DAI",
  onPress: () => {}
}


export default InvestMoreDAI;
