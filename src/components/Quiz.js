import React from 'react';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isLoadedForNextQuestion: false,
            answers: [],
            correctAnswer: -1,
            selectedButton: -1,
            question: '',
            cumulativeSuccessQuestionCount: 0,
            successCount: 1,
            totalQuestionCount: 0,
            level : 1,
            mode: this.props.mode
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.getDataFromApi();
    }

    renderButtons() {
        const { isLoaded, answers, correctAnswer, selectedButton, } = this.state;

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

    calculateLevel() {
        const { successCount } = this.state;

        const level =  Math.ceil(successCount / 5);

        this.setState({
            level: level < 5 ? level : 5,
        });
    }

    renderStarts() {
        const { level } = this.state;

        const values = [];

        const successStarCount = level;
        const unsuccessStarCount = 5-level;
        
        for (let index = 0; index < successStarCount; index++) {
            values.push(<svg key = {index} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
        }

        for (let index = 0; index < unsuccessStarCount; index++) {
            values.push(<svg key = {index + 'empty'} aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
        }

        return values;
    }

    handleClick(event) {
        const { correctAnswer, isLoadedForNextQuestion, cumulativeSuccessQuestionCount, successCount, totalQuestionCount } = this.state;

        if (isLoadedForNextQuestion) {
            return;
        }

        this.setState({
            selectedButton: Number(event.target.id),
            isLoadedForNextQuestion: true,
            totalQuestionCount: totalQuestionCount + 1
        });

        if (Number(event.target.id) === correctAnswer) {
            this.setState({
                cumulativeSuccessQuestionCount: cumulativeSuccessQuestionCount + 1,
                successCount: successCount + 1,
            });
        }

        else {
            this.setState({
                successCount: successCount > 1 ? successCount - 1 : successCount,
            });
        }

        this.calculateLevel();

        setTimeout(() => {
            this.getDataFromApi();
            this.setState({
                selectedButton: -1,
                isLoadedForNextQuestion: false,
            });
        }, 1500);
    }

    getDataFromApi() {
        const { mode, level } = this.state;

        const url = mode === 1
            ? 'https://quiz-it-api.herokuapp.com/api/question/?difficulty=' + level
            : 'https://quiz-it-api.herokuapp.com/api/question/fill-in-blanks?difficulty=' + level


        fetch(url)
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
        const { question, cumulativeSuccessQuestionCount, totalQuestionCount } = this.state;

        return (
            <div >
                <div className="mb-6 ">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">Seviye</span>
                        <div className="flex items-center">
                        {this.renderStarts()}
</div>
                    </div>
                    
                </div>

                <div className="flex items-center justify-between w-96">
                    <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question}?</h5>
                    <span className="mb-6 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{cumulativeSuccessQuestionCount} / {totalQuestionCount}</span>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                {this.renderButtons()}
            </div>
        )
    }
}


