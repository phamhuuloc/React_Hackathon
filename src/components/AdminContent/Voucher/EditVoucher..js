import React, { useState, useEffect } from "react";
import axios from "axios";
import FileBase from "react-file-base64";
import { useParams } from "react-router-dom";

const initialFormData = {
    _id: "",
    description: "",
    category: "",
    supplier_name: "",
    point_cost: "",
    image: "",
};
const EditVoucher = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [data, setData] = useState(initialFormData);
    const { id } = useParams();

    const token = window.localStorage.getItem("token");

    useEffect(() => {
        const getVoucher = async () => {
            const res = await axios.get(
                `https://khoi-hi-vong.herokuapp.com/api/voucher/edit/${id}`,
                {
                    headers: {
                        authorization: token,
                    },
                }
            );
            setFormData(res.data.voucher);
        };
        getVoucher();
    }, []);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === "point_cost") {
            setFormData({
                ...formData,
                [name]: parseInt(value),
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        axios.post(
            `https://khoi-hi-vong.herokuapp.com/api/voucher/edit/${id}`,
            formData,
            {
                headers: {
                    authorization: token,
                },
            }
        );
    };

    const getBase64OfImage = (base64) => base64;

    return (
        <>
            <div className="card-header">
                <h3 className="card-title">Thêm voucher</h3>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="description">Mô tả</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Nhập mô tả"
                                    value={formData.description}
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
                                    value={formData.category}
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
                                <label htmlFor="supplier_name">
                                    Nhà tài trợ
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

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="point_cost">Số điểm</label>
                                <input
                                    type="number"
                                    name="point_cost"
                                    className="form-control"
                                    value={formData.point_cost}
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Ảnh voucher</label>
                        <FileBase
                            required
                            type="file"
                            mutiple={false}
                            onDone={({ base64 }) =>
                                setFormData({
                                    ...formData,
                                    image: getBase64OfImage(base64),
                                })
                            }
                        />
                    </div>
                </div>

                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        Thêm voucher
                    </button>
                </div>
            </form>
        </>
    );
};
export default EditVoucher;
