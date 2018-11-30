const source = [
    {
      "title": "NBA Live 18",
      "description": "XBOX One",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61THT8eC26L._SL150_.jpg",
      "price": "$55.62"
    },
    {
      "title": "BOSE QC 35",
      "description": "Bose headphones",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51VjLdXPp-L._AA320_FMwebp_QL65_.jpg",
      "price": "$123.58"
    },
    {
      "title": "Iphone X",
      "description": "64 GB IPhone X",
      "image": "https://multimedia.bbycastatic.ca/multimedia/products/500x500/115/11537/11537398.jpg",
      "price": "$62.29"
    },
    {
      "title": "Samsung SSD",
      "category": "computers",
      "link": "http://bestbuy.com/ssd",
      "description": "500GB Samsung Solid State Drive",
      "image": "https://multimedia.bbycastatic.ca/multimedia/products/150x150/123/12370/12370881.jpg",
      "price": "$35.32"
    },
	{
      "title": "iPad Pro 11inch",
      "category": "computers",
      "link": "https://www.apple.com/ca/shop/buy-ipad/ipad-pro/11-inch-display-64gb-space-grey-wifi",
      "description": "iPad Pro 11inch 64GB in Silver or Space Grey",
      "image": "https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-11-select-wifi-spacegray-201810_GEO_CA?wid=470&hei=556&fmt=png-alpha&.v=1540591838758",
      "price": "$999.00"
    },
	{
      "title": "Mac Mini",
      "category": "computers",
      "link": "https://www.apple.com/ca/shop/buy-mac/mac-mini/3.6ghz-quad-core-processor-128gb",
      "description": "Mac mini with 8th Generation Intel Core i3 Processor, 8GB RAM, 128GB SSD and macOS ",
      "image": "https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/mini/mac-mini-hero-201810?wid=452&hei=158&fmt=jpeg&qlt=95&.v=1541713854402",
      "price": "$999.00"
    },
	{
      "title": "MacBook Air",
      "category": "computers",
      "link": "https://www.apple.com/ca/shop/buy-mac/macbook-air/space-grey-1.6ghz-dual-core-processor-with-turbo-boost-up-to-3.6ghz-128gb",
      "description": "MacBook Air 13.3 with Touch ID, 8th Generation Intel Core i5 Processor, 8GB RAM, 128GB SSD and macOS ",
      "image": "https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/air/macbook-air-space-gray-config-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1539386809517",
      "price": "$1499.00"
    },
	{
      "title": "Hot Wheels Ultimate Garage",
      "category": "toys",
      "link": "https://www.walmart.ca/en/ip/hot-wheels-ultimate-garage/6000198069689?cmpid=affiliate_rakuten_en_none_none&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliate_rakuten_en_none_none&utm_content=10&siteID=CAqD7bLWUPI-7Rwp_HJ3uWkOporDfLUoVg&wmlspartner=CAqD7bLWUPI",
      "description": "Hot Wheels Ultimate Garage Ultimate Playset ",
      "image": "https://i5.walmartimages.ca/images/Large/462/627/6000198462627.jpg",
      "price": "$119.97"
    },{
      "title": "Roku 4k Smart TV",
      "category": "electronics",
      "link": "https://www.walmart.ca/en/ip/rca-55-roku-smart-4k-tv-hdr-10/6000197413731?cmpid=affiliate_rakuten_en_none_none&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliate_rakuten_en_none_none&utm_content=10&siteID=CAqD7bLWUPI-hSZB_1FEknvXbmDLRTDOnA&wmlspartner=CAqD7bLWUPI",
      "description": "RCA 55inch Roku Smart 4K TV, HDR 10",
      "image": "https://i5.walmartimages.ca/images/Large/646/631/6000197646631.jpg",
      "price": "$498.00"
    },
	{
      "title": "Mario Kart Monopoly",
      "category": "toy",
      "link": "https://www.walmart.ca/en/ip/hasbro-gaming-monopoly-gamer-mario-kart/6000198046991?cmpid=affiliate_rakuten_en_none_none&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliate_rakuten_en_none_none&utm_content=10&siteID=CAqD7bLWUPI-RU.JT9WA2Cxxnky0dgBMvg&wmlspartner=CAqD7bLWUPI",
      "description": "Hasbro Gaming Monopoly Mario Kart Board Game",
      "image": "https://i5.walmartimages.ca/images/Large/282/513/6000198282513.jpg",
      "price": "$29.93"
    },{
      "title": "JBL In Ear Headphones",
      "category": "electronics",
      "link": "https://www.walmart.ca/en/ip/jbl-t110bt-wireless-in-ear-headphones-white/6000197451199?cmpid=affiliate_rakuten_en_none_none&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliate_rakuten_en_none_none&utm_content=10&siteID=CAqD7bLWUPI-KUjohEkSIZ5UBSbJFGpX_A&wmlspartner=CAqD7bLWUPI",
      "description": "JBL Wireless Headphones",
      "image": "https://i5.walmartimages.ca/images/Large/852/3_1/999999-050036338523_1.jpg?odnBound=460",
      "price": "$49.98"
    },{
      "title": "Seagate 2TB SATA Hard Drive",
      "category": "computers",
      "link": "https://www.canadacomputers.com/product_info.php?cPath=15_1086_210_212&item_id=098711",
      "description": "Seagate BarraCuda 2TB SATA 3.5'' Desktop Hard Drives (ST2000DM006)",
      "image": "https://ccimg.canadacomputers.com/Products/600x600/098/098711/49034.jpg",
      "price": "$69.99"
    },{
      "title": "Western Digital 1TB SSD",
      "category": "computers",
      "link": "https://www.canadacomputers.com/product_info.php?cPath=179_1229_1088&item_id=114570",
      "description": "WD Blue™ 3D NAND SATAIII SSD, 1TB Read: 560MB/s; Write: 530MB/s (WDS100T2B0A)",
      "image": "https://ccimg.canadacomputers.com/Products/600x600/707/733/114570/41701.jpg",
      "price": "$179.99"
    },{
      "title": "Epson All-In-One Printer",
      "category": "computers",
      "link": "https://www.canadacomputers.com/product_info.php?cPath=34_1170_458&item_id=123099",
      "description": "Epson WorkForce Pro WF-3720 All-in-One Printer Print / Copy / Scan / Fax 4-Colour DURABrite Ultra Pigment Ink 10 ISO PPM 250-sheet Paper Tray USB/Ethernet/Wi-Fi Connectivity",
      "image": "https://ccimg.canadacomputers.com/Products/600x600/94/598/123099/27010.jpg",
      "price": "$89.99"
    },{
      "title": "Logitech Mouse and Keyboard Combo",
      "category": "computers",
      "link": "https://www.canadacomputers.com/product_info.php?cPath=21_273_581&item_id=120221",
      "description": "Logitech MK540 Advanced WIRELESS Keyboard MOUSE COMBO (920-008671)",
      "image": "https://ccimg.canadacomputers.com/Products/600x600/276/116/120221/58276.jpg",
      "price": "$59.99"
    },{
      "title": "Staples Leather Office Chair",
      "category": "office",
      "link": "https://www.staples.ca/en/Staples-Mid-Back-Bonded-Leather-Manager-s-Chair/product_917746_1-CA_1_20001",
      "description": "Staples Mid-Back Bonded-Leather Manager's Chair",
      "image": "https://www.staples-3p.com/s7/is/image/Staples/s0422431_sc7?$splssku$",
      "price": "$97.95"
    },{
      "title": "Staples Mesh Office Chair",
      "category": "office",
      "link": "https://www.staples.ca/en/Staples-Mesh-Task-Chair-Black/product_394403_1-CA_1_20001",
      "description": "Staples Mesh Task Chair, Black,  Item: 394403",
      "image": "https://www.staples-3p.com/s7/is/image/Staples/m000520202_sc7?$splssku$",
      "price": "$97.95"
    },{
      "title": "Epson Projector",
      "category": "office",
      "link": "https://www.staples.ca/en/epson-ex9220-pro-wireless-1080p-wuxga-3lcd-projector-v11h846020-f/product_2802108_1-CA_1_20001",
      "description": "Epson EX9220 Pro Wireless 1080p+/WUXGA 3LCD Projector (V11H846020-F)",
      "image": "https://www.staples-3p.com/s7/is/image/Staples/m006769225_sc7?$splssku$",
      "price": "$899.99"
    },{
      "title": "Asus 17.3inch Gaming Laptop",
      "category": "computers",
      "link": "https://www.staples.ca/en/asus-gl-series-gl703vd-rs71-cb-17-3-inch-notebook-2-8-ghz-intel-core-i7-7700hq-1-tb-sshd-16-gb-ddr4-windows-10-home/product_2868639_1-CA_1_20001",
      "description": "Asus GL Series GL703VD-RS71-CB 17.3-inch Notebook, 2.8 GHz Intel Core i7-7700HQ, 1 TB SSHD, 16 GB DDR4, Windows 10 Home",
      "image": "https://www.staples-3p.com/s7/is/image/Staples/m007032140_sc7?$splssku$",
      "price": "$1399.99"
    },{
      "title": "Staples Power Strip",
      "category": "office",
      "link": "https://www.staples.ca/en/Staples-6-Outlet-Grounded-Power-Strip-15-Cord-White/product_977954_1-CA_1_20001",
      "description": "Staples® 6-Outlet Grounded Power Strip, 15' Cord, White",
      "image": "https://www.staples-3p.com/s7/is/image/Staples/s0343256_sc7?$splssku$",
      "price": "$10.00"
    },

  ]

  export default source;
