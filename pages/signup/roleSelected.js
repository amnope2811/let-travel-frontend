import React from "react";
import { Button,Typography,Row,Col,Avatar,Space  } from "antd";

const {Title,Text,Link} = Typography;
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
    let role;

    const selectRole=(e)=>{
        setSelected(e);
    }
    const clickNext=()=>{
        setRole(selected);
    }
    
    React.useEffect(()=>{
        console.log(selected);
    },[selected])

    const signup=()=>{
      props?.action?.api.postApiAuthSignup({
        "username": "user011",
        "email": "user@gmail.com",
        "password": "user01",
        "roles": ["user"]
      });
    }
  return (
    <>
        <Title level={3} style={styles.title}>Let's Travel</Title>
        <Text>Please select</Text>

        <Row gutter={24} style={styles.row}>
            <Col span={12} style={selected=="Place Owner"?{...styles.colSelected,...styles.col}:styles.col}>
                <Space direction="vertical">
                    <Avatar 
                        onClick={()=>selectRole('Place Owner')} 
                        style={selected=="Place Owner"?
                                {...styles.avatar,...styles.avaSelected}
                                :styles.avatar
                            } 
                        size={64} 
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                    />
                    <Text strong>Place Owner</Text>
                </Space>
            </Col>
            <Col span={12} style={selected=="Traveller"?{...styles.colSelected,...styles.col}:styles.col}>
                <Space direction="vertical">
                    <Avatar 
                        onClick={()=>selectRole('Traveller')} 
                        style={selected=="Traveller"?
                                {...styles.avatar,...styles.avaSelected}
                                :styles.avatar
                            } 
                        size={64} 
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                    />
                    <Text strong>Traveller</Text>
                </Space>
            </Col>
        </Row>
            
        <Button type="primary" htmlType="submit" onClick={clickNext} size="large" style={styles.button}>Next</Button>
    </>
  );
}

