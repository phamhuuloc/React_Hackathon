import React, { useState, useEffect } from "react";
import axios from "axios";

const AddReceiver = () => {
    const [data, setData] = useState({
        title: "",
        content: "",
        max_money: 0,
    });

    const [uploadImage, setUploadImage] = useState({
        image: null,
    });
    
    const addReceiver = async (e) => {
        e.preventDefault();
        
        try {
            const token = window.localStorage.getItem("token");
            
            if (token) {
                const res = await axios.post(
                    "https://khoi-hi-vong.herokuapp.com/api/admin/receiver",
                    {
                        ...data,
                        image: uploadImage
                    },
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );
                alert(res.data.message);
            }
            setData({
                description: "",
                category: "",
                supplier_name: "",
                point_cost: "",
            });
            setUploadImage({
                image: null,
            })
        } catch (err) {
            alert(err.response.data.message);
            console.log(err);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === "max_money") {
            setData({
                ...data,
                [name]: parseInt(value),
            });
            return;
        }

        if (name === "image") {
            if (e.target.files[0]) {
                const image = e.target.files[0];
                setUploadImage({
                    ...uploadImage,
                    image: image,
                });
                console.log(uploadImage)
                return;
            }
        }
        setData({
            ...data,
            [name]: value,
        });
    };

    return (
        <>
            <div class="card-header">
                <h3 class="card-title">Thêm hoàn cảnh</h3>
            </div>
            <form>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Title"
                                    value={data.title}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="content">Mô tả</label>
                                <input
                                    type="text"
                                    name="content"
                                    className="form-control"
                                    placeholder="Nhập mô tả"
                                    value={data.content}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="max_money">Số tiền</label>
                                <input
                                    type="number"
                                    name="max_money"
                                    className="form-control"
                                    value={data.max_money}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Ảnh hoàn cảnh</label>
                        <input
                            name="image"
                            required
                            type="file"
                            onChange={handleOnChange}
                        />
                    </div>
                </div>

                <div className="card-footer">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => addReceiver(e)}
                    >
                        Thêm hoàn cảnh
                    </button>
                </div>
            </form>
        </>
    );
};
export default AddReceiver;
