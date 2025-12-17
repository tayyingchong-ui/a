export enum Tab {
  OVERVIEW = '行程總覽',
  TRANSPORT_STAY = '交通住宿',
  ITINERARY = '每日行程',
  FOOD = '美食地圖',
  PREP = '行前準備'
}

export interface ItineraryItem {
  time: string;
  activity: string;
  description: string;
  locationUrl: string;
  duration?: string;
  transport?: string;
  icon: string;
}

export interface DailyItinerary {
  day: number;
  date: string;
  title: string;
  items: ItineraryItem[];
}

export enum FoodType {
  ALL = '全部',
  LOCAL = '當地美食',
  WESTERN = '西式/漢堡',
  CHINESE = '中式/火鍋',
  DESSERT = '甜點/小吃'
}

export interface Restaurant {
  name: string;
  type: FoodType;
  priceLevel: string; // $, $$, $$$
  rating: number;
  description: string;
  locationUrl: string;
}

export interface BudgetItem {
  category: string;
  amount: number; // in TWD
}

export interface TransportComparison {
  type: string;
  timeMinutes: number;
  costTWD: number;
}