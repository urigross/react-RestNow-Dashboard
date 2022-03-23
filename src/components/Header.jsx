export function Header({ user, greet, changeRouting, setUserToEdit }) {
    const { fullname } = user;
    return (
        <section className="header">
            <div className="header-container max-width">
                <div className="title-container">
                    <h2>Welcome to <span>RestNow</span></h2>
                </div>
                <div className="greet-container">
                    <h3>{greet}, {fullname}</h3>
                </div>
                <nav>
                    <div className="nav-btn-container">
                        <button
                            onClick={
                                (ev) => {
                                    changeRouting('settings', ev);
                                    setUserToEdit()
                                }}>Settings</button>
                        <button onClick={(ev) => changeRouting('home', ev)}>Home</button>
                        <button onClick={(ev) => changeRouting('userList', ev)}>Users list</button>
                    </div>
                </nav>
            </div>
        </section>
    )
}