import React,{useState} from "react";
import {storage,db} from '../config/Config'
import { uploadBytesResumable, ref } from "@firebase/storage";
import 'firebase/storage';

export const AddProduct = () => {

  const[productName,setProductName]=useState('')
  const[productPrice,setProductPrice]=useState(0)
  const[productImg,setProductImg]=useState(null)
  const[error,setError]=useState('')

  const types=['image/png','image/jpeg']//image types

  //product image handler
  const productImgeHandler=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type))
    {
      setProductImg(selectedFile);
      setError('');
    }
    else{
      setProductImg(null);
      setError('Please select a valid image type png or jpeg');
    }
  }



  const addProduct = (e) => {
    e.preventDefault();
    // console.log(productName, productPrice, productImg);

    //storing the image
    const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg)
    uploadTask.on('state_changed',snapshot=>{
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log(progress)
    },err=>{setError(err.message)},
    ()=>{
      //getting product url and if success then storing the product in db
      storage.ref('product-images').child(productImg.name).getDownloadURL().then(url=>{
        db.collection('Products').add({
          ProductName:productName,
          ProductPrice:Number(productPrice),
          ProductImg:url
        })
      })
      .then(()=>{
        setProductName('');
        setProductPrice(0);
        setProductImg('');
        setError('');
        document.getElementById('file').value='';

      })
      .catch(err=>setError(err.message))
    })
  

  }

  return(
      <div className='container'>
            <br />
            <h2> Add Products </h2>
            <hr/>
            <form auroComplete="off" classNmae='form-group' onSubmit={addProduct} >
                <label htmlFor="product-name">Product name</label>
                <br/>
                <input type="text" onChange={(e)=>setProductName(e.target.value)} className='form-control' required /> 
                <br />
                <label htmlFor="product-price">Product Price</label>
                <br/>
                <input type="number" onChange={(e)=>setProductPrice(e.target.value)} className='form-control' required />
                <br /> 
                <label htmlFor="product-img">Product Image</label>
                <br/>
                <input type="file"  className="from-control" onChange={productImgeHandler} id='file' /> 
                <br />
                <br />
                <button className="btn btn-success btn-md mybtn">ADD</button>
                {error && <span>{error}</span>}
            </form>

        </div>
  ) 
};
