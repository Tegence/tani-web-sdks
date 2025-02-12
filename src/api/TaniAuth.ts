export class TaniAuth {
    private apiKey: string;
    private groupId: string;
  
    constructor(apiKey: string, groupId: string) {
      this.apiKey = apiKey;
      this.groupId = groupId;
    }
  
    getHeaders(): Record<string, string> {
      return {
        'Authorization': `Bearer ${this.apiKey}`,
        'Group-ID': this.groupId,
      };
    }
}