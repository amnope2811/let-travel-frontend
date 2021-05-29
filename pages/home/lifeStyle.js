import { Input,Typography,Card,Button,Row,Col } from "antd";
import { ShoppingOutlined,BugOutlined,HeartOutlined,CoffeeOutlined } from "@ant-design/icons";
const { Title,Text } = Typography;
import React from "react";
import Router from "next/router";
const styles = {
    button:{backgroundColor:"transparent",boxShadow:"unset",margin:'12px',minWidth:'100px'},
    text:{display:'block',color:"white",fontSize:'16px'}
}
export default function LifeStyle(props) {
    const {action,reducer} = props;
  
    const clickStyle=(e,key)=>{
        action?.interact?.putStyle({style:e,keyword:key});
        Router.push('./explore');
    }

    React.useEffect(() => {
        action?.interact?.clearStyle();
    },[])
  return (
    <>
        <div style={{textAlign:"center",padding:'24px'}}>
                <Title level={3} style={{color:'white'}}>
                  Choose your style
                </Title>
                <div>
                    <Button 
                        onClick={()=>clickStyle('Shopping','ศูนย์การค้า')}
                        className="hover-scale"
                        style={styles.button}
                        size="large"
                        type="primary"
                        icon={<ShoppingOutlined style={{fontSize:"32px"}} />}
                        >
                            <Text style={styles.text}>Shopping</Text>
                            
                    </Button>
                    <Button 
                        onClick={()=>clickStyle('Natural','สวนสัตว์')}
                        style={styles.button}
                        className="hover-scale"
                        size="large"
                        type="primary"
                        icon={<BugOutlined style={{fontSize:"32px"}} />}
                        >
                            <Text style={styles.text}>Natural</Text>
                    </Button>
                    <Button 
                        onClick={()=>clickStyle('Spiritual','วัด')}
                        style={styles.button}
                        size="large"
                        className="hover-scale"
                        type="primary"
                        icon={<HeartOutlined style={{fontSize:"32px"}} />}
                        >
                             <Text style={styles.text}>Spiritual</Text>
                    </Button>
                    <Button 
                        onClick={()=>clickStyle('Cafe','สถานที่ท่องเที่ยวบันเทิงยามราตรี')}
                        style={styles.button}
                        size="large"
                        className="hover-scale"
                        type="primary"
                        icon={<CoffeeOutlined style={{fontSize:"32px"}} />}
                        >
                            <Text style={styles.text}>Cafe</Text>
                    </Button>
                </div>
        </div>
    </>
  );
}
