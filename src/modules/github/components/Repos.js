import React, {Fragment} from 'react';
import {Table} from 'react-bootstrap';

export const Repos = ({repos}) => {
    return (
        <Fragment>
            <h3>
                List of Repositories
            </h3>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th className="col-sm-1">#</th>
                        <th className="col-sm-2">Name</th>
                        <th className="col-sm-1">Language</th>
                        <th className="col-sm-1">Private</th>
                        <th className="col-sm-4">URL</th>
                    </tr>
                </thead>
                <tbody>
                {repos.map((repo) => {
                    return (
                        <tr>
                            <td>1</td>
                            <td>{repo.name}</td>
                            <td>{repo.language}</td>
                            <td>{repo.private}</td>
                            <td>{repo.html_url}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </Fragment>
    );
};
