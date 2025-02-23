export declare class TaniAuth {
    private apiKey;
    private groupId;
    constructor(apiKey: string, groupId: string);
    getGroupId(): string;
    getHeaders(): Record<string, string>;
}
