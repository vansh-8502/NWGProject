import React from "react";
import "./Home.css";
import Product from "./Product";
//https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg
function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://thumbs.dreamstime.com/b/interior-h-m-fashion-clothes-store-lugano-switzerland-july-mall-lugano-switzerland-62387556.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        //Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
                        title="Men Light Blue Designer Free Style Casual Tshirt"
                        price={899}
                        rating={5}
                        //https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg
                        image="https://img3.junaroad.com/uiproducts/17927210/pri_175_p-1629181577.jpg"
                    />
                    <Product
                        id="49538094"
                        //IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)
                        title="Ladies Pure Cotton Party Wear Long Length Suits"
                        price={3200}
                        rating={4}
                        //https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg
                        image="https://assets.ajio.com/medias/sys_master/root/20220318/HBSV/62342213aeb26921afe285ca/glam_roots_blue_indian_fit_and_flare__dress.jpg"
                    />
                    <Product
                        id="99938094"
                        //IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)
                        title="Men Black Coloured Sports TrackSuit"
                        price={2850}
                        rating={4}
                        //https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg
                        image="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/images/style/properties/Adidas-Men-Tracksuits_129e54032148b37f7362c367cae4d598_images.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        //All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback
                        title="Men Maroon Coloured 100% Pure Cotton Tshirt"
                        price={999}
                        rating={3}
                        //https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg
                        image="https://cdn.shopify.com/s/files/1/0094/0716/8559/products/1_d1146b90-7974-4436-a01f-9e7bed46bbfe_600x.jpg?v=1620556757"
                    />
                    <Product
                        id="23445930"
                        //Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric
                        title="Women Dark Coloured Solid Denim Jacket"
                        price={1750}
                        rating={5}
                        //https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$
                        image="https://rukminim1.flixcart.com/image/332/398/ku5ufm80/jacket/j/0/y/xxl-1-no-mntnw-4023-montrez-original-imag7cp8ggyzn5by.jpeg?q=50"
                    />
                    <Product
                        id="3254354345"
                        //New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)
                        title="Men Light Brown Solid Bomber Jacket"
                        price={1300}
                        rating={4}
                        //https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg
                        image="https://n2.sdlcdn.com/imgs/k/i/d/Raa-Jeans-Denim-Slim-Fit-SDL505333580-1-4ac61.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        //Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440
                        title="Set of 5 Ethic Wear Kurta Pyjama For Men"
                        price={7999}
                        rating={4}
                        //https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg
                        image="https://www.yourdesignerwear.com/pub/media/mageplaza/blog/post/m/e/mens-indian-ethnicwear-styles.jpg"
                    />
                     <Product
                        id="90829332"
                        //Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440
                        title="Women Set of 6 Designer Cotton Kurtis"
                        price={9999}
                        rating={4}
                        //https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg
                        image="https://rukminim1.flixcart.com/image/714/857/kjswia80/kurta/l/i/w/m-combo-pack-of-6-kurti-for-women-girls-maruti-fab-original-imafzasayg4ct94s.jpeg?q=50"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home
