import React from 'react';

function Profile(props) {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt="Profile" width="200px"></img>
            <h2>{props.name} {props.surname}</h2>
            <p><span role='img' aria-label='gender'>👤 {props.gender}</span></p>
            <p><span role='img' aria-label='gender'>🌐 {props.region}</span></p>
            <div>
            <p><span role='img' aria-label='all rights are free'>All results, including photos, are free for all purposes. 🤘</span></p>
            </div>
        </div>
    )
}

class HomeThree extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("https://uinames.com/api/?amount=10")
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        const userData = this.state.users.map(data =>
            <Profile key={data.id} name={data.name} surname={data.surname} gender={data.gender} region={data.region} />);
        const randomUser = userData[Math.floor(Math.random() * userData.length)]
        return (
            <div>
                {randomUser}
            </div>
        );
    }
}

export default HomeThree;   