# react-pagination-lite

# Description

A light weight react pagination component built using react hooks and styled using flex layout.It comes with minimal pagination, css configuration.

### Features

-   Customizable
-   Responsive
-   SSR support
-   Does not rely on additional css reference other than configuration

### Demo

<https://hdhami.github.io/react-pagination-lite.html>

### Installing as a package

`npm install react-pagination-lite --save`

### Usage

```javascript
import React, { useState } from 'react';
import { render } from 'react-dom';
import Pagination from 'react-pagination-lite';

const PaginationDemo = () => {
    const [activePage, setActivePage] = useState(1);

    return (
        <Pagination
            range={3}
            activePage={activePage}
            totalCount={27}
            itemsPerPage={5}
            onPaginate={pageId => {
                setActivePage(pageId);
            }}
            styles={{
                navigationBtns: {
                    activeIconColor: '#000',
                    inactiveIconColor: '#b5b5b5',
                    borderColor: '#eeeeee'
                },
                paginationCells: {
                    padding: '0 12px',
                    activeBgColor: '#92a772',
                    inactiveBgColor: '#f2f2f2',
                    textColor: '#000000'
                }
            }}
        />
    );
};

render(<PaginationDemo />, document.getElementById('root'));
```

| Attributes   |    Type    |                        Default                         | Description                                       |
| :----------- | :--------: | :----------------------------------------------------: | :------------------------------------------------ |
| range        |  `number`  |                          `3`                           | number of pagination blocks to be shown at a time |
| activePage   |  `number`  |                          `1`                           | active page id                                    |
| totalCount   |  `number`  | `` | total number of records to be shared across pages |
| itemsPerPage |  `number`  |                          `5`                           | records to be shown on a page                     |
| onPaginate   | `function` |       `` | callback to be invoked on page change       |
| styles       |  `object`  | `` | styles for pagination cell, next, prev navigation |

=======================

### Contributing

=======================

### Raising issues

=======================

## License

Please see [LICENSE] for details.

[license]: https://github.com/hdhami/react-pagination-lite/blob/master/LICENSE
