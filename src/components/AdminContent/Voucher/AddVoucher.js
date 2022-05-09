import React, { useState, useEffect } from "react";
import axios from "axios";
import FileBase from "react-file-base64";

const AddVoucher = () => {
    const [data, setData] = useState({
        description: "",
        category: "",
        supplier_name: "",
        point_cost: "",
        image: "",
    });
    const token = window.localStorage.getItem("token");
    console.log(token);
    const addVoucher = async (e) => {
        e.preventDefault();
        try {
            if (token) {
                const res = await axios.post(
                    "https://adventure-charity.herokuapp.com/api/voucher/new",
                    data,
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
                image: "",
            });
        } catch (err) {
            alert(err.response.data.message);
            console.log(err);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === "point_cost") {
            setData({
                ...data,
                [name]: parseInt(value),
            });
            return;
        }

        setData({
            ...data,
            [name]: value,
        });
    };

    const getBase64OfImage = (base64) => base64;

    return (
        <>
            <div class="card-header">
                <h3 class="card-title">Thêm voucher</h3>
            </div>
            <form>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="description">Mô tả</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Nhập mô tả"
                                    value={data.description}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Thể loại</label>
                                <select
                                    className="form-control"
                                    name="category"
                                    value={data.category}
                                    onChange={handleOnChange}
                                    required
                                >
                                    <option value="mypham">Mỹ phẩm</option>
                                    <option value="anuong">Ăn uống</option>
                                    <option value="quanao">Quần áo</option>
                                    <option value="thethao">Thể thao</option>
                                    <option value="dochoi">Đồ chơi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="supplier_name">Nhà tài trợ</label>
                                <input
                                    type="text"
                                    name="supplier_name"
                                    className="form-control"
                                    placeholder="Nhập tên nhà tài trợ"
                                    value={data.supplier_name}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="point_cost">Số điểm</label>
                                <input
                                    type="number"
                                    name="point_cost"
                                    className="form-control"
                                    value={data.point_cost}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Ảnh voucher</label>
                        <FileBase
                            required
                            type="file"
                            mutiple={false}
                            onDone={({ base64 }) =>
                                setData({
                                    ...data,
                                    image: getBase64OfImage(base64),
                                })
                            }
                        />
                    </div>
                </div>

                <div className="card-footer">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => addVoucher(e)}
                    >
                        Thêm voucher
                    </button>
                </div>
            </form>
        </>
    );
};
export default AddVoucher;
