import { log10 } from "chart.js/helpers"
import { useParams } from "react-router-dom"


function ProductDetails(){
    const params = useParams()
    console.log(params);
    

    return (
        <h1>ProductDetails page</h1>
    )
}

export default ProductDetails