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
    id: long;
    url: string;
    avatar_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    repos_url: string;
    public_repos: int;
    followers: int;
    following: int;
};
