import { Input,Typography,List,Skeleton,Button,Row,Col,Card,Empty   } from "antd";
import React from "react";
const { Search } = Input;
const { Text,Title } = Typography;
const Item = List.Item;
import moment from 'moment';
const Meta = Item.Meta;
import Router from "next/router";
import {
    DeleteOutlined
  } from '@ant-design/icons';

const styles={
    card:{width:"100%"},
    text:{display:'block'},
    title:{margin:'0.5rem'},
    time:{fontSize:'16px',fontWeight:'400'},
    day:{fontSize:'24px',fontWeight:'500'},
    date:{fontSize:'16px',fontWeight:'300'},
    name:{fontSize:'28px',fontWeight:'600'},
    tickets:{fontSize:'16px',fontWeight:'100'},
    cardToday:{borderLeft:'4px solid red',borderRadius:'8px'},
    cardMonth:{borderLeft:'4px solid orange',borderRadius:'8px'},
    deleted:{background:"unset !important"},
    empty:{marginTop:'20vh'}
  }

export default function BookListPage(props) {
    const {reducer,action} = props;
    const { loading} = props.reducer.component;

    const bookedList = (reducer?.interact?.book||[]).reduce((acc,v)=>{
        if(v==null)return;
        let y = moment(v.date).format('YYYY');
        let m = moment(v.date).format('MM');
        acc[`${y}-${m}`] = {
            ...( acc[`${y}-${m}`] ||{}),
            title:`${y}-${m}`
        }
        
        acc[`${y}-${m}`].list =[
            ...(acc[`${y}-${m}`]?.list || [] ),
            v
        ];

        return acc;
    },{});

    const removeBooked=(e)=>{
        console.log(action);
        action?.api?.deleteBook({placeId:e.id,username:reducer.api.me.user?.username});
    }
  return (
    <>
        {Object.keys(bookedList||{}).length>0?
            <Row gutter={6}>
                {Object.keys(bookedList||{}).map(item=>{
                    return(
                        <>
                            <Col span={24} style={{textAlign: 'center'}}>
                                <Title level={5} style={styles.title}> { moment(bookedList[item].title).format('YYYY-MMMM')}</Title>
                            </Col>
                            
                                {
                                    (bookedList[item]?.list||[]).map(v=>{
                                        return (
                                            <Col md={12} sm={24} xs={24} key={v.name}>
                                                <div  style={{margin:"0 12px 18px",padding:"0px"}}>
                                                    <Card 
                                                        style={
                                                            moment(Date.now()).format('YYYY-MM-DD') ===moment(v.date).format('YYYY-MM-DD')? 
                                                                {...styles.card,...styles.cardToday}
                                                                :moment(Date.now()).format('YYYY-MM-DD') ===moment(v.date).format('YYYY-MM-DD')?
                                                                    {...styles.card,...styles.cardMonth}
                                                                    :{...styles.card}
                                                            }
                                                    >
                                                        <Row gutter={24}>
                                                            <Col md={6} sm={8} xs={7} style={{borderRight:"1px solid gray"}}>
                                                                <Text style={{...styles.text,...styles.day}}>{moment(v.date).format('DD')}</Text>
                                                                <Text style={{...styles.text,...styles.date}}>{moment(v.date).format('dddd')}</Text>
                                                            </Col>
                                                            <Col md={15} sm={12} xs={13} style={{textAlign:'left',paddingLeft:'32px'}}>
                                                                <Text style={{...styles.text,...styles.name}}>{v.name}</Text>
                                                                <Text style={{...styles.text,...styles.time}}>{moment(v.date).format('HH.mm A')}</Text>
                                                                <Text style={{...styles.text,...styles.tickets}}>Tickets: {v.tickets}</Text>
                                                            </Col>
                                                            <Col md={3} sm={4} xs={4} style={{textAlign:'center'}}>
                                                                <Button 
                                                                    onClick={()=>removeBooked(v)}
                                                                    style={styles.deleted}
                                                                    size="large"
                                                                    danger 
                                                                    icon={<DeleteOutlined 
                                                                    style={{ color: 'red' }} />}
                                                                    loading={loading}
                                                                >
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </div>
                                                            
                                            </Col>
                                        )
                                    })
                                }
                        </>
                    )
                })}
            </Row>
        :
        <div style={styles.empty}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<Title style={{color:"rgb(0 175 145 / 49%)"}} level={4}>You're not booking yet!!</Title>} />
        </div>}
    </>
  );
}
