import React,{useEffect} from "react";
import Main from "../Main";
import Router from 'next/router';
import BookedListPage from './bookedList';

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
  return (
    <>
      <BookedListPage {...props}/>
    </>
  );
}
