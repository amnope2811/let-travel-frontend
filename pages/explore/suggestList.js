import { Input,Typography,Card,Row,Col,Carousel  } from "antd";
import React from "react";
const { Text } = Typography;
import Router from "next/router";
const {Meta} = Card;
const contentStyle = {
    height: '405px',
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundColor:"#00af91",
}
const textEllipsis={
    fontSize:'14px',
    fontWeight:'100',
    whiteSpace:"nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
};
export default function SearchList(props) {
    const {suggest,popular} = props?.reducer?.api;
    const {action} = props;
    React.useEffect(()=>{
        action.api?.getSuggest();  
        action.api?.getPopular(); 
    },[])

    const clickPlace=(e)=>{
        action.interact.clearPlace();
        action.interact.postPlace({item:e});
        Router.push(`/place`);
    }

  return (
    <>
        <div style={{margin:"24px"}}>
            <Row gutter={{ sm:0, md: 36}} style={{margin:"8px"}}>
                <Col md={12} sm={24}>
                    <Text style={{fontSize:"20px"}}>Most popular</Text>
                    <Carousel effect="fade" autoplay>
                        {(popular?.places||[]).map(v=>{
                            return <>
                                <div style={contentStyle} key={`1${v}`}>
                                    <Card
                                       cover={
                                            <img 
                                                onClick={()=>clickPlace(v)} 
                                                style={{cursor: 'pointer'}} 
                                                alt="example" height="260px" 
                                                src={`http://150.95.30.29:8081${v.img?.imagePath}`}
                                            />
                                        }
                                        style={{borderShadow:"none",borderRadius:"unset"}}
                                    >
                                        <Meta 
                                            title={v.name} 
                                            description={<div style={textEllipsis}>{v.description}</div>} 
                                        />
                                    </Card>
                                </div>
                            </>;
                        })}
                    </Carousel>
                </Col>
                <Col md={12} sm={24}>
                    <Text style={{fontSize:"20px"}}>Suggest for you</Text>
                    <Carousel effect="fade" autoplay>
                        {(suggest?.places||[]).map((v,i)=>{
                            return <>
                                <div style={contentStyle} key={`2${v}`}>
                                    <Card
                                        cover={
                                            <img 
                                                onClick={()=>clickPlace(v)} 
                                                style={{cursor: 'pointer'}} 
                                                alt="example" height="260px" 
                                                src={`http://150.95.30.29:8081${v.img?.imagePath}`}
                                            />
                                        }
                                        style={{borderShadow:"none",borderRadius:"unset"}}
                                    >
                                        <Meta 
                                            title={v.name} 
                                            description={<div style={textEllipsis}>{v.description}</div>} 
                                        />
                                    </Card>
                                </div>
                            </>;
                        })}
                    </Carousel>
                </Col>
            </Row>
        </div>
    </>
  );
}
