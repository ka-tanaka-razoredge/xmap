import React, { useRef } from 'react';
import ZapperByContainer from '../components/zapper_by_container';
import Finder from '../components/finder';

/**
 * xmap/finder
 * 
 */
export default () => {
  const finder = useRef(null);
  const sendComponents = (lop) => {
    finder.current.setComponents(lop.components);
  }
  
  return (
    <div>
      <div style={{ border: '1px solid black' }}>finder registerer</div>
      <div style={{ display: 'flex' }}>
        <ZapperByContainer sendComponents={ sendComponents } />
        <Finder ref={ finder } />
      </div>
    </div>
  )
}