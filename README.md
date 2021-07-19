# React Hook Infinite Scroll
[![npm version](https://badge.fury.io/js/use-infinite-scroll-hook.svg)](https://www.npmjs.com/package/use-infinite-scroll-hook)

A simple React Hook implements infinite scrolling for your component. Please pass a ref container and a load function to the hook. The hook calls your load function when the scroll hits the bottom. If you need to call function when the scroll hits the top just use `flex-direction: column-reverse` for your container.

## Installation
```bash
    #npm
    $ npm install use-infinite-scroll-hook
    
    #yarn
    $ yarn add use-infinite-scroll-hook
```


## Usage

If you need to scroll up. Use `flex-direction: collumn-reverse` on your container.

```js
import React from 'react';
import { useRef } from 'react';
import { useInfiniteScrollHook } from 'use-infinite-scroll-hook/lib';

export default function App() {
  const targetContainer = useRef<HTMLDivElement>(null);

  const loadData = () => console.log('load');

  useInfiniteScrollHook(targetContainer, loadData);

  return (
    <div className="App">
      <div ref={container} className='container'> //style={{display: 'flex', flexDirection: 'column-reverse'}} for scroll up
        {... someBigData ...}
      </div>
    </div>
  );
}

```

## Params
  * **`refContainer`: RefObject<HTMLElement> *(required)*;**
  * **`onLoad`: Function *(required)*;**