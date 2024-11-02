export let customer = [
    {
      "id": 1,
      "name" : "Jane Doe",
      "email": "jane.doe@example.com",
      "password": "1234@Asdf"
    },
    {
      "id": 2,
      "name" : "John Smith",
      "email": "john.smith@example.com",
      "password": "1234@Asdf"
    },
    {
      "id": 3,
      "name" : "Susan Brown",
      "email": "susan.brown@example.com",
      "password": "1234@Asdf"
    },
    {
      "id": 4,
      "name" : "Kim Moojin",
      "email": "kim.moojin@example.com",
      "password": "1234@Asdf"
    }
];

export let brands = [
    {
      "id": 1,
      "image" : "https://loodibee.com/wp-content/uploads/Nike-Logo.png",
      "name": "Nike"
    },
    {
      "id": 2,
      "image" : "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
      "name": "Apple"
    },
    {
      "id": 3,
      "image" : "https://www.fiware.org/wp-content/directories/research-development/images/greenmov.png",
      "name": "GreenMow"
    },
    {
      "id": 4,
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEgzxJ7QpT-A3Jz-4932zSbp6QHFSrSQNvw&s",
      "name": "Xiaomi"
    },
    {
      "id": 5,
      "image" : "https://loodibee.com/wp-content/uploads/Reebok-Logo-black-white.png",
      "name": "Reebok"
    },
    {
      "id": 6,
      "image" : "https://www.hatchwise.com/wp-content/uploads/2022/10/image-9.png",
      "name": "Samsung"
    },
    {
      "id": 7,
      "image" : "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      "name": "Adidas"
    },
    {
      "id": 8,
      "image" : "https://cdn.icon-icons.com/icons2/2845/PNG/512/puma_logo_icon_181343.png",
      "name": "Puma"
    }
    
];

export let categories = [
  {
    id: 1,
    image: "https://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg",
    publish: true,
    title: "Electronics"
  },
  {
    id: 2,
    image: "https://static.vecteezy.com/system/resources/previews/028/546/318/non_2x/collection-of-young-men-dressed-in-trendy-clothes-set-of-fashionable-casual-outfit-korean-fashion-style-vector.jpg",
    publish: true,
    title: "Fashion"
  },
  {
    id: 3,
    image: "https://dfupublications.com/images/2023/07/26/India's%20Growing%20Kids'%20Apparel%20Market_large.jpeg",
    publish: true,
    title: "Kids Clothing"
  },
  {
    id: 4,
    image: "https://www.superprof.co.in/blog/wp-content/uploads/2018/07/photography-accessories.jpg",
    publish: false,
    title: "Accessories"
  },
  
  {
    id: 5,
    image: "https://img.freepik.com/free-vector/food-beverages-designs_1132-103.jpg",
    publish: true,
    title: "Food"
  },
  {
    id: 6,
    image: "https://5.imimg.com/data5/WW/EW/MY-15612685/used-laptops-and-desktop-500x500.png",
    publish: true,
    title: "Computers"
  },
  {
    id: 7,
    image: "https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=",
    publish: true,
    title: "Footwear"
  },
  {
    id: 8,
    image: "https://img.grouponcdn.com/deal/ivFiFSeKSTokW6Nz849v/Hu-2048x1229/v1/c700x420.jpg",
    publish: true,
    title: "Sports"
  },
  {
    id: 9,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHwzpRiQSBBuw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1660896887938?e=2147483647&v=beta&t=iVZc9OTDpCJhCLsdzoJVDR-IKZI7Z50NnkAiPbVon5E",
    publish: true,
    title: "Toys & Games"
  },
  {
    id: 10,
    image: "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
    publish: true,
    title: "Beauty"
  },
  {
    id: 11,
    image: "https://img.freepik.com/premium-photo/expencive-jewelry-gold-rings-luxury-necklaces_1063985-20337.jpg?semt=ais_hybrid",
    publish: true,
    title: "Jewelry"
  },
];


export let orders = [
    {
      "id": 1,
      "user_id": 1,
      "address": "123 Elm Street, Springfield",
      "products": [
        {
          "id": 1,
          "name": "Smartphone X",
          "price": 799.99,
          "quantity": 2
        },
        {
          "id": 2,
          "name": "Designer Jacket",
          "price": 120.50,
          "quantity": 4
        },
        
      ],
      "status": "Delivered"
    },
    {
      "id": 2,
      "user_id": 2,
      "address": "456 Oak Avenue, Metropolis",
      "products": [
        {
          "id": 3,
          "name": "Eco-Friendly Lawn Mower",
          "price": 199.99,
          "quantity": 5
        }
      ],
      "status": "Shipped"
    }
    ,{
      "id": 2,
      "user_id": 2,
      "address": "456 Oak Avenue, Metropolis",
      "products": [
        {
          "id": 3,
          "name": "Eco-Friendly Lawn Mower",
          "price": 199.99,
          "quantity": 5
        }
      ],
      "status": "Shipped"
    },
    {
      "id": 2,
      "user_id": 3,
      "address": "456 Oak Avenue, Metropolis",
      "products": [
        {
          "id": 7,
          "name": "Galaxy S21",
          "price": 799.99,
          "quantity": 2
        }
      ],
      "status": "Shipped"
    },
    {
      "id": 2,
      "user_id": 4,
      "address": "456 Oak Avenue, Metropolis",
      "products": [
        {
          "id": 7,
          "name": "Galaxy S21",
          "price": 799.99,
          "quantity": 1
        }
      ],
      "status": "Shipped"
    },
    {
      "id": 2,
      "user_id": 2,
      "address": "456 Oak Avenue, Metropolis",
      "products": [
        {
          "id": 2,
          "name": "Designer Jacket",
          "price": 120.50,
          "quantity": 7
        }
      ],
      "status": "Delivered"
    }
];

