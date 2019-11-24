import React from 'react';

const Index = Presenter2;

export default Index;




/*************************/
function Presenter1(props) {
  const { value, onClick } = useButton({ text: 'click me!!hook'});
  return (
  <div>
    <button onClick={onClick}>{value}</button>
  </div>
  )
}
function Presenter2(props) {
  const buttonProps = useButton(props);
  return (
  <div>
    <button {...buttonProps}>click me2!</button>
  </div>
  )
}

function useButton(props) {
  const [value] = React.useState(props.text || '');
  const onClick = React.useCallback(() => {
    console.log('clicked!');
  }, []);

  return { value, onClick };
}
