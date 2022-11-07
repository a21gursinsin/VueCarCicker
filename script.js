var app = new Vue({
    el: '#car-list',
    data: {
        carActive : 0,
        cars: [
            {
                clickCount: 0,
                name: 'Jeep Wrangler Rubicon',
                imgSrc: 'https://cdn.motor1.com/images/mgl/LZbwQ/s1/2021-jeep-wrangler-rubicon-392-front-view.webp',
                imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568'
            },
            {
                clickCount: 0,
                name: 'Ford Ranger',
                imgSrc: 'https://www.wallpaperflash.id/wallpaper/wallpaper/20220423/ford-raptor-desktop-wallpaper-ford-ranger-raptor-modified-wallpaper-preview.webp',
                imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904'
            },
            {
                clickCount: 0,
                name: 'Mercedes-AMG G 63',
                imgSrc: 'https://images2.alphacoders.com/105/thumb-1920-1058423.jpg',
                imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709'
            },
            {
                clickCount: 0,
                name: 'BMW X6',
                imgSrc: 'https://cdn-images.motor.es/image/m/800w/fotos-noticias/2019/10/bmw-x6-m-2020-201961291-1570009121_1.jpg',
                imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559'
            },
            {
                clickCount: 0,
                name: 'Audi A7',
                imgSrc: 'https://wallpaperaccess.com/full/3659174.jpg',
                imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288'
            }
        ]
    },
    methods: {
        carActual: function (index) {
            this.carActive = index;
            console.log(this.carActive);
        },
        contador: function() {
            this.cars[this.carActive].clickCount++;
        }

        

    }
})