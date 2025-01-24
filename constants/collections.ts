import { Message } from "@/interfaces/chat";
// import avatar from "../assets/avatar.png";

export const collectionOptions = [
    { value: "bronze", label: "Bronze" },
    { value: "silver", label: "Silver" },
    { value: "gold", label: "Gold" },
    { value: "platinium", label: "Platinium" },
];

export const loyaltyOptions = [
    { value: "platinium_member", label: "Platinum member" },
    { value: "silver_member", label: "Silver member" },
    { value: "gold_member", label: "Gold member" },
];

export const messages: Message[] = [
    {
        id: "1",
        content: "Hello, thanks for contacting us. How can I help you?",
        sender: "other",
        timestamp: "9:30",
        senderName: "Alice",
    },
    {
        id: "2",
        content: "Hello, can you see my message?",
        sender: "user",
        timestamp: "10:00 ",
        senderName: "You",
    },
    {
        id: "3",
        content: "I'm great! Just finished a big project at work.",
        sender: "other",
        timestamp: "10:05 ",
        senderName: "Alice",
        avatar: '/assets/avatar.png',
        reply: "Hello, can you see my message?",
    },
    {
        id: "4",
        content: "I’m having trouble with login",
        sender: "user",
        timestamp: "10:07",
        senderName: "You",
        avatar: null,
    },
    {
        id: "5",
        content:
            "Everything seems fine from me, if you wanna reset your password click here",
        sender: "other",
        timestamp: "10:10",
        senderName: "Alice",
        avatar: '/assets/avatar.png',
    },
    {
        id: "6",
        content: "Okay done, thanks so much!",
        sender: "user",
        timestamp: "10:07 ",
        senderName: "You",
        avatar: null,
    },
    {
        id: "7",
        content: "Okay done, thanks so much!",
        sender: "user",
        timestamp: "10:07 ",
        senderName: "You",
        avatar: null,
    },
];

export const notifications = [
    {
        message: "Congrats. Project “Store A” was closed successfully.",
        timestamp: "2h",
        read: false
    },
    {
        message: "Patrick assigned a task to you named “Recheck code final” to “Store A”",
        timestamp: "2h",
        read: true
    },
    {
        message: "Samantha has shared a file with you",
        timestamp: "2h",
        read: false
    },
    {
        message: "Samantha has shared a file with you",
        timestamp: "2h",
        read: false
    },
    {
        message: "Jack has shared a file with you",
        timestamp: "2h",
        read: true
    },
    {
        message: "Steve and 8 others added comments on project “Store A”",
        timestamp: "2h",
        read: false
    },
    {
        message: "Patric added a comment on “Store A” ",
        timestamp: "2h",
        read: true
    },
    {
        message: "Samantha has shared a file with you",
        timestamp: "2h",
        read: false
    },
    {
        message: "Jack has shared a file with you",
        timestamp: "2h",
        read: true
    },
    {
        message: "Steve and 8 others added comments on project “Store A”",
        timestamp: "2h",
        read: false
    },
    {
        message: "Patric added a comment on “Store A” ",
        timestamp: "2h",
        read: true
    }
]

