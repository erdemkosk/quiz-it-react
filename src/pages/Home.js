import Main from 'components/Main'
import Header from 'components/Header';

import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <div>
 <Header></Header>
            <Main></Main>
            </div>
           
        )
    }
}


