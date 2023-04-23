import { useState } from "react";
import styled from "styled-components";

const initialState = {
    name : "",
    image : "",
    brand : "",
    price : "",
    category : "",
    gender : ""
};

export function Admin(){
    const [product,setProduct] = useState(initialState);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setProduct((prev)=>{
            return {...prev, [name]:value};
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        console.log(product);
        setProduct(initialState);
    }

    return (
        <DIV>
            <form onSubmit={handleSubmit}>
                <h1>Add Product</h1>
                <input type="text" name="name" value={product.name} placeholder="Product Name" onChange={handleChange}/>
                <input type="text" name="image" value={product.image} placeholder="Product Image" onChange={handleChange}/>
                <input type="text" name="brand" value={product.brand} placeholder="Product Brand" onChange={handleChange}/>
                <input type="text" name="price" value={product.price} placeholder="Price" onChange={handleChange}/>
                <select name="category" value={product.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="top-wear">Top Wear</option>
                    <option value="bottom-wear">Bottom Wear</option>
                    <option value="shoes">Shoes</option>
                </select>
                <select name="gender" value={product.gender} className="gender-select" onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <button type="submit">Add Product</button>
            </form>
        </DIV>
    )
}


const DIV = styled.div`
    width: 400px;
    margin: auto;
    border: 1px solid black;
    padding: 40px;

    form{
        display:flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    input{
        height:30px;
        font-size: larger;
        width: 100%;
    }

    select{
        height:30px;
        font-size: large;
        width: 100%;
    }

    button{
        width:50%;
        height:30px;
        cursor: pointer;
        border:none;
    }
`;