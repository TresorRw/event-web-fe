import { EventCategories } from "@/lib/constants"

export interface IEvent {
  _id: string,
  name: string,
  category: EventCategories,
  description: string,
  startDateTime: Date,
  endDateTime: Date,
  location: string,
  price: number,
  image?: string,
  organizer: IEventOrganizer,
}

export interface IEventOrganizer {
  _id: string,
  email: string,
  displayName: string,
}

export interface IGetGoodEventResponse {
  statusCode: number,
  message: string,
  data: IEvent[],
}

export interface ISingleEventResponse {
  statusCode: number,
  message: string,
  data?: IEvent
}
export interface IErrorResponse {
  statusCode: number,
  message: string
} 