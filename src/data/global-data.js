const categories = [
  {
    _id: '65af9e5dd921af70f8891df5',
    categoryName: 'Book Event',
    // imageUrl: 'https://icons8.com/icon/42287/calendar',
    imageUrl: require('../../assets/category/icons8-event-100.png'),
  },
  {
    _id: '65cdf550f8445ef008d0ed02',
    categoryName: 'Sound',
    imageUrl: require('../../assets/category/icons8-woofer-100.png'),
  },
  {
    _id: '65d09bff61ad81ac9aa653c4',
    categoryName: 'Lighting',
    imageUrl: require('../../assets/category/icons8-fresnel-lantern-100.png'),
  },
  {
    _id: '65c380e12db6b64426f1232e',
    categoryName: 'Video',
    imageUrl: require('../../assets/category/icons8-video-100.png'),
  },
  {
    _id: '65b20a2e84aec8b4de816eb9',
    categoryName: 'Fabrication',
    imageUrl: require('../../assets/category/icons8-ramp-100.png'),
  },
  {
    _id: '65b0aebcde7ed128bf89bc54',
    categoryName: 'Genset',
    imageUrl: require('../../assets/category/icons8-engine-100.png'),
  },
  {
    _id: '65b0a93bf3364a396d064832',
    categoryName: 'Shamlyana',
    imageUrl: require('../../assets/category/icons8-canopy-100.png'),
  },
  {
    _id: '65ec0b80474d5d0ee66d3f17',
    categoryName: 'DJs',
    imageUrl: require('../../assets/category/icons8-dj-100.png'),
  },
  {
    _id: '65d09d3461ad81ac9aa6541c',
    categoryName: 'Hosts',
    imageUrl: require('../../assets/category/icons8-radio-studio-50.png'),
  },
  {
    _id: '65cdba0a5bed92ae8f53960e',
    categoryName: 'Co-Hosts',
    imageUrl: require('../../assets/category/icons8-mic-drop-50.png'),
  },
  {
    _id: '65ec52b03f362eb6d1b3295f',
    categoryName: 'Catering',
    imageUrl: require('../../assets/category/icons8-chef-64.png'),
  },
  {
    _id: '65c380862db6b64426f12318',
    categoryName: 'Videographer',
    imageUrl: require('../../assets/category/icons8-video-100.png'),
  },
  {
    _id: '65b252c1772634ac8465d6fb',
    categoryName: 'Photographer',
    imageUrl: require('../../assets/category/icons8-vintage-camera-50.png'),
  },
  {
    _id: '65b0daedc46b6d4c5b8b926a',
    categoryName: 'Hotels',
    imageUrl: require('../../assets/category/icons8-3-star-hotel-64.png'),
  },
  {
    _id: '65b0dabbc46b6d4c5b8b9266',
    categoryName: 'Resorts',
    imageUrl: require('../../assets/category/icons8-resort-64.png'),
  },
  {
    _id: '65afb4317931820fecfa4cca',
    categoryName: 'Celebrities',
    imageUrl: require('../../assets/category/icons8-red-carpet-100.png'),
  },
];

