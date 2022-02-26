export interface Contact {
    id: number;
    name: string;
    company: string;
    position: string;
    telephoneNumber: string;
    email: string;
    status: Status;
    comment: string;
}

export enum Status {
    Success,
    CallLater,
    NotInterested,
    NoAnswer,
    NoStatus
  }