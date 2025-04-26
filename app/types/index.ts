declare module "next-auth" {
  export interface UserType {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    guestId?: string;
  }
  interface Session {
    user: UserType; 
  }
}

export interface countryInterface {
  defaultCountry: string,
   name: string,
    id: string, 
    className: string,
    flag?: unknown
}

export interface bookingInterface {
  id: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  maxCapacity?: number;
  created_at: string;
  cabins: { name: string; image: string };
}

export interface cabinInterface {
  id: string;
  name: string;
  description?: string;
  maxCapacity?: number;
  regularPrice: number;
  discount?: number;
  image?: string;
}

export interface SessionInterface {
  session: {
    user: {
      email?: string;
      guestId?: string;
    };
  };
}

export interface guestInterface {
  fullName: string;
  email: string;
  nationalID: string;
  countryFlag?: string;
}

export interface bookingObject {
  booking: bookingInterface;
}

export interface cabinObject {
  cabin: cabinInterface;
}
