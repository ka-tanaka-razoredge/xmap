import React, { createRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export default forwardRef((props, ref) => {
  const refs = useRef([]);
  const [aggregate, setAggregate] = useState([]);

  useEffect(() => {
  }, []);

  useImperativeHandle(ref, () => ({
    setComponents(value) {
      ref.current.scrollTop = 0;
      refs.current.length = 0;
      value.map((v, index) => {
        refs.current[index] = createRef();
      });
      setAggregate(value);
    },
  }));

  return (
    <div style={{ width: '80%' }}>
      <div style={{ border: '1px solid black', height: '90%', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
      {
        aggregate.map((value) => {
          /* TODO: en({to: Component}) */
          return (
            <div style={{ display: 'flex', border: '1px solid black', width: '250px', height: '250px', margin: '5px' }}>
              <div>NO IMAGE</div>
              <div>
                <div>id: { value.id }</div>
                <div>caption: { value.caption }</div>
              </div>
            </div>
          )
        })
      }
      </div>
      <div id='footer'>件数: 0, 頁: 1</div>
    </div>
  )
})