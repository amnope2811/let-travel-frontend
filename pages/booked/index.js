import React from "react";
import Main from "../Main";
import Router from 'next/router';
import BookedListPage from './bookedList';
import { message } from "antd";

export default function BookedPage(props) {
  return (
    <Main>
      <ComponentDidMount/>
      <MainComponent/>
    </Main>
  );
}

function ComponentDidMount({ action, reducer}) {
  return <></>;
}
function MainComponent(props) {
  
  const { error} = props.reducer.component;
  const {book} = props?.reducer?.api;

  React.useEffect(()=>{
      if(book?.message){
       message.success(book.message);
      }
  },[book])


  React.useEffect(() => {
      if(error!=null) {
        message.error(error);
      }
  }, [error]);
  return (
    <>
      <BookedListPage {...props}/>
    </>
  );
}
