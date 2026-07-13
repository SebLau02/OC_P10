export type ApiResBase<T> = {
  data: T;
};
export type GetUserBase = {
  id: number;
  keyData: KeyDataBase;
  todayScore: number;
  userInfos: UserBase;
};

export type KeyDataBase = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};
export type UserBase = {
  firstName: string;
  lastName: string;
  age: number;
};

export type UserContextType = {
  user: GetUserBase | null;
  setUser: React.Dispatch<React.SetStateAction<GetUserBase | null>>;
};

export type ActivitySession = {
  day: string;
  kilogram: number;
  calories: number;
};

export type GetUserActivityBase = {
  data: {
    userId: number;
    sessions: ActivitySession[];
  };
};

export type AverageSession = {
  data: {
    userId: number;
    sessions: Session[];
  };
};

export type Session = {
  day: number;
  sessionLength: number;
};

export type Performance = {
  data: {
    userId: number;
    data: KindData[];
    kind: { [key: number]: string };
  };
};

export type KindData = {
  value: number;
  kind: number;
};
