export interface bookingInterface {
  id: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  created_at: string;
  cabins: { name: string; image: string };
}

export interface cabinInterface {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
}

export interface SessionInterface {
  session: {
    user: {
      email?: string,
      guestId?: string
      
    };
  };
}


export interface bookingObject {
  booking: bookingInterface;
}

export interface cabinObject {
  cabin: cabinInterface;
}