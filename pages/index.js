import React from "react";
import { Card } from "antd";
import Main from "./Main";
import HomePage from './home';
export default function Home() {
  return (
    <Main>
      <ComponentDidMount />
      <HomePage />
    </Main>
  );
}

function ComponentDidMount(props){
  const { action,reducer } = props;
  
  React.useEffect(() => {
    
  }, []);
  return <></>;
}