const productList = [
  {
    _id: '65ec4d5f3f362eb6d1b32866',
    productName: '4 feets Brass Lamp For Rent Near You',
    categoryId: '65d09bff61ad81ac9aa653c4',
    vendorName: 'Vinayaka',
    shopName: 'Shri Vinayaka Rents',
    productDescription:
      '4 feets Pure Brass With Decoration (Optional) Peacock Or Cross Symbol(Optional) Free Delivery',
    productPrice: 1000,
    units: 'Hour',
    productImage:
      'https://rentzeasy.com/assets/images/product-images/img1_1711957393brasslamponrentnearyou.webp',
  },
  {
    _id: '65ec4d8e3f362eb6d1b32871',
    productName: 'Led parcan light on hire ',
    categoryId: '65d09bff61ad81ac9aa653c4',
    vendorName: 'Nayakan',
    shopName: 'Nayak Digitals',
    productDescription: 'Led light on hire',
    productPrice: 2500,
    units: 'Day',
    productImage:
      'https://rentzeasy.com/assets/images/product-images/ehF4quqXba8xkmA0Nh39Nfz2.jpeg',
  },
  {
    _id: '65ec53403f362eb6d1b32983',
    productName: 'LED Par Light Rental Service',
    categoryId: '65d09bff61ad81ac9aa653c4',
    vendorName: 'Mani Thiruvenkadam',
    shopName: 'Mani Enterprises',
    productDescription:
      'To meet the various requirements of the customers, we are involved in providing LED Par Light Rental Service.',
    productPrice: 1000,
    units: 'Hour',
    productImage:
      'https://5.imimg.com/data5/SELLER/Default/2024/5/419197998/PE/EE/XD/222160355/led-par-rgdww-rental-service-1000x1000.jpeg',
  },
  {
    _id: '65ec53673f362eb6d1b32994',
    productName: 'Bluetooth Speaker On Rent',
    categoryId: '65cdf550f8445ef008d0ed02',
    shopName: 'Mani Enterprises',
    vendorName: 'Mani Thiruvenkadam',
    productDescription:
      'Consider renting a Bluetooth speaker for your small event. Rental services offer a variety of speakers, so you can find the perfect one for your needs. Compare rates, features, and delivery options from different rental companies before making a decision.',
    productPrice: 1500,
    units: 'Day',
    productImage:
      'https://5.imimg.com/data5/ANDROID/Default/2023/5/312502760/NT/NI/BE/44485227/product-jpeg-1000x1000.jpg',
  },
  {
    _id: '66362914711365d704e20a91',
    productName: 'Jbl Speaker On Rental',
    categoryId: '65cdf550f8445ef008d0ed02',
    shopName: 'Nayak Digitals',
    vendorName: 'Nayakan',
    productDescription:
      'We are professional in Sound hardware Related Services, Speakers , Amplifiers , Mixers , Consoles for Birthday Parties, Confrences , and Events.Contact For More Deatail.',
    productPrice: 4000,
    units: 'Hour',
    productImage:
      'https://5.imimg.com/data5/SELLER/Default/2023/6/313927078/UU/DN/QX/190852559/paket-sound-system-meeting-a-e7b-3037-881-t598-26-1000x1000.jpg',
  },
];

const vendor = [
  {
    shopName: 'Shri Vinayaka Rents',
    vendorName: 'Vinayaka',
    location: 'Channasandra',
    vendorBannerImage: [
      {
        imageUrl:
          'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
      },
      {
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU',
      },
      {
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-qEOjAIUbs_tt9F5PFoFXzTsCvcTCr-xEpJsbaaEyp2mXkCZzv-yjkn1MzV5TEUr1rw&usqp=CAU',
      },
    ],
  },
  {
    shopName: 'Nayak Digitals',
    vendorName: 'Nayakan',
    location: 'Banashankari',
    vendorProductImage: [
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipOV6toil7D3V_8hdR04NcbKC3tpOaG6BQKrwNR-=s680-w680-h510',
      },
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipN5gR_rQob6ywAzN6KgTasz7-NEU6seZjtHs6Q6=s680-w680-h510',
      },
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipOvmutDqf12OuCsy-f_NRf6B03W46ZRqhPe7bch=s680-w680-h510',
      },
    ],
  },
  {
    shopName: 'Mani Enterprises',
    vendorName: 'Mani Thiruvenkadam',
    location: 'Majestic',
    vendorProductImage: [
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipPXLvQb1Va5haLR42be6Jnz35WemPmaJDjmJX6W=s680-w680-h510',
      },
      {
        imageUrl:
          'https://content.jdmagicbox.com/comp/nalgonda/m3/9999p8682.8682.201203170035.l9m3/catalogue/-8t9w2ohcqk.jpg',
      },
      {
        imageUrl:
          'https://www.daytonlocal.com/images/profiles/covers/special-occasions-party-supply.jpg',
      },
    ],
  },
];

const priceFilter = [
  {
    price: 'All Price',
    id: '652745',
  },
  {
    price: 'Under ₹300',
    id: '978956',
  },
  {
    price: '₹300 - ₹500',
    id: '576586',
  },
  {
    price: '₹500 - ₹1000',
    id: '326524',
  },
  {
    price: '₹1000 - ₹1500',
    id: '547364',
  },
  {
    price: 'Over ₹1500',
    id: '4245374',
  },
];
export {categories, productList, vendor, priceFilter};
