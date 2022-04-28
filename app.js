let lists = [
    {'id':1,'name':'GC82C', 'img':'images/image-000.png','type':'Classical Guitar', 'price':9500, 'brand':'YAMAHA' , 'color':'YAMAHA'},
    {'id':2,'name':'PAC1611MS', 'img':'images/image-001.png', 'type':'Electric Guitar', 'price':1900, 'brand':'YAMAHA', 'color':'YAMAHA'},
    {'id':3,'name':'1962 Jazzmaster', 'img':'images/image-002.png', 'type':'Electric Guitar', 'price':12000, 'brand':'Fender', 'color':'Fender'},
    {'id':4,'name':'Precision Bass', 'img':'images/image-003.png', 'type':'Bass Guitar', 'price':4000, 'brand':'Fender', 'color':'Fender'},
    {'id':5,'name':'M80', 'img':'images/image-004.png', 'type':'Acoustic Guitar', 'price':7000, 'brand':'Maton', 'color':'Maton'},
    {'id':6,'name':'EM100C', 'img':'images/image-005.png', 'type':'Acoustic Guitar', 'price':4000, 'brand':'Maton', 'color':'Maton'},
]


let app = new Vue({
    el:"#app",
    data:{

        instruments:lists,
        carts:[],
        isEmpty:true,
        isForm:true,
        name:null,
        brand:null,
        type:null

    },

    methods:{

        addToCart(instrument){

            this.carts.push({
                id:instrument.id,
                name:instrument.name,
                img:instrument.img,
                type:instrument.type,
                price:instrument.price,
                brand:instrument.brand,
                color:instrument.color
            });
            const findItem = this.instruments.findIndex(item => item.id == instrument.id);
            this.instruments.splice(findItem, 1);
            if(this.instruments.length === 0)
            {
                this.isEmpty = false;
            }
        },
        emptyCart(){
            this.carts.forEach(instrument=>{
                this.instruments.push({
                    id:instrument.id,
                    name:instrument.name,
                    img:instrument.img,
                    type:instrument.type,
                    price:instrument.price,
                    brand:instrument.brand,
                    color:instrument.color
                })
            })
            this.carts = [];
            this.isEmpty = true;

        },
        showForm()
        {
            this.isForm = ! this.isForm;
        },
        submitForm(){
            this.instruments.push({
                id:this.instruments.length + 1,
                name:this.name,
                img : 'images/no-image.jpg',
                brand:this.brand,
                type:this.type,
                color:this.brand
            })
        }

    }
})