export const customers = [
    {
      "id": "1",
      "name": "Emily Johns",
      "email": "johndoe@example.com",
      "tier": "Bronze",
      "phone": "247-96024",
      "birthday": "19/08/1997",
      "preferredCommunicationMethod": "SMS",
      "registeredAt": "20/10/2024",
      "addresses": [
        {
          "street": "Rruga, Sami Frasheri",
          "city": "Willson",
          "country": "Tirana",
          "zip": "1004"
        },
        {
          "street": "Rruga, Naim Frasheri",
          "city": "Pallati me Shigjeta",
          "country": "Tirana",
          "zip": "1003"
        },
        {
          "street": "Rruga, Naim Frasheri",
          "city": "Pallati me Shigjeta",
          "country": "Tirana",
          "zip": "1003"
        }
      ],
      "points": 4200,
      "pointsToNextTier": 120,
      "reminders": [
        {
          "type": "Birthday",
          "message": "Birthday incoming in 3 days"
        },
        {
          "type": "Follow up",
          "message": "Follow up today at 16:30"
        },
        {
          "type": "Check feedback",
          "message": "Don't forget to check today's feedback"
        }
      ],
      "ordersCount": 4
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "tier": "Silver",
      "phone": "321-65432",
      "birthday": "15/04/1990",
      "preferredCommunicationMethod": "Email",
      "registeredAt": "15/09/2023",
      "addresses": [
        {
          "street": "Rruga, George Bush",
          "city": "Block",
          "country": "Tirana",
          "zip": "1005"
        }
      ],
      "points": 5600,
      "pointsToNextTier": 400,
      "reminders": [
        {
          "type": "Meeting",
          "message": "Meeting tomorrow at 10:00"
        },
        {
          "type": "Check inventory",
          "message": "Check inventory status"
        }
      ],
      "ordersCount": 10
    },
    {
      "id": "3",
      "name": "Mark Johnson",
      "email": "markjohnson@example.com",
      "tier": "Gold",
      "phone": "456-12345",
      "birthday": "10/02/1985",
      "preferredCommunicationMethod": "Phone",
      "registeredAt": "12/05/2022",
      "addresses": [
        {
          "street": "Rruga, Dritan Hoxha",
          "city": "Myslym Shyri",
          "country": "Tirana",
          "zip": "1007"
        }
      ],
      "points": 8000,
      "pointsToNextTier": 0,
      "reminders": [
        {
          "type": "Anniversary",
          "message": "Anniversary in 5 days"
        },
        {
          "type": "Check inventory",
          "message": "Check inventory status"
        },
        {
          "type": "Check inventory",
          "message": "Check inventory status 2"
        }
      ],
      "ordersCount": 8
    },
    {
      "id": "4",
      "name": "Emily White",
      "email": "emilywhite@example.com",
      "tier": "Platinum",
      "phone": "654-78901",
      "birthday": "30/06/1993",
      "preferredCommunicationMethod": "Phone",
      "registeredAt": "05/01/2024",
      "addresses": [
        {
          "street": "Rruga, Ismail Qemali",
          "city": "Blloku",
          "country": "Tirana",
          "zip": "1006"
        }
      ],
      "points": 15000,
      "pointsToNextTier": 0,
      "reminders": [
        {
          "type": "Follow up",
          "message": "Follow up on client meeting"
        },
        {
          "type": "Check reviews",
          "message": "Check recent reviews"
        }
      ],
      "ordersCount": 15
    }
  ]

  export const products = [
    {
      id: "1",
      title: "Indigo Glow (Ø 47.00)",
      units: "23 units",
      revenue: "$6,899 revenue",
      image: require("@assets/watch.png"), // Replace with actual image URL
      article_no: 'SB07S100G',
      price: "12,000",
      currency: 'ALL',
      stock_quantity: 200
    },
    {
      id: "2",
      title: "Swatch Aqua Shimmer (Ø 47.00)",
      units: "23 units",
      revenue: "$6,899 revenue",
      image: require("@assets/watch2.png"), // Replace with actual image URL
      article_no: 'SB07S100G',
      price: "12,000",
      currency: 'ALL',
      stock_quantity: 200
    },
    {
      id: "3",
      title: "Indigo Glow (Ø 47.00)",
      units: "23 units",
      revenue: "$6,899 revenue",
      image: require("@assets/watch.png"), // Replace with actual image URL
      article_no: 'SB07S100G',
      price: "12,000",
      currency: 'ALL',
      stock_quantity: 200
    },
    {
      id: "4",
      title: "Swatch Aqua Shimmer (Ø 47.00)",
      units: "23 units",
      revenue: "$6,899 revenue",
      image: require("@assets/watch2.png"), // Replace with actual image URL
      article_no: 'SB07S100G',
      price: "12,000",
      currency: 'ALL',
      stock_quantity: 200
    },
  ];