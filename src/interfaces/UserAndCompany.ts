export interface UserAndCompany {
  some: any;
  id?: number;
  name?: string;
  email?: string;
  password?: string;
}

export interface Company extends UserAndCompany {
  totalTraveledWeek: number;
  totalOrder: number;
  completedOrders: number;
}

export interface User extends UserAndCompany {
  totalOrder: number;
  completedOrders: number;
}
