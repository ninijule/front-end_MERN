import React from "react";

function UserLog({ userData }) {
    function renderUser() {
        return userData.map((user, i) => {
            return <tr key={i}>
                <td>{user._id}</td>
                <td>{user.ip_address}</td>
                <td>{user.createdAt}</td>
                </tr>;
        });
    }

    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Ip Address</th>
                    <th>CreatedAt</th>
                </tr>
            </thead>
            <tbody>
                {renderUser()}
            </tbody>
        </table>

    );
}

export default UserLog;
