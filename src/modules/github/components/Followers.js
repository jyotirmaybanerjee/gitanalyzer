import React from 'react';

export const Followers = ({followers, doFetchUserDetails}) => {
    return (
        <div className="follow">
            <h3>
                Followers ({followers.length})
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
                                            <span className="user-link cursor-pointer"
                                                onClick={() => doFetchUserDetails(follower.login)}
                                            >
                                                {follower.login}
                                            </span>
                                            <span className="user-subhead">{follower.type}</span>
                                        </td>
                                        <td>
                                            <a href={follower.html_url} target="_blank">{follower.html_url}</a>
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