export let products = [
  {
    id: 1,
    category_id: 1,
    brand: "Apple",
    name: "Smartphone X",
    description: "A high-end smartphone with cutting-edge features.",
    image: ["https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg"],
    price: 799.99,
    publish: true,
    quantity: 150,
    ratings: 4.5
  },
  {
    id: 2,
    category_id: 2,
    brand: "Nike",
    name: "Designer Jacket",
    description: "Stylish and comfortable jacket for all seasons.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 120.50,
    publish: true,
    quantity: 200,
    ratings: 3.5
  },
  {
    id: 3,
    category_id: 3,
    brand: "GreenMow",
    name: "Eco-Friendly Lawn Mower",
    description: "A compact and efficient lawn mower.",
    image: ["https://media.istockphoto.com/id/520135246/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=9ZlrazlneuDiU6Rdv9nYq0k_ZNoGwJ_JXTiE8djJGVc="],
    price: 199.99,
    publish: false,
    quantity: 50,
    ratings: 3.8
  },
  {
    id: 4,
    category_id: 1,
    brand: "Apple",
    name: "Smartphone Pro",
    description: "The ultimate smartphone for tech enthusiasts.",
    image: ["https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg"],
    price: 999.99,
    publish: true,
    quantity: 100,
    ratings: 4.7
  },
  {
    id: 5,
    category_id: 2,
    brand: "Nike",
    name: "Sports Jacket",
    description: "Perfect for workouts and casual outings.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 89.99,
    publish: true,
    quantity: 250,
    ratings: 4.0
  },
  {
    id: 6,
    category_id: 3,
    brand: "GreenMow",
    name: "Lawn Mower 3000",
    description: "Powerful and efficient lawn mower.",
    image: ["https://media.istockphoto.com/id/520135246/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=9ZlrazlneuDiU6Rdv9nYq0k_ZNoGwJ_JXTiE8djJGVc="],
    price: 249.99,
    publish: false,
    quantity: 30,
    ratings: 4.5
  },
  {
    id: 7,
    category_id: 1,
    brand: "Samsung",
    name: "Galaxy S21",
    description: "A smartphone with impressive camera features.",
    image: ["https://images.samsung.com/is/image/samsung/p6pim/in/sm-g991bzvdinu/gallery/in-galaxy-s21-5g-g991-371114-sm-g991bzvdinu-410189249?$624_624_PNG$"],
    price: 799.99,
    publish: true,
    quantity: 120,
    ratings: 4.6
  },
  {
    id: 8,
    category_id: 2,
    brand: "Adidas",
    name: "Winter Jacket",
    description: "Keep warm in style this winter.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 150.00,
    publish: true,
    quantity: 180,
    ratings: 4.4
  },
  {
    id: 9,
    category_id: 3,
    brand: "EcoMow",
    name: "Cordless Lawn Mower",
    description: "No cords, no limits – perfect for small yards.",
    image: ["https://media.istockphoto.com/id/520135246/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=9ZlrazlneuDiU6Rdv9nYq0k_ZNoGwJ_JXTiE8djJGVc="],
    price: 219.99,
    publish: true,
    quantity: 40,
    ratings: 4.3
  },
  {
    id: 10,
    category_id: 1,
    brand: "OnePlus",
    name: "OnePlus 9",
    description: "Flagship performance at an affordable price.",
    image: ["https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/may/karen/Karen-Green-540x540-L.png"],
    price: 699.99,
    publish: true,
    quantity: 130,
    ratings: 4.2
  },
  {
    id: 11,
    category_id: 2,
    brand: "Puma",
    name: "Lightweight Jacket",
    description: "Perfect for running and outdoor activities.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 99.99,
    publish: true,
    quantity: 220,
    ratings: 4.5
  },
  {
    id: 12,
    category_id: 3,
    brand: "GreenMow",
    name: "Electric Lawn Mower",
    description: "An eco-friendly option for maintaining your lawn.",
    image: ["https://media.istockphoto.com/id/520135246/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=9ZlrazlneuDiU6Rdv9nYq0k_ZNoGwJ_JXTiE8djJGVc="],
    price: 249.99,
    publish: false,
    quantity: 25,
    ratings: 4.0
  },
  {
    id: 13,
    category_id: 1,
    brand: "Google",
    name: "Pixel 6",
    description: "An incredible camera experience in a smartphone.",
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-isKHJubNcFouE8vFtRoWKW5MvAkS4rZVw&s"],
    price: 699.99,
    publish: true,
    quantity: 110,
    ratings: 4.6
  },
  {
    id: 14,
    category_id: 2,
    brand: "North Face",
    name: "Outdoor Jacket",
    description: "Durable and versatile for all your adventures.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 160.00,
    publish: true,
    quantity: 90,
    ratings: 4.3
  },
  {
    id: 15,
    category_id: 3,
    brand: "Landscaper Pro",
    name: "Heavy Duty Lawn Mower",
    description: "For the serious gardener looking for power.",
    image: ["https://media.istockphoto.com/id/520135246/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=9ZlrazlneuDiU6Rdv9nYq0k_ZNoGwJ_JXTiE8djJGVc="],
    price: 349.99,
    publish: true,
    quantity: 15,
    ratings: 4.7
  },
  {
    id: 16,
    category_id: 1,
    brand: "Xiaomi",
    name: "Redmi Note 10",
    description: "Affordable smartphone with great features.",
    image: ["https://bestonlinesupplier.com/wp-content/uploads/2024/02/Glacier-Blue-XIAOMI-Redmi-Note-10-Pro-Dual-Sim-6.6_-AMOLED-Display-8GB-RAM-128GB-ROM-4G-LTE-Network-108-MP-8-MP-5-MP-2-MP-_-16-MP-Camera-Mobile-Phone.jpg.webp"],
    price: 199.99,
    publish: true,
    quantity: 300,
    ratings: 4.4
  },
  {
    id: 17,
    category_id: 2,
    brand: "Columbia",
    name: "Waterproof Jacket",
    description: "Stay dry and stylish with this waterproof jacket.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 140.00,
    publish: true,
    quantity: 160,
    ratings: 4.6
  },
  {
    id: 18,
    category_id: 3,
    brand: "MowMaster",
    name: "Smart Lawn Mower",
    description: "Connect to your smartphone and control your lawn.",
    image: ["https://media.istockphoto.com/id/520135246/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=9ZlrazlneuDiU6Rdv9nYq0k_ZNoGwJ_JXTiE8djJGVc="],
    price: 499.99,
    publish: true,
    quantity: 10,
    ratings: 4.8
  },
  {
    id: 19,
    category_id: 1,
    brand: "Sony",
    name: "Xperia 5 II",
    description: "The smartphone designed for entertainment.",
    image: ["https://www.triveniworld.com/cdn/shop/products/sony-xperia-5-ii-triveni-world-5.jpg?v=1705446040"],
    price: 899.99,
    publish: true,
    quantity: 80,
    ratings: 4.5
  },
  {
    id: 20,
    category_id: 2,
    brand: "Reebok",
    name: "Athletic Jacket",
    description: "Lightweight and breathable for workouts.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 75.00,
    publish: true,
    quantity: 300,
    ratings: 4.2
  }
];


