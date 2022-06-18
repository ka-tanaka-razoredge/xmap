import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Container from '../components/container_in_zapper';

export default (props) => {
  const paneForContainers = useRef(null);
  const [aggregate, setAggregate] = useState([
    { id: 1, caption: 'テレビ台', what: 'container.shelf', logo: null },
    { id: 2, caption: 'Youtube', what: null, logo: 'http://192.168.10.110/thumbnails_for_xmap/0000/youtube.png' },
    { id: 3, caption: '1F居間', what: null },
    { id: 4, caption: 'waist pouch', what: 'container.pouch' },
    { id: 5, caption: 'otis', what: 'container.portable' },
    { id: 6, caption: 'drawer-2 on wagon', what: 'container.drawer' },
  ]);
  
  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://192.168.10.7:3900/component/index_for_containers`,
            {
//                withCredentials: true,
                headers: {
//                    "Access-Control-Allow-Credentials": true,
//                    "Content-Type": "application/json",
//                    "Access-Control-Allow-Origin": "*"
                }
            }
      );
      setAggregate(response.data.data);
    })();
  }, []);
  
  return (
    <div style={{ width: '20%', height: '90%' }}>
      <div style={{ border: '1px solid black' }}>zapper_by_cotainer</div>
      <div style={{ border: '1px solid black' }}>online service&emsp;&emsp;人文</div>
      <div ref={ paneForContainers } style={{ border: '1px solid black', overflow: 'scroll', height: '850px' }}>
      {
        aggregate.map((value) => {
          return (
            <Container core={ value } sendComponents={ props.sendComponents } />
          )
        })
      }
      </div>
    </div>
  )
}