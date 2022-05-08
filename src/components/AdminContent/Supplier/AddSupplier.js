import React, { useState, useEffect } from "react";
import axios from "axios";
import FileBase from 'react-file-base64';

const initialFormData = {
    supplier_name: "",
    image: "",
};

const AddSupplier = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleOnSubmit = async (e) => {

        e.preventDefault();
    
        axios.post("https://adventure-charity.herokuapp.com/api/supplier/new", formData)
    };

    const getBase64OfImage = (base64) => (
        base64
    )

  return (
    <>
        <div className="card-header">
            <h3 className="card-title">Thêm nhà tài trợ</h3>
        </div>
        <form onSubmit={handleOnSubmit}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="supplier_name">Tên nhà tài trợ</label>
                            <input type="text" name="supplier_name" className="form-control"  placeholder="Nhập tên nhà tài trợ" value={formData.supplier_name}
                            onChange={handleOnChange} required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Logo nhà tài trợ</label>
                        <FileBase
                            required
                            type="file"
                            mutiple={false}
                            onDone={({base64}) => setFormData({
                                ...formData, image: getBase64OfImage(base64), 
                            })}
                        />
                    </div>
                </div>              
            </div>

            <div className="card-footer">
                <button type="submit" className="btn btn-primary">Thêm nhà tài trợ</button>
            </div>
        </form>
    </>
  );
};
export default AddSupplier;
