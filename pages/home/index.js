import React from "react";
import { Button,Typography  } from "antd";
import { useRouter } from "next/router";
import Router from "next/router";
import LifeStyle from './lifeStyle.js';

const { Title,Text } = Typography;

export default function HomePage(props) {
  return (
      <>
        <MainComponent {...props}/>
      </>
  );
}

function MainComponent(props) {
    const route=(e)=>{
        e.preventDefault();
        Router.push('/explore')
    }
  return (
    <>
        <div className="home-background" style={{height:"100%"}}>
            <div style={{position:"absolute",width:"100%",bottom:"25px",textAlign:"center" }}>
                <Title className="hover-scale" level={5} onClick={route} style={{color:"white",cursor:"pointer"}}>
                  Get Started
                </Title>
            </div>
            <LifeStyle {...props}/>
        </div>
    </>
  );
}
