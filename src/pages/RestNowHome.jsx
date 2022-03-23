import React from 'react';
import { Header } from '../components/Header';
import { UserList } from './UserList';
import { userService } from '../services/userService';
import { Settings } from './Settings';

export class RestNowHome extends React.Component {
    componentDidMount() {
        userService.init()  // Initial user setting on LS - if there isn't one.
        const currUser = { ...userService.load() }; // loading the name from LS
        this.setState({ currUser }) // setting user in state.
        const users = userService.getUsers();
        users.push(currUser);
        this.setState({ users });

        //this.setState({users: [...this.state.users, currUser]});
    }
    componentDidUpdate() {
        // The updated state is passed only on didUpdate lifeCycle
        if (this.state.route === 'settings') userService.update(this.state.userToEdit);


    }
    state = {
        currUser: null,
        userToEdit: null,
        route: 'home',
        users: []
    }
    getGreet = () => {
        let currTime = new Date();
        if (currTime.getHours() <= 5) return "Good night";
        if (currTime.getHours() <= 11) return "Good norning";
        if (currTime.getHours() <= 18) return "Good Afternoon";
        if (currTime.getHours() <= 21) return "Good Evening";
        return "Good night";
    }

    handleNameChange = (ev) => {
        const fullname = ev.target.value; // Get the value from the event
        // Setting the value in state
        this.setState({ userToEdit: { ...this.state.userToEdit, fullname } })
        this.setState({ currUser: { ...this.state.currUser, fullname } });
        let users = this.state.users;
        console.log('users//', users);
        console.log('this.state.currUser.id', this.state.currUser)
        const idx = this.getArrIdxById(users, this.state.currUser.id);
        users[idx].fullname = fullname;
        this.setState({ users });

    }

    getArrIdxById(users, id) {
        return users.findIndex(user => user.id === id);
    }

    setUserToEdit = () => {
        const userToEdit = { ...this.state.currUser };
        this.setState({ userToEdit });
    }


    changeRouting = (route, ev) => {
        ev.stopPropagation();
        this.setState({ route });
    }
    get greet() {
        return this.getGreet();
    }
    get users() {
        return this.state.users;
    }

    get route() {
        return this.state.route;
    }

    get currUser() {
        return this.state.currUser;
    }

    get userToEdit() {
        return this.state.userToEdit;
    }
    render() {
        return (
            <section className='home'>
                {this.state.currUser &&
                    <Header
                        user={this.state.currUser}
                        greet={this.greet}
                        changeRouting={this.changeRouting}
                        setUserToEdit={this.setUserToEdit}
                    />
                }
                {this.route === 'userList'
                    && this.users
                    && <UserList users={this.users} />
                }
                {this.route === 'settings' &&
                    this.currUser &&
                    <Settings user={this.userToEdit} changeName={this.handleNameChange} />}
            </section>
        )
    }
}