export let reviews = [
    {
      "id": 1,
      "customer_id": 1,
      "product_id": 1,
      "order_id": 1,
      "rating": 4.5,
      "comment": "Great phone, highly recommend!"
    },
    {
      "id": 2,
      "customer_id": 1,
      "product_id": 2,
      "order_id": 1,
      "rating": 4.0,
      "comment": "Jacket is warm and stylish."
    },
    {
      "id": 3,
      "customer_id": 2,
      "product_id": 3,
      "order_id": 2,
      "rating": 3.5,
      "comment": "Mower works fine but could be quieter."
    },
    {
      "id": 4,
      "customer_id": 1,
      "product_id": 4,
      "order_id": 1,
      "rating": 4.5,
      "comment": "Great phone, highly recommend!"
    },
    {
      "id": 5,
      "customer_id": 1,
      "product_id": 5,
      "order_id": 1,
      "rating": 4.0,
      "comment": "Jacket is warm and stylish."
    },
    {
      "id": 6,
      "customer_id": 2,
      "product_id": 6,
      "order_id": 2,
      "rating": 3.5,
      "comment": "Mower works fine but could be quieter."
    },
    {
      "id": 7,
      "customer_id": 1,
      "product_id": 7,
      "order_id": 1,
      "rating": 4.5,
      "comment": "Great phone, highly recommend!"
    },
    {
      "id": 8,
      "customer_id": 1,
      "product_id": 8,
      "order_id": 1,
      "rating": 4.0,
      "comment": "Jacket is warm and stylish."
    },
    {
      "id": 9,
      "customer_id": 2,
      "product_id": 9,
      "order_id": 2,
      "rating": 3.5,
      "comment": "Mower works fine but could be quieter."
    }
];
