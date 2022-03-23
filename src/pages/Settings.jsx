import React from 'react';
export class Settings extends React.Component {
    get fullname() {
        return this.props.user.fullname;
    }

    render() {
        return (
            <section className="settings max-width">
                <div className="title-container">
                    <h2>Settings</h2>
                </div>
                {this.fullname ?
                    <div className="input-container">
                        <h3>User Settings</h3>
                        <label>Change Full name</label>
                        <input type="text"
                            value={this.fullname}
                            onChange={this.props.changeName} />
                    </div>
                    :
                    <div className='page-loading-container'>Loading...</div>
                }
            </section>
        )
    }
}