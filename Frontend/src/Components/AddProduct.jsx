import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { showAddForm, addNewProduct } from '../Features/productsSlice'

function AddProduct() {
    const dispatch = useDispatch()

    const [nameErr, setNameErr] = useState(false)
    const [descErr, setDescErr] = useState(false)
    const [imageErr, setImageErr] = useState(false)
    const [priceErr, setPriceErr] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    const nameRef = useRef(null)
    const descRef = useRef(null)
    const imageRef = useRef(null)
    const priceRef = useRef(null)
    const discRateRef = useRef(0)

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (nameRef.current.value.trim() === '') setNameErr(true)
        if (descRef.current.value.trim() === '') setDescErr(true)
        if (priceRef.current.value.trim() === '') setPriceErr(true)
        if (imageRef.current.value.trim() === '') setImageErr(true)

        if (nameRef.current.value.trim() && descRef.current.value.trim() && priceRef.current.value.trim() && imageRef.current.value.trim()) {
            const newProduct = {
                id: v4(),
                name: nameRef.current.value,
                description: descRef.current.value,
                price: priceRef.current.value,
                image_url: imageRef.current.value,
                discount_rate: discRateRef.current.value,
            }
            console.log(newProduct);
            dispatch(addNewProduct(newProduct))
            setSuccessMsg(true)
            setTimeout(() => {
                setSuccessMsg(false)
                dispatch(showAddForm(false))
            }, 1500)
        }
    }

    return (
        <div className="container">
            <div className='frmDiv'>
                <form>
                    <h2><u>Add Product</u></h2>
                    {successMsg ? <p className="formSuccess" id='nameErr'>Data Added Successfully!</p> : <></>}
                    {nameErr ? <p className="formErr" id='nameErr'>Kindly insert the title!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemTitle">Name:</label>
                        <input ref={nameRef} type="text" name='itemTitle' />
                    </div>
                    {descErr ? <p className="formErr" id='descErr'>Kindly insert product's description!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemDesc">Description:</label>
                        <input ref={descRef} type="text" name='itemDesc' />
                    </div>
                    {priceErr ? <p className="formErr" id='priceErr'>The price is required!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemPrice">Price:</label>
                        <input ref={priceRef} type="text" name='itemPrice' />
                    </div>
                    {imageErr ? <p className="formErr" id='imageErr'>The image url is required!</p> : <></>}
                    <div className="form-element">
                        <label htmlFor="itemImage">Image URL:</label>
                        <input ref={imageRef} type="text" name='itemImage' />
                    </div>
                    <div className="form-element">
                        <label htmlFor="itemDiscount">Discount %:</label>
                        <input ref={discRateRef} type="text" name='itemDiscount' />
                    </div>
                    <div className="formBtns">
                        <button onClick={() => { dispatch(showAddForm(false)) }}>Cancel</button>
                        <button className='resetBtn' type='reset'>Reset</button>
                        <button className='submitBtn' onClick={handleOnSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct