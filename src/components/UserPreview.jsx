export function UserPreview({ user }) {
    return (
        <div className="user-card-container">
            <li>
                Full name: {user.fullname}
            </li>
        </div>
    )
}