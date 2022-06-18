import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default (props, ref) => {
  const refForChildren = useRef(null);
  const [component, setComponent] = useState(null);

  useEffect(() => {
  }, []);

  const fetchIcon = (container) => {
    let uri = 'http://192.168.10.7:3900/res/container_green.png';
    if (container.what === 'container.pouch') {
      uri = 'http://192.168.10.7:3900/res/container_pouch.png';
    } else if (container.what === 'container.portable') {
      uri = 'http://192.168.10.7:3900/res/container_portable.png';
    } else if (container.what === 'container.shelf') {
      uri = 'http://192.168.10.7:3900/res/container_shelf.png';
    } else if (container.what === 'container.drawer') {
      uri = 'http://192.168.10.7:3900/res/container_drawer.png';
    }
    
    return (
      <img src={ uri } width='50px' height='50px' />
    )
  }
  
  const fetchCaption = (container) => {
    let reply = container.caption;
    if (container.logo) reply = (<img src={ container.logo } />);
    return reply;
  }
  
  const toggleViewForChildrenVisibility = (lop) => {
    const element = document.getElementById('cmp-' + lop.component.id);
    if (element.style.height === '0px') {
      element.style.height = '';

      // TODO: mediatorへlop.componentを渡す

      if (lop.component.id !== props.core.id) {
      } else {
        (async () => {
          const response = await axios.get('http://192.168.10.7:3900/associative_component/index?root=' + lop.component.id);
          setComponent(response.data);
        })();
      }
    } else {
      element.style.height = '0px';
    }
  }
  
  const drawChild = (component, floor) => {
    const indent = () => {
      const reply = [];
      for (let i = 0; i <= floor - 1; i++) {
        reply.push((<div>&emsp;</div>));
      }
      return reply;
    }
    
    if (1 <= component.children.length) {
      return (
        <div>
          <div style={{ display: 'flex'}}>
            { indent() }
            { fetchIcon(component.id) }
            <div onClick={ (e) => { toggleViewForChildrenVisibility({event: e, component: component});  } }>{ component.caption + ' ' + component.id }</div>
          </div>
          <div id={ 'cmp-' + component.id } style={{ overflow: 'hidden', height: 0 + 'px' }}>
          {
            component.children.map((value) => {
              return drawChild(value, floor + 1)
            })
          }
          </div>
        </div>
      );
    } else {
/*      
      return (
        <div>
          <div style={{ display: 'flex'}}>
            { indent() }
            <div onClick={ (e) => { doIt({event: e, component: component});  } }>{ component.caption + ' ' + component.id }</div>
          </div>
        </div>
      );
*/      
    }
  }
  
  const drawChildren = () => {
    if (component) {
        return component.children.map((value) => {
          return drawChild(value, 1)
        })
    }
  }
  
  return (
    <div>
      <div style={{ display: 'flex' }} onClick={ (e) => { toggleViewForChildrenVisibility({event: e, component: props.core}) } }>
        { fetchIcon(props.core) }
        { fetchCaption(props.core) }
        &emsp;{ props.core.id }
      </div>
      <div id={ 'cmp-' + props.core.id } style={{ overflow: 'hidden', height: '0px' }}>
      {
        drawChildren()
      }
      </div>
    </div>
  )
}
