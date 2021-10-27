import React from "react";

export const AddProduct = () => {
  return(
      <div className='container'>
            <br />
            <h2> Add Products </h2>
            <hr/>
            <form auroComplete="off" classNmae='form-group' >
                <label htmlFor="product-name">Product name</label>
                <br/>
                <input type="text" className='form-control' required /> 
                <label htmlFor="product-price">Product Price</label>
                <br/>
                <input type="number" className='form-control' required /> 
                <label htmlFor="product-name">Product name</label>
                <br/>
                <input type="file" /> 
                <br />
                <button className="btn btn-success btn-md">ADD</button>
            </form>

        </div>
  ) 
};
