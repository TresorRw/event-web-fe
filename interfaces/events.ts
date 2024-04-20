import { EventCategories } from "@/lib/constants";

export interface IEvent extends IEventCardProps {
  category: EventCategories;
  description: string;
  endDateTime: Date;
}

export interface IEventCardProps {
  _id: string;
  name: string;
  organizer: IEventOrganizer;
  startDateTime: Date;
  location: string;
  price: number;
  image?: string;
}

export interface IEventOrganizer {
  _id: string;
  email: string;
  displayName: string;
}

export interface IGetGoodEventResponse {
  statusCode: number;
  message: string;
  perPage: number;
  totalResults: number;
  page: number;
  data: IEvent[];
}

export interface ISingleEventResponse {
  statusCode: number;
  message: string;
  data?: IEvent;
}
export interface IErrorResponse {
  statusCode: number;
  message: string;
}
