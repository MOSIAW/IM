/**
 * @description 项目挂在根组件
 * @author MOSIAW
 * @since version 1.0
 */

import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PC from './PC'

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const isPC = useMediaQuery({
    query: '(min-width: 768px)'
  })

  return (
    <>
      {
        isMobile && <div>This is Mobile Web to be developed.</div>
      }
      {
        isPC && <PC/>
      }
    </>
  );
}

export default App;
