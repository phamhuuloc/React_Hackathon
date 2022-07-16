import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

const initialFormData = {
    email: "",
    fullname : "",
    phonenumber : "",
    cmnd: "",
};

const UserInfo = () => {
    let user = useSelector((state) => state.user.value);

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        setFormData(user)
    }, [user])

    console.log(formData)

    const token = window.localStorage.getItem("token");
    
    async function handleOnSubmit(e) {
        e.preventDefault();
        const updateUser = async () => {
            const res = await axios.post(
              `https://khoi-hi-vong.herokuapp.com/api/user/edit/`, formData,
              {
                headers: {
                  authorization: token,
                },
              }
            );
          alert(res.data.message);
          };
          updateUser();
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if(name === "phonenumber") {
            setFormData({
                ...formData,
                [name]: parseInt(value)
            })
            return
        } 

        setFormData({
          ...formData,
          [name]: value,
        });
    };


    return (
        <>
        <Navbar/>
        <div className="card-header">
            <h3 className="card-title">Thông tin của bạn</h3>
        </div>
        <form>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="fullname">Họ và tên</label>
                            <input type="text" name="fullname" className="form-control" value={formData.fullname}
                            onChange={handleOnChange}
                            required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className="form-control" value={formData.email}
                            onChange={handleOnChange}
                            required/>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="phonenumber">Số điện thoại</label>
                            <input type="number" name="phonenumber" className="form-control" value={formData.phonenumber}
                            onChange={handleOnChange}
                            required/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="cmnd">Số chứng minh nhân dân</label>
                            <input type="number" name="cmnd" className="form-control" value={formData.cmnd}
                            onChange={handleOnChange}
                            required/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <button type="submit" onClick={handleOnSubmit} className="btn btn-primary">Sửa thông tin</button>
            </div>
        </form>
        </>
    );
};
export default UserInfo;
