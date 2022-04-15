import React, { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted == true) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
                console.log("Xuất ra dữ liệu đi")
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    };

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='snip1582'>Tất cả</button>
                    <button className='snip1582'>Hot</button>
                    <button className='snip1582'>Nổi bật</button>
                </div>
                {filter.map((product)=>{
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,11)}...</h5>
                                            <p className="card-text">${product.price}</p>
                                            <a href="#" className="snip0059 yellow">Mua ngay</a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>
                            NFT mới nhất
                            <hr />
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products;