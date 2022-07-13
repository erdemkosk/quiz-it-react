import Quiz from 'components/Quiz'

import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mode: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount = () => {
    };

    handleClick(event) { 
        this.setState({
            mode: Number(event.target.id),
        });
    }

    render() {
        const { mode } = this.state;
        const selectedButton = 'inline-block p-4 w-full text-gray-900 bg-gray-100   active focus:outline-none dark:bg-gray-700 dark:text-white';
        const unselectedButton = 'inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'

        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r">

                <div className="relative ">
                    <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-[600px] h-[600px] bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-[600px] h-[600px] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="m-8 relative space-y-4">
                        <div className="p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                            <ul className=" mb-6  text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                                <li className="w-full">
                                    <button onClick={this.handleClick} id="1" className={mode === 1 ? selectedButton : unselectedButton} >Kelimeler</button>
                                </li>
                                <li className="w-full">
                                    <button onClick={this.handleClick}  id="2" className={mode === 2 ? selectedButton : unselectedButton}>Boşluk Doldurma</button>
                                </li>

                            </ul>
                            <Quiz key={mode} mode = {mode}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


