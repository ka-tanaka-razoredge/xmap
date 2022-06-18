import React from 'react';
import ZapperByContainer from '../components/zapper_by_container';

export default () => {
  return (
    <div>
      <div style={{ border: '1px solid black' }}>finder registerer</div>
      <div style={{ display: 'flex' }}>
        <div><ZapperByContainer /></div>
        <div>{/* right pane */}</div>
      </div>
    </div>
  )
}