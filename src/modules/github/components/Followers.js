import React from 'react';

export const Followers = ({followers}) => {
    return (
        <div className="follow">
            <h3>
                List of Followers
            </h3>
            <div className="main-box no-header clearfix">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <table className="table user-list">
                            <thead>
                                <tr>
                                    <th><span>Follower</span></th>
                                    <th><span>Url</span></th>
                                </tr>
                            </thead>
                            <tbody>
                            {followers.map((follower) => {
                                return (
                                    <tr key={follower.login}>
                                        <td>
                                            <img src={follower.avatar_url} alt="" />
                                            <a href="#" className="user-link">{follower.login}</a>
                                            <span className="user-subhead">{follower.type}</span>
                                        </td>
                                        <td>
                                            <a href="#">{follower.url}</a>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
