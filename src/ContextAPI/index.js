import React from 'react';
import { createContainer } from "unstated-next";

const Button = createContainer(useButton);

function Index(props) {
  return (
    <Button.Provider>
      <Presenter1 {...props} />
    </Button.Provider>
  );
}

export default Index;




/*************************/
function Presenter1(props) {
  const buttonProps = Button.useContainer();
  return (
  <div>
    <button {...buttonProps}>click me1!</button>
  </div>
  )
}
function Presenter2(props) {
  const buttonProps = Button.useContainer();
  return (
  <div>
    <button {...buttonProps}>click me2!</button>
  </div>
  )
}

function useButton(props) {
  const onClick = React.useCallback(() => {
    console.log('clicked!');
  }, []);

  return { onClick };
}
