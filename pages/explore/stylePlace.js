import { Input,Typography,Card,Button,Row,Col,Empty,List,Skeleton } from "antd";
import { ShoppingOutlined,BugOutlined,HeartOutlined,CoffeeOutlined } from "@ant-design/icons";
const { Search } = Input;
const { Title,Text,Link  } = Typography;
import React from "react";
import Router from "next/router";
const Item = List.Item;

let styles={
    button:{backgroundColor:"transparent",boxShadow:"unset",width:'100px'},
    inline:{display:"inline-block",margin:'12px auto'},
    block:{display:"block",margin:'28px 0'},
    text:{display:'block',color:"rgba(0, 175, 145, 0.49)"},
    selected:{transform:"scale(1.4)"}
}

export default function StylePlace(props) {
    const {reducer,action} = props;
    const {style,keyword} = reducer?.interact?.style||{};
    const {places} = reducer?.api;
    const {loading} = reducer?.component;

  React.useEffect(() => {
    action.api?.clearPlace();
    action.interact?.clearSearch();
    action.api.listPlace({q:keyword,type:'TAG'});
  },[keyword]);

  const clickList=(e)=>{
    action.interact.clearPlace();
    action.interact.postPlace({item:e});
    Router.push(`/place`);
  }

  const onSearch=(e)=>{
    action?.interact?.putSearch(e);
    Router.push(`/search`);
  }
  return (
    <>
        <Row gutter={16} style={{margin:'18px'}}>
            <Col md={0} sm={24} xs={24} style={{marginBottom:'22px'}}>
                <ChooseStyle 
                    {...props} 
                    styles={{button:{...styles.button,...styles.inline},text:styles.text,selected:styles.selected}} 
                    lifeStyle={style}
                />
            </Col>
            <Col md={21} sm={24} xs={24} >
                <Search placeholder="input search text" onSearch={onSearch} style={{margin:'12px 0'}}/>
                <Card style={{minHeight:"300px"}} className="isHeader">
                    {style ? 
                        <>
                            {places && 
                                <List
                                    style={{margin:"6px 0"}}
                                    itemLayout="horizontal"
                                    dataSource={places}
                                    renderItem={item => (
                                    <Item key={item.id} style={{cursor:"pointer",padding:"26px"}} onClick={()=>clickList(item)}>
                                        <Skeleton avatar title={false} loading={loading} active>
                                        <Row gutter={16}>
                                            <Col span={24}>
                                            <Title level={5}>{item.name}</Title>
                                            </Col>
                                            <Col span={24}>
                                            <Text>{item.description}</Text>
                                            </Col>
                                        </Row>
                                        </Skeleton>
                                    </Item>
                                    )}
                                />
                            }
                        </>:
                        <Empty 
                            image={Empty.PRESENTED_IMAGE_SIMPLE} 
                            description={<Title style={{color:"rgb(0 175 145 / 49%)"}} level={4}>Choose your're style</Title>} 
                            style={{padding:'50px'}}
                        />
                    }
                </Card>
            </Col>
            <Col md={3} sm={0} xs={0} >
                <ChooseStyle 
                    {...props} 
                    styles={{button:{...styles.button,...styles.block},text:styles.text,selected:styles.selected}} 
                    lifeStyle={style}
                />
            </Col>
        </Row>
      
    </>
  );
}

function ChooseStyle(props) {
    const clickStyle=(e,key)=>{
        props?.action?.interact?.putStyle({style:e,keyword:key});
    }
    return(
        <div style={{textAlign:'center'}}>
            <Button 
                onClick={()=>clickStyle('Shopping','ศูนย์การค้า')}
                className="hover-scale"
                style={props.lifeStyle == 'Shopping' ?{...props.styles.button,...props.styles.selected}:props.styles.button}
                size="large"
                type="primary"
                icon={<ShoppingOutlined style={{fontSize:"32px",color:"rgba(0, 175, 145, 0.49)"}} />}
            >
                <Text style={props.styles.text}>Shopping</Text>
                            
            </Button>
            <Button 
                onClick={()=>clickStyle('Natural','สวนสัตว์')}
                style={props.lifeStyle == 'Natural' ?{...props.styles.button,...props.styles.selected}:props.styles.button}
                className="hover-scale"
                size="large"
                type="primary"
                icon={<BugOutlined style={{fontSize:"32px",color:"rgba(0, 175, 145, 0.49)"}} />}
            >
                <Text style={props.styles.text}>Natural</Text>
            </Button>
            <Button 
                onClick={()=>clickStyle('Spiritual','วัด')}
                style={props.lifeStyle == 'Spiritual' ?{...props.styles.button,...props.styles.selected}:props.styles.button}
                size="large"
                className="hover-scale"
                type="primary"
                icon={<HeartOutlined style={{fontSize:"32px",color:"rgba(0, 175, 145, 0.49)"}} />}
            >
                <Text style={props.styles.text}>Spiritual</Text>
            </Button>
            <Button 
                onClick={()=>clickStyle('Cafe','สถานที่ท่องเที่ยวบันเทิงยามราตรี')}
                style={props.lifeStyle == 'Cafe' ?{...props.styles.button,...props.styles.selected}:props.styles.button}
                size="large"
                className="hover-scale"
                type="primary"
                icon={<CoffeeOutlined style={{fontSize:"32px",color:"rgba(0, 175, 145, 0.49)"}} />}
            >
                <Text style={props.styles.text}>Cafe</Text>
            </Button>
        </div>
    )
}

