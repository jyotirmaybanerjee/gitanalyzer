import React, {Fragment} from 'react';
import {Table} from 'react-bootstrap';

export const Repos = ({repos}) => {
    return (
        <Fragment>
            <h3>
                Repositories ({repos.length})
            </h3>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th className="col-sm-1">#</th>
                        <th className="col-sm-2">Name</th>
                        <th className="col-sm-1">Language</th>
                        <th className="col-sm-1">Private</th>
                        <th className="col-sm-1">Forked</th>
                        <th className="col-sm-4">URL</th>
                    </tr>
                </thead>
                <tbody>
                {repos.map((repo, index) => {
                    return (
                        <tr key={repo.name}>
                            <td>{index + 1}</td>
                            <td>{repo.name}</td>
                            <td>{repo.language}</td>
                            <td>{repo.private ? 'true' : 'false'}</td>
                            <td>{repo.fork ? 'true' : 'false'}</td>
                            <td>
                                <a href={repo.html_url} target="_blank">{repo.html_url}</a>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </Fragment>
    );
};
