declare type Follow = {
    login: string;
    id: long;
    url: string;
    avatar_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    repos_url: string;
};

declare type User = {
    login: string;
    id: number;
    url: string;
    avatar_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    repos_url: string;
    public_repos: number;
    followers: number;
    following: number;
};

declare type Repo = {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    ssh_url: string;
    clone_url: string;
    homepage: string;
    language: string;
    forks: string;
    open_issues: string;
    watchers: string;
}

