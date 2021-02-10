export interface ResponseObject {
    statusCode: number
    body: string
}

export interface Person {
    first_name: string
    nickname?: string
    last_name: string
    middle_name?: string
    born?: Date
    died?: Date
    details?: string
    parents?: Array<number>
    children?: Array<number>
    siblings?: Array<number>
}
