import React from "react";
import Main from "../Main";
import SearchPad from "./searchpad"
import { useRouter } from "next/router";

export default function SearchPage(props) {
    const [searchValue, setSearchValue] = React.useState();
  return (
    <Main>
      <ComponentDidMount/>
      <MainComponent setSearchValue={setSearchValue} />
    </Main>
  );
}

function ComponentDidMount({ action, reducer}) {
  return <></>;
}
function MainComponent(props) {
  return (
    <>
      <SearchPad {...props}/>
    </>
  );
}
