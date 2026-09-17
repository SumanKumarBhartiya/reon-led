import { useEffect, useState } from "react";
import { galleryImages } from "../../public/assets/images";
import "../components/ImageGallery.css";

export default function ProductGallery() {
    return (
        <div className="product-grid">
            <div>kaubfouagsbfo</div>

            {galleryImages.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    );
}


function ProductCard({ product }: { product: any }) {

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setImageIndex((current) => {

                const next = current + 2;

                return next >= product.productImages.length
                    ? 0
                    : next;

            });

        }, 2000);

        return () => clearInterval(interval);

    }, [product.productImages.length]);


    const image1 = product.productImages[imageIndex];

    const image2 =
        product.productImages[
        (imageIndex + 1) % product.productImages.length
        ];


    return (
        <div className="product-card">

            {/* Background */}
            <img
                src={product.background}
                className="product-background"
                alt=""
            />


            {/* Foreground products */}
            <div className="product-images">

                <img
                    key={`${image1}-1`}
                    src={image1}
                    className="product-image-1 product-image"
                    alt={product.title}
                />

                <img
                    key={`${image2}-2`}
                    src={image2}
                    className="product-image-2 product-image"
                    alt={product.title}
                />

            </div>


            {/* Information */}
            {/* <div className="product-info">
        <h3>{product.title}</h3>
      </div> */}

        </div>
    );
}