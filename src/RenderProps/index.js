import React from 'react';

const Button = (props) => {
  const onClickHandler = () => {
    console.log('clicked!');
  };

  return props.render({ onClickHandler });
};

const Index = (props) => {
  // 버튼을 정의 한 이후 버튼을 사용하는 시점에서 Presenter 분기처리 가능
  // return <Button {...props} render={Presenter2} />;
  return <Button {...props} render={Presenter1} />;
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
