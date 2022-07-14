/* eslint-disable jsx-a11y/anchor-is-valid */
import Icon from 'public/img/logo.png'
import {
    Link
} from 'react-router-dom'

import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selected: '0',
           
        };
        this.handleClick = this.handleClick.bind(this);
        
    }

    componentDidMount = () => {
    };

    handleClick(event) {
        this.setState({
            selected: event.target.id,
        });
    }

    render() {
        const { selected } = this.state;

        const selectedNav = 'block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 dark:text-white';
        const unselectedNav = 'block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

        return (
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={Icon} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />

                    </a>

                    <div  className="w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link id='0' onClick={this.handleClick} className={selected === '0' ? selectedNav : unselectedNav} to="/">Ana Sayfa</Link>
                            </li>
                            <li>
                                <Link id='1' to="/hakkinda" onClick={this.handleClick} className={selected === '1' ? selectedNav : unselectedNav}>Hakkında</Link>
                            </li>
                            <li>
                                <Link id='2' to="/top10" onClick={this.handleClick} className={selected === '2' ? selectedNav : unselectedNav}>Top10</Link>
                            </li>

                        </ul>
                    </div>

                   
                  
                </div>
            </nav>

        )
    }
}

