export type User = {
    "person_id": "string",
    "person_name": "string",
    "client_id": "string",
};

export type ProbableUser = {
    _id: string;
    _index: string;
    _score: number;
    _source: User;
};