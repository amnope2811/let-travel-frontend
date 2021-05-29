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
        <div className="home-background" style={{height:"100%",minHeight:'500px'}}>
            <div style={{position:"absolute",width:"100%",bottom:"25px",textAlign:"center" }}>
              <Button onClick={route} type="primary" size="medium">
                <Title level={5} style={{color:"white"}}>
                  Get Started
                </Title>
              </Button>
            </div>
            <LifeStyle {...props}/>
        </div>
    </>
  );
}
