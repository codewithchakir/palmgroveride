const Variables = {
  "links" : {
      "instagram" : "https://www.instagram.com/codewithchakir/",
      "facebook" : "https://www.instagram.com/codewithchakir/",
      "whatsapp" : "https://www.instagram.com/codewithchakir/"
  },
  "text" : {
      "email" : "codewithchakir@gmail.com",
      "phone" : "+212 628-354575",
      "address" : "Ait Brahim, Marrakech, Morocco",
      "aboutUs": "At Adventure Tours, we specialize in providing unforgettable outdoor experiences in the beautiful landscapes of Marrakech. Whether you're looking for adrenaline-pumping quad rides, serene camel tours, or thrilling buggy adventures, we have something for everyone. Our team is dedicated to ensuring your safety and enjoyment as you explore the stunning Palm Grove and surrounding areas.",
      "description": "Explore the Palm Grove and navigate through rugged terrain and experience the thrill of off-road riding."
  },
  "activitiesData" : [
    {
      imageSrc: '/img/quad.jpg',
      title: 'The best quad ride in the Palm Grove',
      link: 'quad',
      description : "Explore the Palm Grove in style with our exciting quad tours. With our expert guides, you'll navigate through rugged terrain and experience the thrill of off-road riding. Our quads are well-maintained and equipped for adventure, ensuring a safe and exhilarating experience for all.",
      types : [
      {
        name : "300cc",
        price : [ "250", "350" ]
      },
      {
        name : "450cc",
        price : [ "400", "600" ]
      },
      {
        name : "700cc",
        price : [ "1400", "2400" ]
      }

    ]
    },
    {
      imageSrc: '/img/camel.jpg',
      title: 'Magical camel tour in the Palm Grove',
      link: 'camel',
      description : "Experience the tranquility of the Palm Grove on our magical camel tours. Let our friendly camels take you on a journey through the desert landscape as you soak in the breathtaking views. Our experienced guides will ensure a memorable and enjoyable experience for all.",
      types : [
      {
        name : false,
        price : [ "150", "250" ]
      }

    ]
    },
    {
      imageSrc: '/img/buggy.jpg',
      title: 'Buggy activity in the Palm Grove',
      link: 'buggy',
      description : "Get ready for an adrenaline-fueled adventure with our buggy tours. Explore the rugged terrain of the Palm Grove in our powerful buggies, designed for maximum thrills and excitement. Our experienced guides will lead you on an unforgettable journey through the desert landscape.",
      types : [
      {
        name : "600cc",
        price : [ "500", "800" ]
      },
      {
        name : "800cc",
        price : [ "900", "1400" ]
      },
      {
        name : "1000cc",
        price : [ "3000", "4500" ]
      }

    ]
    },
    {
      imageSrc: '/img/motocross.jpg',
      title: 'Palm Grove motocross adventure',
      link: 'motocross',
      description : "Get your adrenaline pumping with our thrilling motocross tours. Whether you're a beginner or an experienced rider, our expert guides will take you on an exhilarating journey through the desert terrain. Feel the rush as you tackle jumps, bumps, and twists on our well-maintained motocross bikes.",
      types : [
      {
        name : "125cc",
        price : [ "1600", "2600" ]
      },
      {
        name : "250cc",
        price : [ "1600", "2600" ]
      },
      {
        name : "450cc",
        price : [ "1600", "2600" ]
      }

    ]
    },
    {
      imageSrc: '/img/hot-air-ballon.jpg',
      title: 'Sunrise hot air balon adventure',
      link: 'balloon',
      description : "Experience the breathtaking beauty of Marrakech from above with our hot air balloon tours. Drift peacefully over the stunning landscape as the sun rises, casting golden hues over the desert below. Our experienced pilots will ensure a safe and unforgettable journey for all.",
      types : [
      {
        name : false,
        price : [ "1900" ]
      }

    ]
    },
    {
      imageSrc: '/img/horse-ride.jpg',
      title: 'Palm Grove horse riding adventure',
      link: 'horse',
      description : "Discover the beauty of the Palm Grove on horseback with our horse riding tours. Whether you're a novice rider or an experienced equestrian, our well-trained horses and expert guides will take you on a memorable journey through the desert landscape. Enjoy the tranquility and serenity of the desert as you explore hidden gems and breathtaking vistas.",
      types : [
      {
        name : false,
        price : [ "200", "350" ]
      }

    ]
    }
  ]
}

export default Variables;