import React from 'react';

const WithOnClickHandler = (Presenter) => (props) => {
  const onClickHandler = () => {
    console.log('clicked!');
  };

  return <Presenter {...props} onClickHandler={onClickHandler} />
};

// Button을 정의하는 시점에서 Presenter 분기 처리 가능
// const Button2 = WithOnClickHandler(Presenter2)
const Button = WithOnClickHandler(Presenter1)

const Index = (props) => {
  return <Button {...props} />;
};

export default Index;







/*************************/
function Presenter1({ onClickHandler }) {
  return (
  <div>
    <button onClick={onClickHandler}>click me1!</button>
  </div>
  )
}
function Presenter2({ onClickHandler }) {
  return (
  <div>
    <button onClick={onClickHandler}>click me2!</button>
  </div>
  )
}
