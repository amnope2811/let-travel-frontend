import React from "react";
import { Button,Typography  } from "antd";
import { useRouter } from "next/router";
import Router from "next/router";
const { Title } = Typography;

export default function HomePage(props) {
  return (
      <>
        <MainComponent />
      </>
  );
}

function MainComponent() {
    const route=(e)=>{
        e.preventDefault();
        Router.push('/search')
    }
  return (
    <>
        <div class="home-background" style={{height:"100%"}}>
            <div style={{position:"absolute",width:"100%",bottom:"25px",textAlign:"center" }}>
                <Title level={5} onClick={route} style={{color:"black",cursor:"pointer"}}>Get Started</Title>
            </div>
        </div>
    </>
  );
}
