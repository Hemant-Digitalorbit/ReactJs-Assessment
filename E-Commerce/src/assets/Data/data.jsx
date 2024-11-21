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
    },
    {
      "id": 9,
      "image" : "https://marketplace.canva.com/EAGFJn_CyD4/1/0/1600w/canva-green-and-white-modern-medical-logo--HXaczhPPfU.jpg",
      "name": "Medico"
    },
    {
      "id": 10,
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDx8vy_fL2kTnISGQX94YuQlA5SZfEfgwD9g&s",
      "name": "Empower"
    }
    
];

export let categories = [
  {
    id: 1,
    image: "https://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg",
    publish: true,
    name: "Electronics"
  },
  {
    id: 2,
    image: "https://static.vecteezy.com/system/resources/previews/028/546/318/non_2x/collection-of-young-men-dressed-in-trendy-clothes-set-of-fashionable-casual-outfit-korean-fashion-style-vector.jpg",
    publish: true,
    name: "Fashion"
  },
  {
    id: 3,
    image: "https://dfupublications.com/images/2023/07/26/India's%20Growing%20Kids'%20Apparel%20Market_large.jpeg",
    publish: true,
    name: "Kids Clothing"
  },
  {
    id: 4,
    image: "https://www.superprof.co.in/blog/wp-content/uploads/2018/07/photography-accessories.jpg",
    publish: false,
    name: "Accessories"
  },
  
  {
    id: 5,
    image: "https://img.freepik.com/free-vector/food-beverages-designs_1132-103.jpg",
    publish: true,
    name: "Food"
  },
  {
    id: 6,
    image: "https://5.imimg.com/data5/WW/EW/MY-15612685/used-laptops-and-desktop-500x500.png",
    publish: true,
    name: "Computers"
  },
  {
    id: 7,
    image: "https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk=",
    publish: true,
    name: "Footwear"
  },
  {
    id: 8,
    image: "https://img.grouponcdn.com/deal/ivFiFSeKSTokW6Nz849v/Hu-2048x1229/v1/c700x420.jpg",
    publish: true,
    name: "Sports"
  },
  {
    id: 9,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHwzpRiQSBBuw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1660896887938?e=2147483647&v=beta&t=iVZc9OTDpCJhCLsdzoJVDR-IKZI7Z50NnkAiPbVon5E",
    publish: true,
    name: "Toys & Games"
  },
  {
    id: 10,
    image: "https://orchidlifesciences.com/wp-content/uploads/2024/06/01-14-01-1024x704.jpg",
    publish: true,
    name: "Beauty"
  },
  {
    id: 11,
    image: "https://img.freepik.com/premium-photo/expencive-jewelry-gold-rings-luxury-necklaces_1063985-20337.jpg?semt=ais_hybrid",
    publish: true,
    name: "Jewelry"
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
    category: 'Accessories',
    brand: "Apple",
    name: "Smartphone X",
    description: "A high-end smartphone with cutting-edge features.",
    image: ["https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg"],
    price: 799.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 150,
    ratings: 4.5,
    dateAdded: '2023-02-20'
  },
  {
    id: 2,
    category: 'Fashion',
    brand: "Nike",
    name: "Designer Jacket",
    description: "Stylish and comfortable jacket for all seasons.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 120.50,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 200,
    ratings: 3.5,
    dateAdded: '2023-03-15'
  },
  {
    id: 3,
    category: 'House and Garden',
    brand: "GreenMow",
    name: "Eco-Friendly Lawn Mower",
    description: "A compact and efficient lawn mower.",
    image: ["https://static.vecteezy.com/system/resources/previews/006/820/558/non_2x/man-cutting-grass-in-garden-gardener-mowing-lawn-with-electric-push-mower-in-backyard-vector.jpg"],
    price: 199.99,
    publish: false,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 50,
    ratings: 3.8,
    dateAdded: '2023-04-10'
  },
  {
    id: 4,
    category: 'Accesspries',
    brand: "Apple",
    name: "Smartphone Pro",
    description: "The ultimate smartphone for tech enthusiasts.",
    image: ["https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg"],
    price: 999.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 100,
    ratings: 4.7,
    dateAdded: '2023-05-15'
  },
  {
    id: 5,
    category: 'Fashion',
    brand: "Nike",
    name: "Sports Jacket",
    description: "Perfect for workouts and casual outings.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 89.99,
    publish: true,  
    status: '',
    DeliveredDate: "",
    reviews: "", 
    quantity: 250,
    ratings: 4.0,
    dateAdded: '2023-06-20'
  },
  {
    id: 6,
    category: 'House and Garden',
    brand: "GreenMow",
    name: "Lawn Mower 3000",
    description: "Powerful and efficient lawn mower.",
    image: ["https://static.vecteezy.com/system/resources/previews/006/820/558/non_2x/man-cutting-grass-in-garden-gardener-mowing-lawn-with-electric-push-mower-in-backyard-vector.jpg"],
    price: 249.99,
    publish: false,
    quantity: 30,
    ratings: 4.5,
    dateAdded: '2023-07-25'
  },
  {
    id: 7,
    category: 'Computers',
    brand: "Samsung",
    name: "Galaxy S21",
    description: "A smartphone with impressive camera features.",
    image: ["https://images.samsung.com/is/image/samsung/p6pim/in/sm-g991bzvdinu/gallery/in-galaxy-s21-5g-g991-371114-sm-g991bzvdinu-410189249?$624_624_PNG$"],
    price: 799.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "",
    quantity: 120,
    ratings: 4.6,
    dateAdded: '2023-08-15'
  },
  {
    id: 8,
    category: 'Fashion',
    brand: "Adidas",
    name: "Winter Jacket",
    description: "Keep warm in style this winter.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 150.00,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "",
    quantity: 180,
    ratings: 4.4,
    dateAdded: '2023-09-05'
  },
  {
    id: 9,
    category: 'House and Garden',
    brand: "EcoMow",
    name: "Cordless Lawn Mower",
    description: "No cords, no limits – perfect for small yards.",
    image: ["https://static.vecteezy.com/system/resources/previews/006/820/558/non_2x/man-cutting-grass-in-garden-gardener-mowing-lawn-with-electric-push-mower-in-backyard-vector.jpg"],
    price: 219.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "",
    quantity: 40,
    ratings: 4.3,
    dateAdded: '2023-10-15'
  },
  {
    id: 10,
    category: 'Computers',
    brand: "OnePlus",
    name: "OnePlus 9",
    description: "Flagship performance at an affordable price.",
    image: ["https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/may/karen/Karen-Green-540x540-L.png"],
    price: 699.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "",
    quantity: 130,
    ratings: 4.2,
    dateAdded: '2023-11-01'
  },
  {
    id: 11,
    category: 'Fashion',
    brand: "Puma",
    name: "Lightweight Jacket",
    description: "Perfect for running and outdoor activities.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 99.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "",
    quantity: 220,
    ratings: 4.5,
    dateAdded: '2023-11-05'
  },
  {
    id: 12,
    category: 'House and Garden',
    brand: "GreenMow",
    name: "Electric Lawn Mower",
    description: "An eco-friendly option for maintaining your lawn.",
    image: ["https://static.vecteezy.com/system/resources/previews/006/820/558/non_2x/man-cutting-grass-in-garden-gardener-mowing-lawn-with-electric-push-mower-in-backyard-vector.jpg"],
    price: 249.99,
    publish: false,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 25,
    ratings: 4.0,
    dateAdded: '2023-11-10'
  },
  {
    id: 13,
    category: 'Electronics',
    brand: "Google",
    name: "Pixel 6",
    description: "An incredible camera experience in a smartphone.",
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-isKHJubNcFouE8vFtRoWKW5MvAkS4rZVw&s"],
    price: 699.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "",
    quantity: 110,
    ratings: 4.6,
    dateAdded: '2023-11-15'
  },
  {
    id: 14,
    category: 'Fashion',
    brand: "Nike",
    name: "Outdoor Jacket",
    description: "Durable and versatile for all your adventures.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 160.00,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "",
    quantity: 90,
    ratings: 4.3,
    dateAdded: '2023-11-20'
  },
  {
    id: 15,
    category: 'Electronics',
    brand: "Landscaper Pro",
    name: "Heavy Duty Lawn Mower",
    description: "For the serious gardener looking for power.",
    image: ["https://static.vecteezy.com/system/resources/previews/006/820/558/non_2x/man-cutting-grass-in-garden-gardener-mowing-lawn-with-electric-push-mower-in-backyard-vector.jpg"],
    price: 349.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 15,
    ratings: 4.7,
    dateAdded: '2023-11-25'
  },
  {
    id: 16,
    category: 'Electronics',
    brand: "Xiaomi",
    name: "Redmi Note 10",
    description: "Affordable smartphone with great features.",
    image: ["https://bestonlinesupplier.com/wp-content/uploads/2024/02/Glacier-Blue-XIAOMI-Redmi-Note-10-Pro-Dual-Sim-6.6_-AMOLED-Display-8GB-RAM-128GB-ROM-4G-LTE-Network-108-MP-8-MP-5-MP-2-MP-_-16-MP-Camera-Mobile-Phone.jpg.webp"],
    price: 199.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 300,
    ratings: 4.4,
    dateAdded: '2023-12-01'
  },
  {
    id: 17,
    category: 'Fashion',
    brand: "Columbia",
    name: "Waterproof Jacket",
    description: "Stay dry and stylish with this waterproof jacket.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 140.00,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 160,
    ratings: 4.6,
    dateAdded: '2023-12-05'
  },
  {
    id: 18,
    category: 'Toys & Games',
    brand: "MowMaster",
    name: "Smart Lawn Mower",
    description: "Connect to your smartphone and control your lawn.",
    image: ["https://static.vecteezy.com/system/resources/previews/006/820/558/non_2x/man-cutting-grass-in-garden-gardener-mowing-lawn-with-electric-push-mower-in-backyard-vector.jpg"],
    price: 499.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 10,
    ratings: 4.8,
    dateAdded: '2023-12-10'
  },
  {
    id: 19,
    category: 'Computers',
    brand: "Sony",
    name: "Xperia 5 II",
    description: "The smartphone designed for entertainment.",
    image: ["https://www.triveniworld.com/cdn/shop/products/sony-xperia-5-ii-triveni-world-5.jpg?v=1705446040"],
    price: 899.99,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 80,
    ratings: 4.5,
    dateAdded: '2023-12-15'
  },
  {
    id: 20,
    category: 'Footwear',
    brand: "Reebok",
    name: "Athletic Jacket",
    description: "Lightweight and breathable for workouts.",
    image: ["https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"],
    price: 75.00,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    quantity: 300,
    ratings: 4.2,
    dateAdded: '2023-12-20'
  },
  {
    id: 21,
    name: "Medico Health Supplement",
    brand: "Medico",
    category: "Health",
    price: 25.99,
    ratings: 4.5,
    weight: "1gm",
    dateAdded: "17 July 2024",
    image: "https://s3-alpha-sig.figma.com/img/bb4b/d6b2/440eea27926ed61f5dccf5b2ebcc480d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elypXcSi-m75icQ1TRXXlEywH-HPhf-8DOkJh96RubsjHP30dSc-oM83~DywsOruvKGLJPLlvh9sdfaNKMq2Ny7xBHAX6GdEI2KKThtz37ejabeAGzZ8cm4wRK2yeJANM3tKXGzX7eVrAqwcAyhTJyQEqArjD1Dc3voVIfJWtwDYXfRArBP-npvoGe7OUKD1y3qh5A7O6iZ9KuTdEBz4Gtza3VCMTbwhAFhbkmxNl0etCGQu5-YqEFGSCeO6oxJ-2VZACeKKE1pk5hbJKHfHELhHyEOOslRuLM3z4hMxqboEBi9emeRBtlMrnYWbwBIjaYfn9jwiY-B1uNQCfAAVvw__",
    quantity: 100,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A comprehensive health supplement packed with essential vitamins and minerals to support overall well-being."
  },
  {
    id: 22,
    name: "Empower Protein Shake",
    brand: "Empower",
    category: "Nutrition",
    price: 15.99,
    ratings: 4.0,
    weight: "10ml",
    dateAdded: "2024-09-15",
    image: "https://s3-alpha-sig.figma.com/img/e032/d817/a0825ea72fbc7669da8edb7d2df8cb3a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdOAG2oI2z95LAyfMbNQmlFz5AJiJWk8gKNrFM1qOGB4IL107ay11HwGECED2UwjagZ8RPpTyGsavTiBKIMEf7SihmA1VTVTi97boMPpZ2OM6KxRi0qs0nP95iZ8TsPw~M-OPVG4yADQsxb36bBA3ClGjzI6S2-FVJ9p7vsUkne2lCKctOoay5R5AwzE2JHQDwR8WfolA9z47HoO1QcJGs02CfieleTROoitjskpHwvA6o5~wbeAJRvSeXcMx2gWKpoyVbTYTqcWa71zXoKPp1udZiUazBYPdYWRWGRnn-0Fr7WqV3Z8YXx0ok6Ryu-bRWmIZyR77lu49EqcEyBKRw__",
    quantity: 150,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A convenient protein shake for muscle recovery and energy replenishment, perfect for active lifestyles."
  },
  {
    id: 23,
    name: "Medico Herbal Tea",
    brand: "Medico",
    category: "Beverages",
    price: 10.50,
    ratings: 4.3,
    weight: "10gm",
    dateAdded: "2024-08-10",
    image: "https://s3-alpha-sig.figma.com/img/bb4b/d6b2/440eea27926ed61f5dccf5b2ebcc480d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elypXcSi-m75icQ1TRXXlEywH-HPhf-8DOkJh96RubsjHP30dSc-oM83~DywsOruvKGLJPLlvh9sdfaNKMq2Ny7xBHAX6GdEI2KKThtz37ejabeAGzZ8cm4wRK2yeJANM3tKXGzX7eVrAqwcAyhTJyQEqArjD1Dc3voVIfJWtwDYXfRArBP-npvoGe7OUKD1y3qh5A7O6iZ9KuTdEBz4Gtza3VCMTbwhAFhbkmxNl0etCGQu5-YqEFGSCeO6oxJ-2VZACeKKE1pk5hbJKHfHELhHyEOOslRuLM3z4hMxqboEBi9emeRBtlMrnYWbwBIjaYfn9jwiY-B1uNQCfAAVvw__",
    quantity: 200,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A soothing blend of herbs designed to promote relaxation and support digestive health."
  },
  {
    id: 24,
    name: "Empower Vitamin Capsules",
    brand: "Empower",
    category: "Supplements",
    price: 30.00,
    ratings: 4.7,
    weight: "10ml",
    dateAdded: "2024-07-20",
    image: "https://s3-alpha-sig.figma.com/img/e032/d817/a0825ea72fbc7669da8edb7d2df8cb3a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdOAG2oI2z95LAyfMbNQmlFz5AJiJWk8gKNrFM1qOGB4IL107ay11HwGECED2UwjagZ8RPpTyGsavTiBKIMEf7SihmA1VTVTi97boMPpZ2OM6KxRi0qs0nP95iZ8TsPw~M-OPVG4yADQsxb36bBA3ClGjzI6S2-FVJ9p7vsUkne2lCKctOoay5R5AwzE2JHQDwR8WfolA9z47HoO1QcJGs02CfieleTROoitjskpHwvA6o5~wbeAJRvSeXcMx2gWKpoyVbTYTqcWa71zXoKPp1udZiUazBYPdYWRWGRnn-0Fr7WqV3Z8YXx0ok6Ryu-bRWmIZyR77lu49EqcEyBKRw__",
    quantity: 80,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "High-potency vitamin capsules designed to boost immunity and improve overall health."
  },
  {
    id: 25,
    name: "Medico Skin Cream",
    brand: "Medico",
    category: "Skincare",
    price: 18.75,
    ratings: 4.6,
    weight: "20TB",
    dateAdded: "2024-06-18",
    image: "https://s3-alpha-sig.figma.com/img/bb4b/d6b2/440eea27926ed61f5dccf5b2ebcc480d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elypXcSi-m75icQ1TRXXlEywH-HPhf-8DOkJh96RubsjHP30dSc-oM83~DywsOruvKGLJPLlvh9sdfaNKMq2Ny7xBHAX6GdEI2KKThtz37ejabeAGzZ8cm4wRK2yeJANM3tKXGzX7eVrAqwcAyhTJyQEqArjD1Dc3voVIfJWtwDYXfRArBP-npvoGe7OUKD1y3qh5A7O6iZ9KuTdEBz4Gtza3VCMTbwhAFhbkmxNl0etCGQu5-YqEFGSCeO6oxJ-2VZACeKKE1pk5hbJKHfHELhHyEOOslRuLM3z4hMxqboEBi9emeRBtlMrnYWbwBIjaYfn9jwiY-B1uNQCfAAVvw__",
    quantity: 120,
    publish: true,
    status: 'Delivered',
    DeliveredDate: "17 July 2024",
    reviews: "" ,
    description: "A hydrating skin cream enriched with natural extracts to moisturize and rejuvenate your skin."
  },
  {
    id: 26,
    name: "Empower Energy Bar",
    brand: "Empower",
    category: "Snacks",
    price: 2.99,
    ratings: 4.1,
    weight: "20TB",
    dateAdded: "2024-05-12",
    image: "https://s3-alpha-sig.figma.com/img/e032/d817/a0825ea72fbc7669da8edb7d2df8cb3a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdOAG2oI2z95LAyfMbNQmlFz5AJiJWk8gKNrFM1qOGB4IL107ay11HwGECED2UwjagZ8RPpTyGsavTiBKIMEf7SihmA1VTVTi97boMPpZ2OM6KxRi0qs0nP95iZ8TsPw~M-OPVG4yADQsxb36bBA3ClGjzI6S2-FVJ9p7vsUkne2lCKctOoay5R5AwzE2JHQDwR8WfolA9z47HoO1QcJGs02CfieleTROoitjskpHwvA6o5~wbeAJRvSeXcMx2gWKpoyVbTYTqcWa71zXoKPp1udZiUazBYPdYWRWGRnn-0Fr7WqV3Z8YXx0ok6Ryu-bRWmIZyR77lu49EqcEyBKRw__",
    quantity: 300,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "", 
    description: "A nutritious energy bar packed with protein and essential nutrients for a quick energy boost."
  },
  {
    id: 27,
    name: "Medico Multivitamin Pack",
    brand: "Medico",
    category: "Health",
    price: 22.50,
    ratings: 4.4,
    weight: "20TB",
    dateAdded: "2024-04-30",
    image: "https://s3-alpha-sig.figma.com/img/bb4b/d6b2/440eea27926ed61f5dccf5b2ebcc480d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elypXcSi-m75icQ1TRXXlEywH-HPhf-8DOkJh96RubsjHP30dSc-oM83~DywsOruvKGLJPLlvh9sdfaNKMq2Ny7xBHAX6GdEI2KKThtz37ejabeAGzZ8cm4wRK2yeJANM3tKXGzX7eVrAqwcAyhTJyQEqArjD1Dc3voVIfJWtwDYXfRArBP-npvoGe7OUKD1y3qh5A7O6iZ9KuTdEBz4Gtza3VCMTbwhAFhbkmxNl0etCGQu5-YqEFGSCeO6oxJ-2VZACeKKE1pk5hbJKHfHELhHyEOOslRuLM3z4hMxqboEBi9emeRBtlMrnYWbwBIjaYfn9jwiY-B1uNQCfAAVvw__",
    quantity: 90,
    publish: true,
    status: 'Delivered',
    DeliveredDate: "17 July 2024",
    reviews: "" ,
    description: "A daily multivitamin pack providing a balanced dose of essential vitamins and minerals for optimal health."
  },
  {
    id: 28,
    name: "Empower Hydration Drink",
    brand: "Empower",
    category: "Beverages",
    price: 3.50,
    ratings: 4.2,
    weight: "10ml",
    dateAdded: "2024-04-15",
    image: "https://s3-alpha-sig.figma.com/img/e032/d817/a0825ea72fbc7669da8edb7d2df8cb3a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdOAG2oI2z95LAyfMbNQmlFz5AJiJWk8gKNrFM1qOGB4IL107ay11HwGECED2UwjagZ8RPpTyGsavTiBKIMEf7SihmA1VTVTi97boMPpZ2OM6KxRi0qs0nP95iZ8TsPw~M-OPVG4yADQsxb36bBA3ClGjzI6S2-FVJ9p7vsUkne2lCKctOoay5R5AwzE2JHQDwR8WfolA9z47HoO1QcJGs02CfieleTROoitjskpHwvA6o5~wbeAJRvSeXcMx2gWKpoyVbTYTqcWa71zXoKPp1udZiUazBYPdYWRWGRnn-0Fr7WqV3Z8YXx0ok6Ryu-bRWmIZyR77lu49EqcEyBKRw__",
    quantity: 250,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A refreshing drink designed to rehydrate and replenish electrolytes after workouts or long days."
  },
  {
    id: 29,
    name: "Medico Antioxidant Capsules",
    brand: "Medico",
    category: "Supplements",
    price: 19.99,
    ratings: 4.5,
    weight: "10ml",
    dateAdded: "2024-03-22",
    image: "https://s3-alpha-sig.figma.com/img/ba17/6093/95e04a985f7067852196458a0805694c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-htUNY88c04plaBtGMu-C54v-23MTLAR3WlO4xx4zW9YfsgSN-~ALKldKjvpFQ7ezLfrxfO3khH9lnRPH9wRT9~tNYZIAm4Cf4V~QPzAwJY16z7KYQe~tlkSLnhEC5TQ6akhdbYo1DkWYvhRq6Rs1s5UHeb6XWsVr9wlw~gmw8TjvnbmKLg5zphM8iygByUs~mN4ekNVRGxK0AqY9SlM0BT~jiHoYh9ExOtSu7czFdxmH~jQJgx~8SFOw9-PRatdK4w1~b7lFyD35oFAnJkt9E82P8txxjy-hkZOlUL5y0ShyU03KytCTn5WJ0uiEAtxdAX~AyfDuHTxDx230xnYw__",
    quantity: 110,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "Capsules enriched with antioxidants to help fight free radicals and support a healthy immune system."
  },
  {
    id: 30,
    name: "Empower Herbal Powder",
    brand: "Empower",
    category: "Herbs",
    price: 12.99,
    ratings: 4.3,
    weight: "4gm",
    dateAdded: "2024-02-19",
    image: "https://s3-alpha-sig.figma.com/img/e032/d817/a0825ea72fbc7669da8edb7d2df8cb3a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdOAG2oI2z95LAyfMbNQmlFz5AJiJWk8gKNrFM1qOGB4IL107ay11HwGECED2UwjagZ8RPpTyGsavTiBKIMEf7SihmA1VTVTi97boMPpZ2OM6KxRi0qs0nP95iZ8TsPw~M-OPVG4yADQsxb36bBA3ClGjzI6S2-FVJ9p7vsUkne2lCKctOoay5R5AwzE2JHQDwR8WfolA9z47HoO1QcJGs02CfieleTROoitjskpHwvA6o5~wbeAJRvSeXcMx2gWKpoyVbTYTqcWa71zXoKPp1udZiUazBYPdYWRWGRnn-0Fr7WqV3Z8YXx0ok6Ryu-bRWmIZyR77lu49EqcEyBKRw__",
    quantity: 130,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A natural herbal powder blend that can be added to smoothies or teas for a health boost."
  },
  {
    id: 31,
    name: "Medico Protein Powder",
    brand: "Medico",
    category: "Nutrition",
    price: 35.00,
    ratings: 4.6,
    weight: "10gm",
    dateAdded: "2024-01-10",
    image: "https://s3-alpha-sig.figma.com/img/ba17/6093/95e04a985f7067852196458a0805694c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-htUNY88c04plaBtGMu-C54v-23MTLAR3WlO4xx4zW9YfsgSN-~ALKldKjvpFQ7ezLfrxfO3khH9lnRPH9wRT9~tNYZIAm4Cf4V~QPzAwJY16z7KYQe~tlkSLnhEC5TQ6akhdbYo1DkWYvhRq6Rs1s5UHeb6XWsVr9wlw~gmw8TjvnbmKLg5zphM8iygByUs~mN4ekNVRGxK0AqY9SlM0BT~jiHoYh9ExOtSu7czFdxmH~jQJgx~8SFOw9-PRatdK4w1~b7lFyD35oFAnJkt9E82P8txxjy-hkZOlUL5y0ShyU03KytCTn5WJ0uiEAtxdAX~AyfDuHTxDx230xnYw__",
    quantity: 75,
    publish: true,
    status: 'Delivered',
    DeliveredDate: "17 July 2024",
    reviews: "" ,
    description: "A premium protein powder formulated to support muscle growth and enhance workout recovery."
  },
  {
    id: 32,
    name: "Empower Fiber Supplement",
    brand: "Empower",
    category: "Supplements",
    price: 16.50,
    ratings: 4.0,
    weight: "10gm",
    dateAdded: "2023-12-25",
    image: "https://s3-alpha-sig.figma.com/img/e032/d817/a0825ea72fbc7669da8edb7d2df8cb3a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdOAG2oI2z95LAyfMbNQmlFz5AJiJWk8gKNrFM1qOGB4IL107ay11HwGECED2UwjagZ8RPpTyGsavTiBKIMEf7SihmA1VTVTi97boMPpZ2OM6KxRi0qs0nP95iZ8TsPw~M-OPVG4yADQsxb36bBA3ClGjzI6S2-FVJ9p7vsUkne2lCKctOoay5R5AwzE2JHQDwR8WfolA9z47HoO1QcJGs02CfieleTROoitjskpHwvA6o5~wbeAJRvSeXcMx2gWKpoyVbTYTqcWa71zXoKPp1udZiUazBYPdYWRWGRnn-0Fr7WqV3Z8YXx0ok6Ryu-bRWmIZyR77lu49EqcEyBKRw__",
    quantity: 150,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A dietary fiber supplement to promote healthy digestion and maintain a balanced diet."
  },
  {
    id: 33,
    name: "Medico Detox Tea",
    brand: "Medico",
    category: "Beverages",
    price: 9.99,
    ratings: 4.4,
    weight: "4gm",
    dateAdded: "2023-11-18",
    image: "https://s3-alpha-sig.figma.com/img/ba17/6093/95e04a985f7067852196458a0805694c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-htUNY88c04plaBtGMu-C54v-23MTLAR3WlO4xx4zW9YfsgSN-~ALKldKjvpFQ7ezLfrxfO3khH9lnRPH9wRT9~tNYZIAm4Cf4V~QPzAwJY16z7KYQe~tlkSLnhEC5TQ6akhdbYo1DkWYvhRq6Rs1s5UHeb6XWsVr9wlw~gmw8TjvnbmKLg5zphM8iygByUs~mN4ekNVRGxK0AqY9SlM0BT~jiHoYh9ExOtSu7czFdxmH~jQJgx~8SFOw9-PRatdK4w1~b7lFyD35oFAnJkt9E82P8txxjy-hkZOlUL5y0ShyU03KytCTn5WJ0uiEAtxdAX~AyfDuHTxDx230xnYw__",
    quantity: 130,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A detoxifying tea blend that helps cleanse the body and supports natural energy."
  },
  {
    id: 34,
    name: "Empower Herbal Tea Mix",
    brand: "Empower",
    category: "Beverages",
    price: 11.50,
    ratings: 4.2,
    weight: "10gm",
    dateAdded: "2023-10-15",
    image: "https://s3-alpha-sig.figma.com/img/6bb4/aa5c/f6ad9b14d0159afe9e7cbe06ba784d95?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4T~aQWxAOYKOv9yFbE9JO8YhREjyLGrxJ1h0eqCkaQXSScZ2ziLSfKgjmnvUEJwzq~qOv-ytFkdcukzeP34Fza-glJuamU-EGrtBKryoqUrFTcCCHsVUfsC0M~E22izJWeLEaXgHkFCc9Vf6nuvatVtoIuElAIMKBPG-nW2fS1XB9P4LRamzROrn4bw5ZC2DNgR2YwbYSdHlSbh5iAcjWsuHZU1m3cB4UwwC0FH2vdLtYgIeSBpfTOwyeksXLhyzSGcKj4bAQt7JGiCMlSJ-xFNR2npj30NtT67KUZfHxuPd2FimpKCtT6Hoxxjr~8KnQGeYzfz1wgTmlH8qdzvVg__",
    quantity: 90,
    publish: true,
    status: 'Delivered',
    DeliveredDate: "17 July 2024",
    reviews: "" ,
    description: "A calming herbal tea mix crafted to promote relaxation and reduce stress."
  },
  {
    id: 35,
    name: "Medico Eye Care Capsules",
    brand: "Medico",
    category: "Health",
    price: 21.99,
    ratings: 4.5,
    weight: "10ml",
    dateAdded: "2023-09-10",
    image: "https://s3-alpha-sig.figma.com/img/bb4b/d6b2/440eea27926ed61f5dccf5b2ebcc480d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=elypXcSi-m75icQ1TRXXlEywH-HPhf-8DOkJh96RubsjHP30dSc-oM83~DywsOruvKGLJPLlvh9sdfaNKMq2Ny7xBHAX6GdEI2KKThtz37ejabeAGzZ8cm4wRK2yeJANM3tKXGzX7eVrAqwcAyhTJyQEqArjD1Dc3voVIfJWtwDYXfRArBP-npvoGe7OUKD1y3qh5A7O6iZ9KuTdEBz4Gtza3VCMTbwhAFhbkmxNl0etCGQu5-YqEFGSCeO6oxJ-2VZACeKKE1pk5hbJKHfHELhHyEOOslRuLM3z4hMxqboEBi9emeRBtlMrnYWbwBIjaYfn9jwiY-B1uNQCfAAVvw__",
    quantity: 100,
    publish: true,
    status: 'Delivered',
    DeliveredDate: "17 July 2024",
    reviews: "",
    description: "Capsules formulated to support eye health and help reduce the effects of eye strain."
  },
  {
    id: 36,
    name: "Empower Energy Drink Mix",
    brand: "Empower",
    category: "Nutrition",
    price: 5.99,
    ratings: 4.3,
    weight: "10gm",
    dateAdded: "2023-08-05",
    image: "https://s3-alpha-sig.figma.com/img/6bb4/aa5c/f6ad9b14d0159afe9e7cbe06ba784d95?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4T~aQWxAOYKOv9yFbE9JO8YhREjyLGrxJ1h0eqCkaQXSScZ2ziLSfKgjmnvUEJwzq~qOv-ytFkdcukzeP34Fza-glJuamU-EGrtBKryoqUrFTcCCHsVUfsC0M~E22izJWeLEaXgHkFCc9Vf6nuvatVtoIuElAIMKBPG-nW2fS1XB9P4LRamzROrn4bw5ZC2DNgR2YwbYSdHlSbh5iAcjWsuHZU1m3cB4UwwC0FH2vdLtYgIeSBpfTOwyeksXLhyzSGcKj4bAQt7JGiCMlSJ-xFNR2npj30NtT67KUZfHxuPd2FimpKCtT6Hoxxjr~8KnQGeYzfz1wgTmlH8qdzvVg__",
    quantity: 200,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "An energy drink mix that provides a quick boost of energy and essential electrolytes."
  },
  {
    id: 37,
    name: "Medico Herbal Capsules",
    brand: "Medico",
    category: "Supplements",
    price: 18.50,
    ratings: 4.7,
    weight: "20TB",
    dateAdded: "2023-07-22",
    image: "https://s3-alpha-sig.figma.com/img/ba17/6093/95e04a985f7067852196458a0805694c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-htUNY88c04plaBtGMu-C54v-23MTLAR3WlO4xx4zW9YfsgSN-~ALKldKjvpFQ7ezLfrxfO3khH9lnRPH9wRT9~tNYZIAm4Cf4V~QPzAwJY16z7KYQe~tlkSLnhEC5TQ6akhdbYo1DkWYvhRq6Rs1s5UHeb6XWsVr9wlw~gmw8TjvnbmKLg5zphM8iygByUs~mN4ekNVRGxK0AqY9SlM0BT~jiHoYh9ExOtSu7czFdxmH~jQJgx~8SFOw9-PRatdK4w1~b7lFyD35oFAnJkt9E82P8txxjy-hkZOlUL5y0ShyU03KytCTn5WJ0uiEAtxdAX~AyfDuHTxDx230xnYw__",
    quantity: 120,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "Herbal capsules with a blend of natural ingredients to enhance vitality and overall wellness."
  },
  {
    id: 38,
    name: "Empower Meal Replacement Bar",
    brand: "Empower",
    category: "Snacks",
    price: 3.25,
    ratings: 4.0,
    weight: "4gm",
    dateAdded: "2023-06-15",
    image: "https://s3-alpha-sig.figma.com/img/6bb4/aa5c/f6ad9b14d0159afe9e7cbe06ba784d95?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4T~aQWxAOYKOv9yFbE9JO8YhREjyLGrxJ1h0eqCkaQXSScZ2ziLSfKgjmnvUEJwzq~qOv-ytFkdcukzeP34Fza-glJuamU-EGrtBKryoqUrFTcCCHsVUfsC0M~E22izJWeLEaXgHkFCc9Vf6nuvatVtoIuElAIMKBPG-nW2fS1XB9P4LRamzROrn4bw5ZC2DNgR2YwbYSdHlSbh5iAcjWsuHZU1m3cB4UwwC0FH2vdLtYgIeSBpfTOwyeksXLhyzSGcKj4bAQt7JGiCMlSJ-xFNR2npj30NtT67KUZfHxuPd2FimpKCtT6Hoxxjr~8KnQGeYzfz1wgTmlH8qdzvVg__",
    quantity: 300,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A meal replacement bar loaded with balanced nutrients for on-the-go nourishment."
  },
  {
    id: 39,
    name: "Medico Joint Health Supplement",
    brand: "Medico",
    category: "Health",
    price: 24.99,
    ratings: 4.4,
    weight: "20TB",
    dateAdded: "2023-05-10",
    image: "https://s3-alpha-sig.figma.com/img/6bb4/aa5c/f6ad9b14d0159afe9e7cbe06ba784d95?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4T~aQWxAOYKOv9yFbE9JO8YhREjyLGrxJ1h0eqCkaQXSScZ2ziLSfKgjmnvUEJwzq~qOv-ytFkdcukzeP34Fza-glJuamU-EGrtBKryoqUrFTcCCHsVUfsC0M~E22izJWeLEaXgHkFCc9Vf6nuvatVtoIuElAIMKBPG-nW2fS1XB9P4LRamzROrn4bw5ZC2DNgR2YwbYSdHlSbh5iAcjWsuHZU1m3cB4UwwC0FH2vdLtYgIeSBpfTOwyeksXLhyzSGcKj4bAQt7JGiCMlSJ-xFNR2npj30NtT67KUZfHxuPd2FimpKCtT6Hoxxjr~8KnQGeYzfz1wgTmlH8qdzvVg__",
    quantity: 95,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "A supplement designed to support joint health and mobility with key nutrients."
  },
  {
    id: 40,
    name: "Empower Immune Support Pack",
    brand: "Empower",
    category: "Health",
    price: 28.00,
    ratings: 4.5,
    weight: "10ml",
    dateAdded: "2023-04-01",
    image: "https://s3-alpha-sig.figma.com/img/6bb4/aa5c/f6ad9b14d0159afe9e7cbe06ba784d95?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4T~aQWxAOYKOv9yFbE9JO8YhREjyLGrxJ1h0eqCkaQXSScZ2ziLSfKgjmnvUEJwzq~qOv-ytFkdcukzeP34Fza-glJuamU-EGrtBKryoqUrFTcCCHsVUfsC0M~E22izJWeLEaXgHkFCc9Vf6nuvatVtoIuElAIMKBPG-nW2fS1XB9P4LRamzROrn4bw5ZC2DNgR2YwbYSdHlSbh5iAcjWsuHZU1m3cB4UwwC0FH2vdLtYgIeSBpfTOwyeksXLhyzSGcKj4bAQt7JGiCMlSJ-xFNR2npj30NtT67KUZfHxuPd2FimpKCtT6Hoxxjr~8KnQGeYzfz1wgTmlH8qdzvVg__",
    quantity: 85,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "An immune support pack that helps fortify the body’s natural defenses with essential vitamins."
  },
  {
    id: 41,
    name: "Medico Hair Growth Capsules",
    brand: "Medico",
    category: "Health",
    price: 19.49,
    ratings: 4.3,
    weight: "1gm",
    dateAdded: "2023-03-18",
    image: "https://s3-alpha-sig.figma.com/img/ba17/6093/95e04a985f7067852196458a0805694c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-htUNY88c04plaBtGMu-C54v-23MTLAR3WlO4xx4zW9YfsgSN-~ALKldKjvpFQ7ezLfrxfO3khH9lnRPH9wRT9~tNYZIAm4Cf4V~QPzAwJY16z7KYQe~tlkSLnhEC5TQ6akhdbYo1DkWYvhRq6Rs1s5UHeb6XWsVr9wlw~gmw8TjvnbmKLg5zphM8iygByUs~mN4ekNVRGxK0AqY9SlM0BT~jiHoYh9ExOtSu7czFdxmH~jQJgx~8SFOw9-PRatdK4w1~b7lFyD35oFAnJkt9E82P8txxjy-hkZOlUL5y0ShyU03KytCTn5WJ0uiEAtxdAX~AyfDuHTxDx230xnYw__",
    quantity: 150,
    publish: true,
    status: '',
    DeliveredDate: "",
    reviews: "" ,
    description: "Capsules aimed at nourishing hair follicles and promoting healthy hair growth."
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
