import React, { Fragment } from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import axios from 'axios';

// Image
import logo from "../../../assets/images/logo.png"
import i2 from "../../../assets/images/login/i2"
import i1 from '../../../assets/images/login/i1'
import i3 from '../../../assets/images/login/i3'
const LoginPage = () => {
    const navigator=useNavigate();
    const [users,setusers]=useState([]);
    const [errormsg,seterrormsg]=useState();
    const [formData,setFormData]=useState({
    username:'',
    userpassword:''
        });
    const [errors,setErrors]=useState({});
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};
   useEffect(()=>{
    const getUsers= async ()=>{
        try{
            const response=await axios.get('https://dummyjson.com/users');
            const usrs=response.data.users;
            setusers(usrs);
        }
        catch(error){
            console.log('Error in fetching users');
        }
    };
    getUsers();
   },[]);
   console.log(users);
  function handlesubmit(e){
    e.preventDefault();
    const user=users.find(u=>u.username===formData.username&&u.password===formData.userpassword);
    const uname=users.find(u=>u.username===formData.username);
    const upassword=users.find(u=>u.password===formData.userpassword);
    const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0 ) {
            if(user){
            console.log('Form submitted successfully!');
            navigator('/index',{state:user.username});
            }
            else{
                if(!uname){
                    seterrormsg('User does not existed!');
                }
                else if(uname&&!upassword){
                    seterrormsg('Password does not match with user name!');
                }
                navigator('/');
            }
        }
        else{
            console.log('Please enter valid data!');
        }
  }
  console.log(users);
  const validateForm = (data) => {
    const errors = {};

    if (!data.username) {
        errors.username = 'Email is required!';
    } else if (data.username.length>15) {
        errors.username = 'Username should have max 15 characters!';
    }

    if (!data.userpassword) {
        errors.userpassword = 'Password is required!';
    } else if (data.userpassword.length >10) {
        errors.userpassword = 'Password should have max 10 characters!';
    }
    
    return errors;
};
  return (
    <Fragment>
<section className="sign-in-page">
            <Container className="sign-in-page-bg mt-1 mb-md-5 mb-0 p-0">
                <Row className="row no-gutters">
                    <Col md='6' className="text-center">
                        <div className="sign-in-detail text-white">
                            <Link className="sign-in-logo mb-5" to="/"><img src={logo} className="img-fluid" alt="logo" /></Link>
                            <Swiper className="owl-carousel" autoplay={{delay:3000}} loop='true' modules={[Pagination,Autoplay]} spaceBetween={30}>
                                <SwiperSlide className="item">
                                    <img src={i1} className="img-fluid mb-4" alt="logo" />
                                    <h4 className="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <img src={i2} className="img-fluid mb-4" alt="logo" />
                                    <h4 className="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <img src={i3} className="img-fluid mb-4" alt="logo" />
                                    <h4 className="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Col>
                    <Col md='6' className="position-relative">
                        <div className="sign-in-from">
                            <h1 className="mb-0">Sign in</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <Form className="mt-4">
                                <Form.Group className='form-group'>
                                    <Form.Label htmlFor="exampleInputUserName1" className="mb-2">User Name</Form.Label>
                                    <Form.Control type="text" className="form-control mb-0" id="exampleInputUserName1" placeholder="Enter User Name.." name="username" value={formData.username} onChange={handleChange} />
                                    {/* {errors&& (<span className='text-danger text-center'>{errors.username}</span>)} */}
                                </Form.Group>
                                <div className="d-flex justify-content-between my-2">
                                    <Form.Label htmlFor="exampleInputPassword1" className='mb-0'>Password</Form.Label>
                                    <Link to="/recover-password" className="float-end">Forgot password?</Link>
                                </div>
                                <Form.Control type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Enter Password..." name="userpassword" value={formData.userpassword} onChange={handleChange} />
                                {errormsg&& (<span className='text-danger text-center'>{errormsg}</span>)}
                                <div className="d-flex w-100 justify-content-between  align-items-center mt-3 w-100">
                                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                        <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember Me</Form.Label>
                                    </div>
                                    <Button type="submit" className="btn btn-primary float-end" onClick={handlesubmit}>Sign in</Button>
                                </div>
                                <div className="sign-info">
                                    <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="/sign-up">Sign up</Link></span>
                                    <ul className="iq-social-media">
                                        <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                        <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                        <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                                    </ul>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Fragment>
  )
}

export default LoginPage
