import React from 'react';

export default class Quiz extends React.Component {
    constructor(props) {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            isLoadedForNextQuestion : false,
            answers: [],
            correctAnswer: -1,
            selectedButton: -1,
            question: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.getDataFromApi();
    }

    renderButtons() {
        const { isLoaded, answers, correctAnswer, selectedButton } = this.state;

        const defaultButton =
        "mb-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center hover:scale-105"

        const successButton =
            "mb-3 text-white bg-green-600 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center hover:scale-105"

        const wrongButton =
            "mb-3 text-white bg-red-600 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center hover:scale-105"

        let buttons = [];

        if (isLoaded === false) {
            buttons = [0, 1, 2, 3].map((value, index) => {
                return <button disabled key={index} type="button" className="mb-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center hover:scale-105">
                    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                    Yükleniyor
                </button>

            })
        }

        else {
            buttons = answers.map((value, index) => {
                return <button id={index} onClick={this.handleClick} type="button" key={index} className={
                    selectedButton === correctAnswer && index === correctAnswer
                    ? successButton
                    : selectedButton !== correctAnswer && index === selectedButton
                    ? wrongButton
                    : defaultButton
                      
                  }>{value}</button>
            })
        }

        return buttons;
    }

    handleClick(event) {
        const { correctAnswer, selectedButton, isLoadedForNextQuestion } = this.state;

        if(isLoadedForNextQuestion){
            return;
        }

        this.setState({
            selectedButton : Number(event.target.id),
            isLoadedForNextQuestion : true,
        });

        if (selectedButton === correctAnswer) {
            console.log('doğru');
        } 
        
        setTimeout(() => {
            this.getDataFromApi();
            this.setState({
                selectedButton : -1,
                isLoadedForNextQuestion: false,
            });
        }, 2000);
    }

    getDataFromApi() {
        fetch("https://quiz-it-api.herokuapp.com/api/question/?difficulty=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        answers: result.results.answers,
                        correctAnswer: result.results.correctAnswer,
                        question: result.results.question,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { question } = this.state;
        return (
            <div className="p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <ul className=" mb-6  text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full">
                        <a href="!#" className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" >Kelimeler</a>
                    </li>
                    <li className="w-full">
                        <a href="!#" className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Boşluk Doldurma</a>
                    </li>

                </ul>
                <div className="mb-6">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">Başarım</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question}?</h5>
                    <span className="mb-6 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">2/12</span>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                {this.renderButtons()}

            </div>
        )
    }
}


