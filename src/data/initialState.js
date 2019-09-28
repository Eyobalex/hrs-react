export const initialState = {
    users :{
        isLoading: false,
        errors : [],
        users :[
        {
            id : 1,
            name : 'John Doe',
            email : 'john@doe.io',
            password : '1234',
            image : 'assets/img/m1.jpg',
            role : 'lessor'
        },
        {
            id : 2,
            name : 'Jane Doe',
            email : 'jane@doe.io',
            password : '1234',
            image : 'assets/img/f1.jpg',
            role : 'subtenant'
        },
        {
            id : 1,
            name : 'Jannee Doe',
            email : 'janne@doe.io',
            password : '1234',
            image : 'assets/img/m1.jpg',
            role : 'admin'
        },
    ]},
    listings : {
        isLoading : false,
        errors : [],
        listings : [
            {
                id : 1,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b5.jpg"
            },
            {
                id : 2,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b4.jpg"
            },
            {
                id : 3,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b1.jpg"
            },
            {
                id : 4,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b1.jpg"
            },
            {
                id : 5,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b1.jpg"
            },
            {
                id : 6,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b1.jpg"
            },
            {
                id : 6,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : true,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b1.jpg"
            },
            {
                id : 7,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b6.jpg"
            },
            {
                id : 8,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b7.jpg"
            },
            {
                id : 9,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b8.jpg"
            },
            {
                id : 10,
                title : "3 Bedroom Apartment",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet commodi deserunt dolore doloremque dolorum explicabo fuga hic minima molestias, nam non provident quia quod rerum sed suscipit tenetur voluptatum?",
                featured : false,
                date : "2012-10-16T17:57:28.556094Z",
                price: "2322",
                ownerId : 2,
                image : "/assets/img/b1.jpg"
            },
        ]
    },
    services : {
        isLoading : false,
        errors : [],
        services : [
            {
                id : 1,
                title : " 24/7 customer service",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque, deserunt ea earum incidunt molestiae molestias provident quas quidem quis, quisquam quo, rerum sapiente suscipit tenetur velit voluptates. Facilis, nihil!",
                featured : true
            },
            {
                id : 2,
                title : "Lorem ipsum dolor.",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque, deserunt ea earum incidunt molestiae molestias provident quas quidem quis, quisquam quo, rerum sapiente suscipit tenetur velit voluptates. Facilis, nihil!",
                featured : false
            },
            {
                id : 3,
                title : "Lorem ipsum dolor.",
                description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque, deserunt ea earum incidunt molestiae molestias provident quas quidem quis, quisquam quo, rerum sapiente suscipit tenetur velit voluptates. Facilis, nihil!",
                featured : false
            },
        ]
    },
    testimonials : {
        isLoading : false,
        errors : [],
        testimonials: [
            {
                id : 1,
                name : "Lorem ipsum",
                testimonial : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa doloremque enim, esse facere iste iure nesciunt quae quibusdam quidem quis, ratione reiciendis soluta temporibus vero. Alias in mollitia ullam.",
                image : '/assets/img/m1.jpg',
                featured : true
            },
            {
                id : 2,
                name : "Lorem ipsum",
                testimonial : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa doloremque enim, esse facere iste iure nesciunt quae quibusdam quidem quis, ratione reiciendis soluta temporibus vero. Alias in mollitia ullam.",
                image : '/assets/img/g2.jpg',
                featured : false
            },
            {
                id : 3,
                name : "Lorem ipsum",
                testimonial : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa doloremque enim, esse facere iste iure nesciunt quae quibusdam quidem quis, ratione reiciendis soluta temporibus vero. Alias in mollitia ullam.",
                image : '/assets/img/g1.jpg',
                featured : false
            },


        ]
    }
};