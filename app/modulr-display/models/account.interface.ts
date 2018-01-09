export interface Account {
  id: string,
  name: string,
  balance: number,
  currency: string,
  status: string,
  identifiers: Identifier[],
  customerId: string,
  externalReference: string
}

export interface Identifier {
  type: string,
  accountNumber: number,
  sortCode: number
}
