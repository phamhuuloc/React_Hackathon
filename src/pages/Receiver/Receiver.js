import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from 'react-router-dom';
import "./Receiver.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const initialFormData = {
    amount: 0
};
  

const Receiver = () => {
    const [open, setOpen] = React.useState(false);
    const [formReqData, setFormReqData] = useState(initialFormData);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { id } = useParams();
    const [formData, setFormData] = useState(initialFormData);
    let token = localStorage.getItem("token");

    useEffect(() => {
        const checkLoggedIn = async () => {
            if (token === null) {
                localStorage.setItem("token", "");
                token = "";
            }
            if (token) {
                const userResponse = await axios.get(
                    `https://khoi-hi-vong.herokuapp.com/api/user/donation/${id}`,
                    {
                        headers: {
                            authorization: token,
                        }
                    }
                );
                setFormData(userResponse.data.donationList);
            }
        };

        checkLoggedIn();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormReqData({
            ...formReqData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (token) {
                const res = await axios.post(
                    "https://khoi-hi-vong.herokuapp.com/api/user/donation",
                    {
                        receiverId: id,
                        amount: formReqData.amount
                    },
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );
                alert(res.data.message);
                setFormReqData({
                    amount: 0,
                });
            }
        } catch (err) {
            alert(err.response.data.message);
            console.log(err);
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="header">
                    <img className="hero-image" src="https://hieuvetraitim.com/attachments/1782/"/>
                    <div className="funding container">
                        <div className="funding-card">
                            <h2 className="funding-title">
                                Hello word
                            </h2>
                            <button className="funding-button" onClick={handleOpen}>
                                Quyên góp
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="history-donation-header">
                    <h3 className="history-donation-title">Danh sách quyên góp</h3>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Loại</th>
                            <th>Số lượng</th>
                            <th>Ngày</th>
                            <th>Số điểm</th>
                        </tr>
                    </thead>
                    {formData?.length > 0 ? (
                        formData.reverse().map((item) => {
                            return (
                                <tr>
                                    <td>
                                        {item.type_of_donation == 1
                                            ? "Tiền"
                                            : "Quần áo"}
                                    </td>
                                    <td>
                                        {item.type_of_donation == 1
                                            ? item.money
                                            : item.clothes_amount}
                                    </td>
                                    <td>{item.createdAt.slice(0, 10)}</td>
                                    <td>{item.total_point}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <div></div>
                    )}
                </table>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField fullWidth value={formReqData.amount} id="outlined-number"
                        label="Số tiền"
                        type="number"
                        name="amount"
                        InputLabelProps={{
                            shrink: true,
                        }} 
                        onChange={handleChange} 
                    />
                    <button className="donate-button" onClick={handleSubmit}>
                        Quyên góp
                    </button>
                </Box>
            </Modal>
        </div>

    );
};
export default Receiver;
