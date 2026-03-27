export enum ExpenseCategory {
  FOOD = "food",
  TRANSPORT = "transport",
  HOUSING = "housing",
  UTILITIES = "utilities",
  ENTERTAINMENT = "entertainment",
  HEALTH = "health",
  EDUCATION = "education",
  SHOPPING = "shopping",
  SUBSCRIPTIONS = "subscriptions",
  TRAVEL = "travel",
  PERSONAL = "personal",
  GIFTS = "gifts",
  INVESTMENTS = "investments",
  SAVINGS = "savings",
  TAXES = "taxes",
  INSURANCE = "insurance",
  DEBT = "debt",
  OTHER = "other",
}

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  category: ExpenseCategory;
  description: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
