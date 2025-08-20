const PRODUCTS = [
  {
    id: 1,
    category: "Home Appliances",
    name: "13.2 Gallon Touchless Rectangular Motion Sensor Trash Can, Brushed Stainless Steel Finish",
    img: "images/house/1.jpg",
    imgs: [
      "images/house/1.jpg",
      "images/house/1.1.jpg",
      "images/house/1.2.jpg",
      "images/house/1.3.jpg",
    ],
    desc: "This touchless trash can features a rectangular design and motion sensor technology for hygienic, hands-free operation. The brushed stainless steel finish adds a modern look to any kitchen or office.",
  },
  {
    id: 2,
    category: "Home Appliances",
    name: "Kitchen Trash Can with Lid, 13 Gallon Automatic Garbage Can for Bathroom Bedroom Home Office 50 Liter Touch Free High-Capacity Brushed Stainless Steel Waste Bin",
    img: "images/house/2.jpg",
    imgs: [
      "images/house/2.jpg",
      "images/house/2.1.jpg",
      "images/house/2.2.jpg",
      "images/house/2.3.jpg",
    ],
    desc: "This automatic garbage can offers a large 13-gallon capacity and a touch-free lid for maximum convenience. The brushed stainless steel body is durable and stylish, suitable for any room.",
  },
  {
    id: 3,
    category: "Home Appliances",
    name: "Trash Can, 4 Gallon Self Sealing and Self-Changing Smart Trash Can, Motion Sensor, Touchless Garbage can with lid for Kitchen Bathroom Bedroom, 6 Refill Rings(A1, Black Line)",
    img: "images/house/3.jpg",
    imgs: [
      "images/house/3.jpg",
      "images/house/3.1.jpg",
      "images/house/3.2.jpg",
      "images/house/3.3.jpg",
    ],
    desc: "This 4-gallon smart trash can features self-sealing and self-changing technology. The motion sensor lid provides touchless convenience for kitchens, bathrooms, or bedrooms.",
  },
  {
    id: 4,
    category: "Home Appliances",
    name: "Bathroom Trash Can with Lid, KOEYLE 2 Pack 2.2 Gallon Automatic Touchless Garbage Can, Small Motion Sensor Smart Trash Can, Slim Waterproof Trash Bin for Bedroom, Bathroom, Office, Living Room (Black)",
    img: "images/house/4.jpg",
    imgs: [
      "images/house/4.jpg",
      "images/house/4.1.jpg",
      "images/house/4.2.jpg",
      "images/house/4.3.jpg",
    ],
    desc: "This set includes two 2.2-gallon automatic trash cans with slim, waterproof bodies. The motion sensor lids offer hygienic, touchless operation for bathrooms, bedrooms, or offices.",
  },
  {
    id: 5,
    category: "Home Appliances",
    name: "13 Gallon Odor Neutralizing Smart Trash Can, UV + Ozone Dual Purification, Odor Control Motion Sensor Garbage Bin, Universal Power Adapter, ONT-50-81SL Stainless Steel, Silver, Nova Series",
    img: "images/house/5.jpg",
    imgs: [
      "images/house/5.jpg",
      "images/house/5.1.jpg",
      "images/house/5.2.jpg",
      "images/house/5.3.jpg",
    ],
    desc: "This 13-gallon smart trash can uses UV and ozone dual purification for advanced odor control. The motion sensor lid and stainless steel design make it a modern, hygienic solution.",
  },
  {
    id: 6,
    category: "Home Appliances",
    name: "13 Gallon Kitchen Trash Can with Odor Filter, Stainless Steel Oval Automatic Home Appliances for Home Office Bedroom Living Room Garage Large Capacity Slim Space-Saving Bin",
    img: "images/house/6.jpg",
    imgs: [
      "images/house/6.jpg",
      "images/house/6.1.jpg",
      "images/house/6.2.jpg",
      "images/house/6.3.jpg",
    ],
    desc: "This 13-gallon oval automatic trash can features an integrated odor filter and a slim, space-saving design. The stainless steel finish fits perfectly in any kitchen, office, or living space.",
  },
  {
    id: 7,
    category: "Home Appliances",
    name: "Bathroom Motion Sensor Trash can 2 Gallon Automatic Garbage Can, Slim Plastic Smart Trash Can with Lid, Commercial Intelligent Trash Bin for Bedroom, Bathroom, Office, White with Grey Trim",
    img: "images/house/7.jpg",
    imgs: [
      "images/house/7.jpg",
      "images/house/7.1.jpg",
      "images/house/7.2.jpg",
      "images/house/7.3.jpg",
    ],
    desc: "This 2-gallon smart trash can features a slim plastic design and a motion sensor lid for hands-free use. Perfect for bathrooms, bedrooms, or offices with a clean white and grey finish.",
  },
  {
    id: 8,
    category: "Home Appliances",
    name: "Bathroom Small Trash Can with Automatic Touchless Lid, 2.6 Gallon Smart Garbage Can Narrow Waterproof Trash Bin for Bedroom, Office, Living Room",
    img: "images/house/8.jpg",
    imgs: [
      "images/house/8.jpg",
      "images/house/8.1.jpg",
      "images/house/8.2.jpg",
      "images/house/8.3.jpg",
    ],
    desc: "This 2.6-gallon trash can features a narrow, waterproof body and an automatic touchless lid. Ideal for small spaces in bedrooms, offices, or living rooms.",
  },
  {
    id: 9,
    category: "Home Appliances",
    name: "Hotel Scent Home Appliances, house/ Scent Machine, 10000 Sq.Ft of Coverage, 200ml Large Capacity Aromatherapy Machine, Scent Home Appliancess for Home Large Room, Office Waterless Essential Oil Home Appliances, Black",
    img: "images/house/9.jpg",
    imgs: [
      "images/house/9.jpg",
      "images/house/9.1.jpg",
      "images/house/9.2.jpg",
      "images/house/9.3.jpg",
    ],
    desc: "This hotel-grade scent Home Appliances covers up to 10,000 sq.ft, delivering long-lasting fragrance with a 200ml capacity. The waterless design makes it perfect for large rooms, offices, or homes.",
  },
  {
    id: 10,
    category: "Home Appliances",
    name: "Smart Scent Air Machine for Home, 1500 Sq. Ft Hotel Collection Home Appliances with Cold Air Tech, Whole house/ Fragrance & Low Noise, Bluetooth Scent Air Home Appliances for Home, Hotel, Office, Spa(Black)",
    img: "images/house/10.jpg",
    imgs: [
      "images/house/10.jpg",
      "images/house/10.1.jpg",
      "images/house/10.2.jpg",
      "images/house/10.3.jpg",
    ],
    desc: "This smart scent air machine uses cold air diffusion to cover up to 1,500 sq.ft with low noise operation. Bluetooth connectivity allows easy control for home, hotel, office, or spa environments.",
  },
  {
    id: 11,
    category: "Home Appliances",
    name: "WiFi Wireless Essential Oil Aromatherapy 400ml Ultrasonic Home Appliances & Humidifier with Alexa & Google Home Phone App & Voice Control - LED & Timer Settings Dark Brown",
    img: "images/house/11.jpg",
    imgs: [
      "images/house/11.jpg",
      "images/house/11.1.jpg",
      "images/house/11.2.jpg",
      "images/house/11.3.jpg",
    ],
    desc: "This 400ml ultrasonic Home Appliances and humidifier offers WiFi connectivity, voice control with Alexa and Google Home, and customizable LED and timer settings. Perfect for modern aromatherapy at home.",
  },
  {
    id: 12,
    category: "Home Appliances",
    name: "Smart WiFi Essential Oil Home Appliances, 500ml Aromatherapy Home Appliances Humidifier for Large Room, Works with App & Alexa Google Home Voice Control, 7 LED, Create Schedules and 4 Timer, Auto Off, Dark Wood",
    img: "images/house/12.jpg",
    imgs: [
      "images/house/12.jpg",
      "images/house/12.1.jpg",
      "images/house/12.2.jpg",
      "images/house/12.3.jpg",
    ],
    desc: "This 500ml smart essential oil Home Appliances features WiFi and app control, voice support, 7 LED colors, and multiple timer options. Designed for large rooms with a stylish dark wood finish.",
  },
  {
    id: 13,
    category: "Home Appliances",
    name: "Smart Wifi Essential Oil Home Appliances White Ceramic Home Appliances 250 ml with Alexa Google Home App Phone Control LED and Auto Off Office Humidifier Aromatherapy Home Appliancess for Essential Oils",
    img: "images/house/13.jpg",
    imgs: [
      "images/house/13.jpg",
      "images/house/13.1.jpg",
      "images/house/13.2.jpg",
      "images/house/13.3.jpg",
    ],
    desc: "This 250ml smart WiFi essential oil Home Appliances features a white ceramic design, app and voice control, LED lighting, and auto-off functionality. Ideal for office or home aromatherapy.",
  },
  {
    id: 14,
    category: "computer",
    name: "High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men, White",
    img: "images/computer/1.jpg",
    imgs: [
      "images/computer/1.jpg",
      "images/computer/1.1.jpg",
      "images/computer/1.2.jpg",
      "images/computer/1.3.jpg"
    ],
    desc: "This high-back gaming chair features ergonomic lumbar support and a comfortable PU leather design, ideal for long hours of work or gaming. The executive swivel and rolling base offer easy mobility and flexibility. Perfect for both men and women, it helps reduce back pain and improves posture in any office or gaming setup."
  },
  {
    id: 15,
    category: "computer",
    name: "Gaming Chair, Ergonomic Computer Office Chair with Footrest and Lumbar Support, Height Adjustable Desk Chair with 360° Swivel Seat and Headrest, Red & Black",
    img: "images/computer/2.jpg",
    imgs: [
      "images/computer/2.jpg",
      "images/computer/2.1.jpg",
      "images/computer/2.2.jpg",
      "images/computer/2.3.jpg"
    ],
    desc: "This ergonomic gaming chair comes with a retractable footrest, adjustable height, and a 360° swivel seat for complete comfort. The headrest and lumbar support ensure optimal posture during extended gaming or work sessions. Finished in striking red and black, it's a stylish addition to any computer desk."
  },
  {
    id: 16,
    category: "computer",
    name: "Office Chair with 3D Adjustable Armrest, Plastic Frame High Back Desk Computer Chair Ergo3d Ergonomic Office Chair with Wheels for Home & Office Black",
    img: "images/computer/3.jpg",
    imgs: [
      "images/computer/3.jpg",
      "images/computer/3.1.jpg",
      "images/computer/3.2.jpg",
      "images/computer/3.3.jpg"
    ],
    desc: "Featuring a plastic frame and high-back design, this office chair provides superior ergonomic support for daily use. The 3D adjustable armrests and smooth-rolling wheels make it perfect for both home and office environments. Its black finish adds a modern, professional touch to any workspace."
  },
  {
    id: 17,
    category: "computer",
    name: "Office Chair - X-Shaped Computer Desk Chairs Comfy, Mesh High-Back Gaming Chair with Adjustable Lumbar Support, Executive Task Chair for Adults, Comfortable for Long Hours (White Grey)",
    img: "images/computer/4.jpg",
    imgs: [
      "images/computer/4.jpg",
      "images/computer/4.1.jpg",
      "images/computer/4.2.jpg",
      "images/computer/4.3.jpg"
    ],
    desc: "This X-shaped mesh office chair offers a high-back design and adjustable lumbar support for maximum comfort. Ideal for adults, it is built to provide excellent support during long working hours. The white and grey color scheme gives a clean, contemporary look to any office or gaming room."
  },
  {
    id: 18,
    category: "computer",
    name: "Gaming Chair - Ergonomic Office Chair with Back Support, Home Office Desk Chairs, Computer Chair, 330lbs Wide Seat Big and Tall Office Chair for Professionals (White Black)",
    img: "images/computer/5.jpg",
    imgs: [
      "images/computer/5.jpg",
      "images/computer/5.1.jpg",
      "images/computer/5.2.jpg",
      "images/computer/5.3.jpg"
    ],
    desc: "Designed for professionals, this big and tall office chair supports up to 330lbs with a wide, comfortable seat. The ergonomic back support ensures healthy posture and reduced fatigue. The white and black design fits seamlessly into any modern home office or gaming setup."
  },
  {
    id: 19,
    category: "computer",
    name: "HV-F2056 15.6\"-17\" Laptop Cooler Cooling Pad - Slim Portable USB Powered (3 Fans), Black/Blue",
    img: "images/computer/6.jpg",
    imgs: [
      "images/computer/6.jpg",
      "images/computer/6.1.jpg",
      "images/computer/6.2.jpg",
      "images/computer/6.3.jpg"
    ],
    desc: "Keep your laptop cool with this slim and portable USB-powered cooling pad, designed for 15.6\" to 17\" laptops. Featuring three quiet fans and a stylish black/blue design, it ensures efficient heat dissipation. Perfect for gamers, students, or professionals on the go."
  },
  {
    id: 20,
    category: "computer",
    name: "Laptop Cooling Pad, Laptop Cooler with 5 Quiet Fans for 12\"-17\" Computer PC Notebook Gaming Laptop Fan, Height Adjustable Laptop Cooling Stand Laptop Accessories, Blue",
    img: "images/computer/7.jpg",
    imgs: [
      "images/computer/7.jpg",
      "images/computer/7.1.jpg",
      "images/computer/7.2.jpg",
      "images/computer/7.3.jpg"
    ],
    desc: "This laptop cooling pad features five ultra-quiet fans and adjustable height settings for customizable comfort. Suitable for 12\" to 17\" laptops, it keeps your device cool during intense gaming or work sessions. The blue accent lighting adds a modern touch to your workspace."
  },
  {
    id: 21,
    category: "computer",
    name: "iPad Cooler, Magnetic Tablet Cooler for iPad/Surface Pro/Samsung Tab, Compatible for Steam Deck, Universal Radiator with Temperature Display for Mobile Gaming, Tiktok Live Streaming",
    img: "images/computer/8.jpg",
    imgs: [
      "images/computer/8.jpg",
      "images/computer/8.1.jpg",
      "images/computer/8.2.jpg",
      "images/computer/8.3.jpg"
    ],
    desc: "This magnetic tablet cooler is designed for iPad, Surface Pro, Samsung Tab, and Steam Deck, offering universal compatibility. The built-in temperature display helps monitor device heat during gaming or live streaming. Perfect for mobile gamers and content creators seeking reliable cooling on the go."
  },
  {
    id: 22,
    category: "computer",
    name: "Laptop Cooling Pad, Gaming Laptop Cooler with 9 Quiet Fans, Laptop Cooling Stand for 12-17 Inch, Laptop Computer Fan with 5 Height Adjustable, 2 USB Ports, 1 Phone Stand",
    img: "images/computer/9.jpg",
    imgs: [
      "images/computer/9.jpg",
      "images/computer/9.1.jpg",
      "images/computer/9.2.jpg",
      "images/computer/9.3.jpg"
    ],
    desc: "This gaming laptop cooler features nine quiet fans, five adjustable heights, and built-in USB ports for added convenience. Suitable for 12\" to 17\" laptops, it ensures optimal cooling during heavy use. Includes a phone stand for multitasking and improved workspace organization."
  },
  {
    id: 23,
    category: "computer",
    name: "Webcam, Webcams for PC, Full HD 1080P Video Calling, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/MacBook/Tablet",
    img: "images/computer/10.jpg",
    imgs: [
      "images/computer/10.jpg",
      "images/computer/10.1.jpg",
      "images/computer/10.2.jpg",
      "images/computer/10.3.jpg"
    ],
    desc: "Experience crystal-clear video with this Full HD 1080P webcam, featuring advanced light correction for any environment. Compatible with all major platforms like Skype, Zoom, and FaceTime, it works seamlessly on PC, Mac, laptops, and tablets. Perfect for video calls, conferencing, and online learning."
  },
  {
    id: 24,
    category: "computer",
    name: "1080P HD Webcam with Microphone, Wide-Angle Lens, Auto Light Correction, Plug & Play USB Webcam for Laptop, Desktop, PC, Mac, Zoom, Skype, Streaming Black",
    img: "images/computer/11.jpg",
    imgs: [
      "images/computer/11.jpg",
      "images/computer/11.1.jpg",
      "images/computer/11.2.jpg",
      "images/computer/11.3.jpg"
    ],
    desc: "This 1080P HD webcam features a built-in microphone, wide-angle lens, and automatic light correction for superior video quality. Easy plug-and-play setup makes it ideal for laptops, desktops, and streaming. Compatible with Zoom, Skype, and other popular applications in a sleek black design."
  },
  {
    id: 25,
    category: "computer",
    name: "1080P Webcam with Microphone, HD Webcam Web Camera with Tripod Stand, Widescreen USB Computer Camera, Streaming Mic Web cam for Online Calling/Conferencing, Facetime/YouTube Desktop Laptop PC",
    img: "images/computer/12.jpg",
    imgs: [
      "images/computer/12.jpg",
      "images/computer/12.1.jpg",
      "images/computer/12.2.jpg",
      "images/computer/12.3.jpg"
    ],
    desc: "This HD 1080P webcam comes with a tripod stand and built-in microphone for clear audio and video during calls and streaming. The widescreen lens is perfect for conferencing, Facetime, and YouTube. Compatible with desktop and laptop PCs, it offers easy USB connectivity for instant use."
  },
    {
    id: 26,
    category: "Home Appliances",
    name: "Wireless Wi-Fi Video Doorbell Camera with Two Way Audio, AI Motion Detection, Night Vision and Cloud Storage, 2.4G Wi-Fi only",
    img: "images/house/14.jpg",
    imgs: [
      "images/house/14.jpg",
      "images/house/14.1.jpg",
      "images/house/14.2.jpg",
      "images/house/14.3.jpg"
    ],
    desc: "This wireless Wi-Fi video doorbell camera offers two-way audio for easy communication with visitors. Featuring AI motion detection, night vision, and cloud storage, it ensures your home is secure day and night. Designed for 2.4G Wi-Fi networks, it's perfect for modern smart homes."
  },
  {
    id: 27,
    category: "Home Appliances",
    name: "Video Doorbell 2K | 2nd Gen | Wire-Free/Wired Option, 2-Way Audio, Night Vision, Head to Toe Video View, Integrated Siren | Live Stream | Real Time Notifications |180 Deg Wide View, White",
    img: "images/house/15.jpg",
    imgs: [
      "images/house/15.jpg",
      "images/house/15.1.jpg",
      "images/house/15.2.jpg",
      "images/house/15.3.jpg"
    ],
    desc: "The 2nd Gen Video Doorbell 2K provides crystal-clear head-to-toe video with a 180-degree wide view. Choose wire-free or wired installation, enjoy two-way audio, night vision, and an integrated siren for extra security. Live streaming and real-time notifications keep you connected to your front door anytime."
  },
  {
    id: 28,
    category: "Home Appliances",
    name: "Wireless Doorbell, 1,000ft Range Loud Enough with 5 Volume Levels and Mute Mode Door Chimes LED Flashing",
    img: "images/house/16.jpg",
    imgs: [
      "images/house/16.jpg",
      "images/house/16.1.jpg",
      "images/house/16.2.jpg",
      "images/house/16.3.jpg"
    ],
    desc: "This wireless doorbell offers a 1,000ft range and five adjustable volume levels, including a mute mode for quiet environments. The LED flashing feature ensures you never miss a visitor, even in noisy settings. Reliable and easy to install, it's ideal for homes and offices."
  },
  {
    id: 29,
    category: "Home Appliances",
    name: "White 2-Note Wired Mechanical Door Bell Chime CHM1",
    img: "images/house/17.jpg",
    imgs: [
      "images/house/17.jpg",
      "images/house/17.1.jpg",
      "images/house/17.2.jpg",
      "images/house/17.3.jpg"
    ],
    desc: "The White 2-Note Wired Mechanical Door Bell Chime CHM1 delivers a classic chime sound for traditional homes. Its mechanical design ensures durability and reliable performance. Simple to install and elegantly styled, it adds a timeless touch to any entryway."
  },
  {
    id: 30,
    category: "Home Appliances",
    name: "Wireless Doorbell, Mini Waterproof Door Bell Chime Operating at 1000 Feet, CW-11 Doorbell with 52 Melodies, 5 Volume Levels & LED Flash",
    img: "images/house/18.jpg",
    imgs: [
      "images/house/18.jpg",
      "images/house/18.1.jpg",
      "images/house/18.2.jpg",
      "images/house/18.3.jpg"
    ],
    desc: "This mini waterproof wireless doorbell operates up to 1,000 feet and features 52 selectable melodies. With five volume levels and LED flash alerts, it suits any environment and personal preference. Its compact, weather-resistant design makes it perfect for outdoor use."
  },
  {
    id: 31,
    category: "Home Appliances",
    name: "IP66 Doorbell Wireless Classroom Doorbell Waterproof & Dustproof Loud 115dB with 56 Chimes Door Bell Ringer 1000ft Range Battery Doorbells 7 Levels Volume Mute Mode for Bedroom Home Kids Room Office",
    img: "images/house/19.jpg",
    imgs: [
      "images/house/19.jpg",
      "images/house/19.1.jpg",
      "images/house/19.2.jpg",
      "images/house/19.3.jpg"
    ],
    desc: "This IP66 wireless doorbell is waterproof and dustproof, making it ideal for classrooms, bedrooms, and offices. With a loud 115dB sound, 56 chimes, and a 1,000ft range, it ensures you never miss a ring. Seven volume levels and mute mode offer flexible usage for any environment."
  },
    {
    id: 32,
    category: "phone",
    name: "Magnetic for iPhone 14 Case & iPhone 13 Case (Compatible with MagSafe)(Military Grade Drop Protection) Translucent Matte Shockproof Phone Cover, Black",
    img: "images/phone/1.jpg",
    imgs: [
      "images/phone/1.jpg",
      "images/phone/1.1.jpg",
      "images/phone/1.2.jpg",
      "images/phone/1.3.jpg"
    ],
    desc: "This magnetic phone case is designed for iPhone 14 and iPhone 13, fully compatible with MagSafe accessories. The translucent matte finish offers a modern look while military-grade drop protection keeps your device safe. Its shockproof design ensures durability, and the black color adds a sleek touch."
  },
  {
    id: 33,
    category: "phone",
    name: "iPhone 15 Plus Case, Compatible with MagSafe, Military-Grade Protection, Yellowing Resistant, Scratch-Resistant Back, Magnetic Phone Case for iPhone 15 Plus, Classic Series, Clear",
    img: "images/phone/2.jpg",
    imgs: [
      "images/phone/2.jpg",
      "images/phone/2.1.jpg",
      "images/phone/2.2.jpg",
      "images/phone/2.3.jpg"
    ],
    desc: "Protect your iPhone 15 Plus with this MagSafe-compatible case featuring military-grade protection and a clear, yellowing-resistant design. The scratch-resistant back keeps your phone looking new, while the magnetic construction ensures secure attachment to MagSafe accessories. Part of the Classic Series, it combines style and functionality."
  },
  {
    id: 34,
    category: "phone",
    name: "iPhone 15 Case with Magnetic O-Ring Stand Holder [Military Drop Protection] [Compatible with MagSafe] Non-Slip Grip Shockproof Protective Women Men Phone Case for iPhone 15 6.1'', Brown",
    img: "images/phone/3.jpg",
    imgs: [
      "images/phone/3.jpg",
      "images/phone/3.1.jpg",
      "images/phone/3.2.jpg",
      "images/phone/3.3.jpg"
    ],
    desc: "This iPhone 15 case features a magnetic O-ring stand holder for convenient hands-free use and is compatible with MagSafe charging. Offering military-grade drop protection and a non-slip grip, it’s ideal for both men and women. The brown shockproof cover ensures your phone stays safe and stylish."
  },
  {
    id: 35,
    category: "phone",
    name: "iPhone 15 Case: for iPhone 14 & iPhone 13 Case | iPhone 16e Case Support Magnetic Charging Military Grade Drop Protection Anti Yellowing | Rugged Shockproof Phone Cover - 6.1 inch (Clear)",
    img: "images/phone/4.jpg",
    imgs: [
      "images/phone/4.jpg",
      "images/phone/4.1.jpg",
      "images/phone/4.2.jpg",
      "images/phone/4.3.jpg"
    ],
    desc: "This rugged shockproof phone cover is compatible with iPhone 15, 14, 13, and 16e, supporting magnetic charging for convenience. Built with military-grade drop protection and anti-yellowing technology, it keeps your phone safe and clear. The 6.1-inch clear design preserves your device’s original look."
  },
  {
    id: 36,
    category: "phone",
    name: "iPhone 16 Pro Case Full-Body Phone with Built-in Glass Screen Protector, [Compatible with MagSafe] Military Drop Proof 16 Pro Cover Bumper 6.3 inch, Black",
    img: "images/phone/5.jpg",
    imgs: [
      "images/phone/5.jpg",
      "images/phone/5.1.jpg",
      "images/phone/5.2.jpg",
      "images/phone/5.3.jpg"
    ],
    desc: "The iPhone 16 Pro full-body case features a built-in glass screen protector and a durable bumper for complete protection. Compatible with MagSafe, it offers military-grade drop proof performance for your 6.3-inch device. The sleek black finish adds both style and security."
  },
  {
    id: 37,
    category: "phone",
    name: "64” Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder, Sturdy & Stable Height Adjustable Multi-Angle Shot Selfie Stick Tripod for Video Recording",
    img: "images/phone/6.jpg",
    imgs: [
      "images/phone/6.jpg",
      "images/phone/6.1.jpg",
      "images/phone/6.2.jpg",
      "images/phone/6.3.jpg"
    ],
    desc: "This 64-inch tripod is designed for both cell phones and cameras, offering a remote and adjustable phone holder. Its sturdy, stable structure allows for height adjustment and multi-angle shots, perfect for selfies and video recording. Ideal for creators seeking versatile shooting options."
  },
  {
    id: 38,
    category: "phone",
    name: "Cell Phone Stand Adjustable for iPhone Phone Holder for Desk, Office Desk Accessories Computer PC for iPhone Stand Gaming Essentials Fit Otterbox Case Phones Switch Kindle iPad Air Tablet 4-10in",
    img: "images/phone/7.jpg",
    imgs: [
      "images/phone/7.jpg",
      "images/phone/7.1.jpg",
      "images/phone/7.2.jpg",
      "images/phone/7.3.jpg"
    ],
    desc: "This adjustable cell phone stand is perfect for desks and office setups, supporting devices from 4 to 10 inches. Compatible with iPhones, tablets, Switch, and Kindle, even with Otterbox cases. It's a gaming essential and a practical accessory for work or entertainment."
  },
  {
    id: 39,
    category: "phone",
    name: "ChatStand Adjustable Cell Phone Stand for Desk & Video Recording, Rotating Cell Phone Holder for Desk for All iPhone, Samsung, Android, 9-14\" Face-Level Metal Desktop Tripod (Night Black)",
    img: "images/phone/8.jpg",
    imgs: [
      "images/phone/8.jpg",
      "images/phone/8.1.jpg",
      "images/phone/8.2.jpg",
      "images/phone/8.3.jpg"
    ],
    desc: "The ChatStand adjustable cell phone stand features a rotating holder and face-level height, ideal for video recording and desk use. Compatible with all iPhones, Samsung, and Android phones from 9 to 14 inches. Its metal construction and Night Black color provide stability and a premium look."
  },
  {
    id: 40,
    category: "phone",
    name: "Dual Folding Cell Phone Stand, Fully Adjustable Foldable Desktop Phone Holder Cradle Dock Compatible with Phone 16 15 14 13 12 11 Pro Xs Xs Max Xr X 8, Nintendo Switch, All Phones",
    img: "images/phone/9.jpg",
    imgs: [
      "images/phone/9.jpg",
      "images/phone/9.1.jpg",
      "images/phone/9.2.jpg",
      "images/phone/9.3.jpg"
    ],
    desc: "This dual folding cell phone stand is fully adjustable and foldable for maximum portability. It works with various phone models, including iPhone 16 down to 8, as well as Nintendo Switch. Perfect for hands-free viewing, gaming, or video calls on any device."
  },
  {
    id: 41,
    category: "phone",
    name: "Cell Phone Stand for Desk - [Height Adjustable] Foldable Mobile Phone Holder, Portable Stand for iPhone 16 15 14 13 12 11 Pro Max Plus, Galaxy S25 S24, All Cellphones, Office Accessories",
    img: "images/phone/10.jpg",
    imgs: [
      "images/phone/10.jpg",
      "images/phone/10.1.jpg",
      "images/phone/10.2.jpg",
      "images/phone/10.3.jpg"
    ],
    desc: "This height-adjustable, foldable mobile phone holder is designed for all major phone models, including iPhone and Galaxy series. It's portable and perfect for office desks, providing a comfortable viewing angle. Enhance your workspace with this versatile and convenient accessory."
  },
  {
    id: 42,
    category: "phone",
    name: "Cell Phone Stand for Desk - [360° Rotation] Sturdy Adjustable Desktop Phone Holder, Foldable Mobile Stand, Office Desk Accessories for iPhone 16 15 14 Pro Max, Galaxy S25 S24, All Phones",
    img: "images/phone/11.jpg",
    imgs: [
      "images/phone/11.jpg",
      "images/phone/11.1.jpg",
      "images/phone/11.2.jpg",
      "images/phone/11.3.jpg"
    ],
    desc: "Enjoy 360° rotation with this sturdy, adjustable desktop phone holder, suitable for iPhone, Galaxy, and all other phones. The foldable design makes it easy to carry and store, while its stable base ensures your device stays secure. A must-have accessory for any office desk."
  },
  {
  id: 43,
  category: "Home Appliances",
  name: "48 Can Beverage Refrigerator Cooler - Mini Fridge Glass Door for Beer Drinks Wines, Countertop Beverage Fridge with Adjustable Shelves Blue LED for Home/Office/Dorm/Bar, 1.3 cu.ft",
  img: "images/house/20.jpg",
  imgs: [
    "images/house/20.jpg",
    "images/house/20.1.jpg",
    "images/house/20.2.jpg",
    "images/house/20.3.jpg"
  ],
  desc: "Keep your favorite beverages perfectly chilled with this 48-can mini fridge featuring a sleek glass door and adjustable shelves. The compact design fits easily on countertops, making it ideal for home, office, dorm, or bar use. Blue LED lighting adds a modern touch, while the spacious 1.3 cu.ft capacity ensures you always have cold drinks ready."
},
{
  id: 44,
  category: "Home Appliances",
  name: "Compact Mini Fridge, 15 Can Portable Small Refrigerator with AC/DC Adapters, 10 Liter / 2.6 Gal Small Cosmetics Cooler for Beverage, Food, Skincare, Bedroom, Dorm, Office and Car, White",
  img: "images/house/21.jpg",
  imgs: [
    "images/house/21.jpg",
    "images/house/21.1.jpg",
    "images/house/21.2.jpg",
    "images/house/21.3.jpg"
  ],
  desc: "This compact mini fridge holds up to 15 cans and offers a 10-liter capacity, perfect for beverages, snacks, or skincare essentials. Equipped with both AC and DC adapters, it’s portable for use at home, in the office, or on the go in your car. Its sleek white design fits seamlessly into any space, providing reliable cooling wherever you need it."
},
{
  id: 45,
  category: "Home Appliances",
  name: "3 Drawer Outdoor Beverage Refrigerator 108 Can Cooler, 24'' Wine Fridge with Intelligent Control Advanced Compressor Under Counter Freestanding for Patio BBQ Beer Bar Cabinet Kitchen Gift",
  img: "images/house/22.jpg",
  imgs: [
    "images/house/22.jpg",
    "images/house/22.1.jpg",
    "images/house/22.2.jpg",
    "images/house/22.3.jpg"
  ],
  desc: "Store up to 108 cans with this spacious 3-drawer outdoor beverage refrigerator, featuring a 24-inch wine fridge and advanced compressor technology. Intelligent controls make temperature management easy, while the freestanding design is perfect for patios, BBQs, beer bars, or kitchen cabinets. A stylish and practical gift for any home entertainer."
},
{
  id: 46,
  category: "Home Appliances",
  name: "Beverage Refrigerator Cooler, 105 Can/3.0 Cubic Feet Mini Fridge with Glass Front Door, Digital Display Small Refrigerator with Adjustable Shelves for Soda, Beer or Wine",
  img: "images/house/23.jpg",
  imgs: [
    "images/house/23.jpg",
    "images/house/23.1.jpg",
    "images/house/23.2.jpg",
    "images/house/23.3.jpg"
  ],
  desc: "Chill up to 105 cans in this 3.0 cubic feet mini fridge with a stylish glass front door and digital display. Adjustable shelves allow for flexible storage of soda, beer, or wine, making it ideal for home, office, or dorm use. Its modern design and efficient cooling system ensure your drinks are always ready to serve."
},
{
  id: 47,
  category: "Home Appliances",
  name: "4 Liter/6 Can Mini Fridge Portable Cooler & Warmer Freon-Free Small Refrigerator Compact for Skincare, Beverage, Food, Cosmetics, 4L, Black",
  img: "images/house/24.jpg",
  imgs: [
    "images/house/24.jpg",
    "images/house/24.1.jpg",
    "images/house/24.2.jpg",
    "images/house/24.3.jpg"
  ],
  desc: "This 4-liter mini fridge is perfect for keeping beverages, snacks, or cosmetics cool or warm, thanks to its dual function. Freon-free and eco-friendly, the compact black design fits easily on any shelf or desk. Ideal for skincare, food, or travel, it’s a versatile solution for your daily needs at home or on the go."
},
{
  id: 48,
  category: "Home Appliances",
  name: "High-Speed Portable Clothes Dryer, Portable Dryer for Apartment, Travel, RV - Premium Mini 1000w Dryer Machine for Light Clothes, Underwear with Dry Bag, Hook, Perfect for Travelers, Housewarming",
  img: "images/house/25.jpg",
  imgs: [
    "images/house/25.jpg",
    "images/house/25.1.jpg",
    "images/house/25.2.jpg",
    "images/house/25.3.jpg"
  ],
  desc: "Experience quick and efficient drying with this high-speed portable clothes dryer, designed for apartments, travel, and RV living. The premium 1000W dryer is perfect for light clothes and underwear, featuring a dry bag and hook for added convenience. Compact and easy to use, it’s an ideal choice for travelers and thoughtful housewarming gifts."
},
{
  id: 49,
  category: "Home Appliances",
  name: "Portable Clothes Dryer - Mini Portable Dryer Machine for Laundry Apartments and Travelling, Hotel Room",
  img: "images/house/26.jpg",
  imgs: [
    "images/house/26.jpg",
    "images/house/26.1.jpg",
    "images/house/26.2.jpg",
    "images/house/26.3.jpg"
  ],
  desc: "This mini portable clothes dryer is the perfect solution for laundry needs in apartments, hotel rooms, and during travel. Its lightweight and compact design makes it easy to carry and store, while providing reliable drying performance. Enjoy fresh, dry clothes wherever you go, without the hassle of traditional drying methods."
},
{
  id: 50,
  category: "Home Appliances",
  name: "Portable Clothes Dryer，Mini Laundry Dryers with Remote Control, Small Compact Foldable Electric Drying Machine with Dry Bag for Travel,RV, Home,Apartment",
  img: "images/house/27.jpg",
  imgs: [
    "images/house/27.jpg",
    "images/house/27.1.jpg",
    "images/house/27.2.jpg",
    "images/house/27.3.jpg"
  ],
  desc: "Upgrade your laundry routine with this portable clothes dryer featuring remote control and a foldable design. The compact electric drying machine comes with a dry bag, making it ideal for travel, RVs, homes, and apartments. Enjoy effortless drying for your clothes anytime, anywhere, with maximum convenience."
},
{
  id: 51,
  category: "Home Appliances",
  name: "Portable Dryer, 110V 1000W Electric Clothes Dryer Machine, Double Layer Stackable, Stainless Steel, Blue, 15kg Capacity, Front Load, Ideal for Apartments, RV, Families, Campers",
  img: "images/house/28.jpg",
  imgs: [
    "images/house/28.jpg",
    "images/house/28.1.jpg",
    "images/house/28.2.jpg",
    "images/house/28.3.jpg"
  ],
  desc: "This 110V 1000W electric clothes dryer offers double-layer stackable drying and a spacious 15kg capacity, perfect for apartments, RVs, families, and campers. The stainless steel construction ensures durability, while the front-load design makes it easy to use. Its vibrant blue finish adds a modern touch to any laundry space."
},
{
  id: 52,
  category: "Home Appliances",
  name: "Portable Clothes Dryers, Mini Laundry Dryers with Timer Function & Dry Bag, Easy to Use Multiple Compact Dryer for Clothes, for Travel, Apartment, RV, Dorm, for Light Clothes, Underwear, Baby Clothes",
  img: "images/house/29.jpg",
  imgs: [
    "images/house/29.jpg",
    "images/house/29.1.jpg",
    "images/house/29.2.jpg",
    "images/house/29.3.jpg"
  ],
  desc: "Simplify your laundry with this mini portable clothes dryer featuring a timer function and included dry bag. Designed for light clothes, underwear, and baby clothes, it’s perfect for travel, apartments, RVs, and dorms. Multiple compact dryers make it easy to keep your garments fresh and dry wherever you are."
}
]