import React from 'react';
import Header from 'components/Header';

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
        const { words, users} = this.state;
        return (
            <div>
                 <Header></Header>
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5 bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r">
    <div className="rounded-lg shadow-xl bg-gray-900 text-white">
        <div className="border-b border-gray-800 px-8 py-3">
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div className="px-8 py-6">
            <p><em className="text-blue-400">const</em> <span class="text-green-400">aboutMe</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() {'{'}</p>
            <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> {'{'}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">'Quiz It'</span>,</p>
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
            
        )
    }
}


