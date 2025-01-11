
export default function Product({params} : {
params: {productId : string}
}){
    return (
        <>
            <h1>Product Details {params.productId}</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus doloremque excepturi officiis. Dolorum veritatis ad beatae necessitatibus. Quam, asperiores?
        </>
    )
}