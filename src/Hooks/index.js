import React from 'react';

const Index = Presenter2;

export default Index;




/*************************/
function Presenter1() {
  const { value, onClick } = useButton({ text: 'click me!!hook'});
  return (
  <div>
    <button onClick={onClick}>{value}</button>
  </div>
  )
}
function Presenter2() {
  const buttonProps = useButton();
  return (
  <div>
    <button {...buttonProps}>click me2!</button>
  </div>
  )
}

function useButton() {
  const [value] = React.useState(props.text || '');
  const onClick = React.useCallback(() => {
    console.log('clicked!');
  }, []);

  return { value, onClick };
}
