import { BigHead } from '@bigheads/core';
export function UserPreview({ user }) {
    const { avatar } = user;
    return (
        <div className="user-card-container">
            <li>
                Full name: {user.fullname}
                <BigHead  className="avatar-image"{...avatar} />
            </li>
        </div>
    )
}