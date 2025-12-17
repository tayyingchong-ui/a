import { DailyItinerary, FoodType, Restaurant, BudgetItem, TransportComparison } from './types';

export const ITINERARY_DATA: DailyItinerary[] = [
  {
    day: 1,
    date: '2026-02-17 (初一)',
    title: '抵達與入住，探索室內遊樂園',
    items: [
      {
        time: '09:00',
        activity: '吉隆坡 KL Sentral 出發',
        description: '搭乘 Go Genting 巴士前往 Awana 纜車站。',
        transport: '巴士 (約 1 小時)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=KL+Sentral',
        icon: '🚌'
      },
      {
        time: '10:30',
        activity: 'Awana Skyway 纜車',
        description: '搭乘玻璃底纜車上山，途中可俯瞰熱帶雨林。',
        duration: '20 分鐘',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Awana+Skyway',
        icon: '🚠'
      },
      {
        time: '11:30',
        activity: 'Grand Ion Delemen 飯店 Check-in',
        description: '辦理入住手續，放下行李。',
        duration: '1 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Grand+Ion+Delemen+Hotel',
        icon: '🏨'
      },
      {
        time: '13:00',
        activity: '午餐：馬來西亞美食街',
        description: '品嚐當地特色美食（炒粿條、福建麵）。',
        duration: '1.5 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Malaysian+Food+Street+Genting',
        icon: '🍜'
      },
      {
        time: '14:30',
        activity: 'Skytropolis 室內主題樂園',
        description: '不受天氣影響的室內遊樂設施體驗。',
        duration: '3 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Skytropolis+Indoor+Theme+Park',
        icon: '🎢'
      },
      {
        time: '19:00',
        activity: '晚餐：The Laughing Fish',
        description: '英式炸魚薯條，輕鬆的晚餐氛圍。',
        duration: '1.5 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=The+Laughing+Fish+Genting',
        icon: '🐟'
      }
    ]
  },
  {
    day: 2,
    date: '2026-02-18 (初二)',
    title: '雲頂天城世界與娛樂城體驗',
    items: [
      {
        time: '09:00',
        activity: '清水岩廟 (Chin Swee Caves Temple)',
        description: '搭乘纜車中途下車，參觀壯觀的廟宇與九層塔。',
        duration: '2 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Chin+Swee+Caves+Temple',
        icon: '🏯'
      },
      {
        time: '11:30',
        activity: '午餐：鼎泰豐 (Genting Branch)',
        description: '熟悉的中式口味，品質穩定。',
        duration: '1.5 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Din+Tai+Fung+Genting',
        icon: '🥟'
      },
      {
        time: '13:00',
        activity: 'Genting SkyWorlds 戶外主題樂園',
        description: '必玩重點：冰川時代、里約大冒險區。',
        duration: '5 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Genting+SkyWorlds+Theme+Park',
        icon: '🎡'
      },
      {
        time: '19:00',
        activity: '晚餐：Burger & Lobster',
        description: '雲頂必吃！整隻龍蝦與鮮嫩漢堡。',
        duration: '2 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Burger+and+Lobster+Genting',
        icon: '🦞'
      },
      {
        time: '21:30',
        activity: 'SkyCasino 雲頂娛樂城',
        description: '體驗國際級賭場氛圍 (請攜帶護照，注意服裝儀容)。',
        duration: '2 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=SkyCasino+Genting',
        icon: '🎰'
      }
    ]
  },
  {
    day: 3,
    date: '2026-02-19 (初三)',
    title: '購物血拼與返程',
    items: [
      {
        time: '10:00',
        activity: 'Genting Highlands Premium Outlets (GPO)',
        description: '搭乘纜車下山至 GPO 進行最後採購。',
        duration: '3 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Genting+Highlands+Premium+Outlets',
        icon: '🛍️'
      },
      {
        time: '13:30',
        activity: '午餐：Madam Kwan\'s',
        description: '享用著名的 Nasi Lemak (椰漿飯)。',
        duration: '1.5 小時',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Madam+Kwan+Genting',
        icon: '🍚'
      },
      {
        time: '15:30',
        activity: '搭乘巴士返回 KL Sentral',
        description: '帶著戰利品與回憶結束旅程。',
        transport: '巴士 (約 1 小時)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Awana+Bus+Terminal',
        icon: '🚌'
      }
    ]
  }
];

export const RESTAURANT_DATA: Restaurant[] = [
  {
    name: 'Burger & Lobster',
    type: FoodType.WESTERN,
    priceLevel: '$$$',
    rating: 4.5,
    description: '雲頂最著名的餐廳，龍蝦卷是必點招牌。',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Burger+and+Lobster+Genting'
  },
  {
    name: 'Malaysian Food Street',
    type: FoodType.LOCAL,
    priceLevel: '$',
    rating: 4.0,
    description: '集合馬來西亞各地著名小吃的懷舊美食街。',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Malaysian+Food+Street+Genting'
  },
  {
    name: 'Beauty In The Pot (美滋鍋)',
    type: FoodType.CHINESE,
    priceLevel: '$$',
    rating: 4.6,
    description: '養顏美容火鍋，適合朋友聚餐，裝潢粉嫩。',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Beauty+In+The+Pot+Genting'
  },
  {
    name: 'The Laughing Fish',
    type: FoodType.WESTERN,
    priceLevel: '$$',
    rating: 4.2,
    description: 'Harry Ramsden 旗下的英式炸魚薯條店。',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=The+Laughing+Fish+Genting'
  },
  {
    name: 'Madam Kwan\'s',
    type: FoodType.LOCAL,
    priceLevel: '$$',
    rating: 4.3,
    description: '提供最道地的馬來西亞椰漿飯 (Nasi Lemak)。',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Madam+Kwan+Genting'
  },
  {
    name: 'Tokyo Secret',
    type: FoodType.DESSERT,
    priceLevel: '$',
    rating: 4.1,
    description: '著名的日式半熟起司塔。',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tokyo+Secret+Genting'
  },
  {
    name: 'Jom Makan',
    type: FoodType.LOCAL,
    priceLevel: '$',
    rating: 3.8,
    description: '位於 SkyAvenue 的清真美食廣場。',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=Jom+Makan+Genting'
  }
];

export const BUDGET_DATA: BudgetItem[] = [
  { category: '住宿 (2晚/人)', amount: 4000 },
  { category: '交通 (含纜車)', amount: 1000 },
  { category: '餐飲 (3天)', amount: 4500 },
  { category: '娛樂/門票', amount: 3500 },
  { category: '購物/雜支', amount: 2000 },
];

export const TRANSPORT_COMPARE: TransportComparison[] = [
  { type: '公共巴士 + 纜車', timeMinutes: 90, costTWD: 150 },
  { type: 'Grab (網約車)', timeMinutes: 60, costTWD: 800 },
  { type: '包車接送', timeMinutes: 60, costTWD: 1200 },
];