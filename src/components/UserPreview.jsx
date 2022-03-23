export function UserPreview({ user }) {
    return (
        <li className="user-preview">
            Full name: {user.fullname}
        </li>
    )
}