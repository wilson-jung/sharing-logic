import React from 'react';

function Index(props) {
  return <Container {...props} />
}

// Container를 정의하는 시점에서 Presenter 분기 처리 가능
function Container(props) {
  const onClickHandler = React.useCallback(() => {
    console.log('clicked!');
  }, []);

  // return <Presenter1 onClickHandler={onClickHandler} />
  return <Presenter1 {...props} onClickHandler={onClickHandler} />
}

function Container2() {
  const onClickHandler = React.useCallback(() => {
    console.log('clicked!');
  }, []);

  // return <Presenter1 onClickHandler={onClickHandler} />
  return <Presenter2 onClickHandler={onClickHandler} />
}

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
