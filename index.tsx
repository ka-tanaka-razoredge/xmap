import React, { useEffect, useState, useRef } from 'react'

export default () => {
  const [aggregate, setAggregate] = useState([
    { id: 1, caption: 'Youtube', logo: 'http://192.168.10.110/thumbnails_for_xmap/0100/327815.jpg' },
    { id: 2, caption: '1F居間' },
    { id: 3, caption: 'waist pouch' },
    { id: 3, caption: 'otis' },
  ]);
  
  useEffect(() => {
  }, []);
  
  return (
    <div>
    {
      aggregate.map((value) => {
        let uri = 'res/container_green.png';
        if (value.caption === 'waist pouch') {
          uri = 'res/pouch.png';
        } else if (value.caption === 'otis') {
          uri = 'http://192.168.10.7:3900/res/container_green.png';
        }
        
        let caption = value.caption;
        if (value.logo) caption = <img src={ value.logo } height='50px' />;
        
        return (
          <div style={{ display: 'flex' }}>
            <img src={ uri } width='50px' height='50px' />
              { caption }
          </div>
        )
      })
    }
    </div>
  )
}