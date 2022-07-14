import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super();
        this.state = {
            words: 0,
            users: 0,
        };
    }

    componentDidMount = () => {
        fetch('https://quiz-it-api.herokuapp.com/api/statistic/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        words: result.results.words,
                        users: result.results.users,

                    });
                },
                (error) => {
                }
            )
    };



    render() {
        const { words, users } = this.state;
    
        return (  
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r">

            
            <div className="relative ">
            <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-[400px] h-[400px] bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-[400px] h-[400px] bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4">
           
            <div className="rounded-lg shadow-xl bg-gray-800 text-white">
                <div className="border-b border-gray-800 px-8 py-3">
                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                </div>
                <div className="px-8 py-6">
                    <p><em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() {'{'}</p>
                    <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> {'{'}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">'Quiz It'</span>,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;creator: <span className="text-yellow-300">'M.E.K'</span>,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;wordCount: <span className="text-yellow-300">{words}</span>,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;userCount: <span className="text-yellow-300">{users}</span>,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;version: <span className="text-yellow-300">'v0.0.2'</span>,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;forMore: <span className="text-yellow-300">'<a href="https://erdemkosk.com" target="_blank" className="text-yellow-300 hover:underline focus:border-none" rel="noreferrer">https://erdemkosk.com</a>'</span>,</p>
                    <p>&nbsp;&nbsp;{'}'}</p>
                    <p>{'}'}</p>
                </div>
            </div>
        </div>

            </div>
        </div>   
       
        )
    }
}


