import { UserPreview } from "../components/UserPreview";

export function UserList({ users }) {
    return users ?
        (
            <section className="user-list scale-in">
                <div className="user-list-container simple-cards-flex clean-list">
                    {users.map(user => (
                        <UserPreview key={user.id} user={user} />
                    ))}
                </div>
            </section>
        )
        :
        (<div className='page-loading-container'>Loading...</div>)
}