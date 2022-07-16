import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import {storage} from '../../../firebase';
import { v4 } from "uuid";

const initialFormData = {
    supplier_name: "",
    image: "",
};

const AddSupplier = () => {
    const [formData, setFormData] = useState(initialFormData);

    const [uploadImage, setUploadImage] = useState({
        image: null,
        url: '',
        progress: 0
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === "image") {
            if (e.target.files[0]) {
                const image = e.target.files[0];
                setUploadImage({
                    ...uploadImage,
                    image: image,
                });
                return;
            }
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const token = window.localStorage.getItem("token");

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const getUrl = () => {
                return new Promise((resolve, reject) => {
                    const {image} = uploadImage;
                    if (image == null) return;
                    const imageRef = ref(storage, `images/${image.name + v4()}`);
                    uploadBytes(imageRef, image).then((snapshot) => {
                        getDownloadURL(snapshot.ref).then((url) => {
                            resolve(url)
                        });
                    });
                })
            }
            
            const url = await getUrl();

            if (token) {
                const res = await axios.post(
                    "https://khoi-hi-vong.herokuapp.com/api/supplier/new",
                    {
                        ...formData,
                        image: url
                    },
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );
                alert(res.data.message);
                setFormData({
                    supplier_name: "",
                    image: "",
                });
            }
        } catch (err) {
            alert(err.response.data.message);
            console.log(err);
        }
    };

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
                                <label htmlFor="supplier_name">
                                    Tên nhà tài trợ
                                </label>
                                <input
                                    type="text"
                                    name="supplier_name"
                                    className="form-control"
                                    placeholder="Nhập tên nhà tài trợ"
                                    value={formData.supplier_name}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Logo nhà tài trợ</label>
                            <input
                                name="image"
                                required
                                type="file"
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        Thêm nhà tài trợ
                    </button>
                </div>
            </form>
        </>
    );
};
export default AddSupplier;
