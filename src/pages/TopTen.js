import React from 'react';

export default class TopTen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            users: [],
        };
    }

    componentDidMount = () => {
        fetch('https://quiz-it-api.herokuapp.com/api/user/top-ten')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        users: result.results,
                    });
                },
                (error) => {
                }
            )
    };

    render() {
        const { users } = this.state;
      
        return (
                <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5 bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Kullanıcı
                                </th>
                                <th scope="col" className="py-3 px-6">
                                   Kayıt Tarihi
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Seviye
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Deneyim
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.user.nameSurname}
                                    </th>
                                    <td className="py-4 px-6">
                                        {
                                            new Date(item.user.createdAt).getDate() +
                                            "/" +
                                            (new Date(item.user.createdAt).getMonth() + 1) +
                                            "/" +
                                            new Date(item.user.createdAt).getFullYear()}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.user.level}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.user.currentExperience + '/' + item.user.levelExperience}
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
        )
    }
}


