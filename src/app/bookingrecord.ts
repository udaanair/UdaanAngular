import{ CustomerRecord } from './customerrecord';

export class BookingRecord
{
    flightId: number;
	userId: number;
	cabinClass: string;
    bookingAmount:number;
    customers: CustomerRecord[];
}