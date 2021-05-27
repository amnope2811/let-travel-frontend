import React from "react";
import { Button,Typography,Row,Col,Avatar,Space  } from "antd";

const {Title,Text,Link} = Typography;

import owner from 'images/owner.png'
import traveller from 'images/traveller.png'

const styles={
  title:{marginBottom:"2rem"},
  row:{width:'300px',margin:"26px 0"},
  avatar:{marginBottom:"1rem",cursor:"pointer"},
  colSelected:{backgroundColor:'#f0f8ff',borderRadius:"30px"},
  avaSelected:{transform:"scale(1.3)"},
  col:{padding:"12px"},
  button:{width:"200px"}
}

export default function RoleSelected(props) {
    const [selected,setSelected] = React.useState();
    const {setRole} = props;

    const selectRole=(e)=>{
        setSelected(e);
    }
    const clickNext=()=>{
        setRole(selected);
    }

  return (
    <>
        <Title level={3} style={styles.title}>Let's Travel</Title>
        <Text>Please select</Text>

        <Row gutter={24} style={styles.row}>
            <Col span={12} style={selected=="owner"?{...styles.colSelected,...styles.col}:styles.col}>
                <Space direction="vertical">
                    <Avatar 
                        onClick={()=>selectRole('owner')} 
                        style={selected=="owner"?
                                {...styles.avatar,...styles.avaSelected}
                                :styles.avatar
                            } 
                        size={64} 
                        src={owner}
                    />
                    <Text strong>Place Owner</Text>
                </Space>
            </Col>
            <Col span={12} style={selected=="user"?{...styles.colSelected,...styles.col}:styles.col}>
                <Space direction="vertical">
                    <Avatar 
                        onClick={()=>selectRole('user')} 
                        style={selected=="user"?
                                {...styles.avatar,...styles.avaSelected}
                                :styles.avatar
                            } 
                        size={64} 
                        src={traveller}
                    />
                    <Text strong>Traveller</Text>
                </Space>
            </Col>
        </Row>
            
        <Button type="primary" htmlType="submit" onClick={clickNext} size="large" style={styles.button}>Next</Button>
    </>
  );
}

