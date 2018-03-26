import React from 'react';

export const Following = ({following}) => {
    return (
        <div className="follow">
            <h3>
                Following
            </h3>
            <div className="main-box no-header clearfix">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <table className="table user-list">
                            <thead>
                            <tr>
                                <th><span>Following</span></th>
                                <th><span>Url</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {following.map((follower) => {
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
