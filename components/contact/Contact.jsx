import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { GrAttachment } from 'react-icons/gr';
import { gsap } from "gsap/dist/gsap";
import { BsList, BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { selector } from 'gsap';
import Navbar from '../Navbar';
import Btn from './Btn';
import { db, collection, addDoc } from '../../firebase.js';
import swal from 'sweetalert';
import Router from 'next/router';
import emailjs from '@emailjs/browser';




const Contact = () => {
    const [files, setFiles] = useState(null)
    const [load, setLoad] = useState(false);
    const [budget, setBudget] = useState(null);
    const [budgetError, setBudgetError] = useState(false);
    const [needarr, setNeedarr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    useEffect(async () => {

        let ks = document.getElementsByClassName('black-hover-abs');
        window.addEventListener('mousemove', (e) => {
            Array.from(ks).forEach((k) => {
                let x = e.clientX - k.parentElement.getBoundingClientRect().x;
                let y = e.clientY - k.parentElement.getBoundingClientRect().y;
                k.style.left = x + 'px'
                k.style.top = y + 'px'
            })
        })

        gsap.registerPlugin(ScrollTrigger);


        gsap.to(".sel", {
            scrollTrigger: {
                trigger: ".contact-cover",
                start: "bottom 80%",
                end: "bottom 15%",
                scrub: true,
                // markers:true
            },
            scaleY: 0
        })
        gsap.to(".contact-down", {
            scrollTrigger: {
                trigger: ".contact-cover",
                start: "bottom 80%",
                end: "bottom 15%",
                scrub: true,
                // markers:true
            },
            y: 0
        })
        gsap.to(".work-cont", {
            scrollTrigger: {
                trigger: ".contact-cover",
                start: "bottom 50%",
                end: "bottom 15%",
                scrub: true,
                // markers:true
            },
            x: 0
        })

    }, [])

    const [user, setUser] = useState({
        name: "", phone: "", email: "", country: "", msg: ""
    })
    const [errors, setErrors] = useState({})

    let handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const validate = () => {
        let formErrors = {};
        let regex = user.email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        if (!user.name) {
            formErrors.name = "Name is Required"
        }
        if (!user.phone) {
            formErrors.phone = "Contact no is Required"
        }
        if (!user.email) {
            formErrors.email = "Email is Required"
        }
        else if (!regex) {
            formErrors.email = "This is not a valid email format"
        }
        if (!user.country) {
            formErrors.country = "Country is Required"
        }
        if (budget == null) {
            setBudgetError(true);
        }
        else {
            setBudgetError(false)
        }
        return formErrors;
    }
    const submitForm = async (e) => {

        e.preventDefault();
        setLoad(true);
        let formErrors = validate();
        if (!formErrors.name && !formErrors.phone && !formErrors.email && !formErrors.country) {
            // if(true){
                let data = {
                    name:user.name,
                    phone:user.phone,
                    email:user.email,
                    country:user.country,
                    msg:user.msg,
                    budget:`${budgets[budget]} USD`
                }
            await addDoc(collection(db, "users"), data).then(async() => {
                console.log(data,"data");
                try {
                    const res = await fetch(`api/contact`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
        
                    const { error } = await res.json()
        
                    if (error) {
                        swal("Oops!", err, "error");
                        return
                    }
                    else{
                        swal("", "Message has been sent succesfull", "success");
                    }
                } catch (error) {
                    alert(error,"error has eccorued in mail in catch")
                }
                setLoad(false);
              
            }).catch((err) => {
                swal("Oops!", err, "error");
                setLoad(false);
            });
        }
        else {
            setErrors(formErrors)
            setLoad(false);
        }
        
    }

    let needs = ["Branding", "Web design", "Site from scratch", "UI/UX", "Web animation", "Application design", "HTML/CSS coding", "Front-end development", "Back-end development", "Other"];
    let budgets = ["400 - 600", "600 - 800", "800 - 1K", "1K - 10K", "+10K"]
    let works = [
        {
            title: "Send brief",
            p: "Send us a complete brief along with documents & requirements to estimate the project & get started"
        },
        {
            title: "Stay in touch",
            p: "Review preliminary results and leave your feedback for us to continue or make corrections."
        },
        {
            title: "Approve",
            p: "Approve the draft version of the services you like and want us to deliver."
        },
        {
            title: "Get results",
            p: "Receive the perfect quality of your services on time & leave us a review if you like."
        }
    ]

    let showfiles = () => {
        let fileinp = document.getElementsByClassName('file-inp')[0]
        let temp = fileinp.files;
        let fileList = [];
        for (let i = 0; i < temp.length; i++) {
            let file = temp.item(i)
            fileList.push(file.name[0])
        }
        console.log(fileList);
        setFiles(fileList);
        console.log(fileList);
    }
    let select = (index) => {
        // setNeedarr([])
        if (needarr[index] == 1) {

        }
        setNeedarr([
            ...needarr.slice(0, index),
            needarr[index] == 1 ? 0 : 1,
            ...needarr.slice(index + 1, needarr.length)
        ]);
        console.log(needarr);
    }
    return (
        <>
            <Navbar mobnav={true} page="contact" />
            <div className='contact-cover'>
                <div className="contact-cont">
                    <div className="contact-inner-cont">
                        <div className="cont-title-cont">
                            <div className="cont-t">We are happy to help &#128522;</div>
                            <div className="cont-p">Get in touch</div>
                        </div>
                        <div className="cont-div">
                            <div className="cont-div-t">I need</div>
                            <div className="cont-options">
                                {
                                    needs.map((need, index) => {
                                        return (
                                            <Btn word={need} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="cont-div">
                            <div className="input-cont-form">
                                <div className="half-inp-cont">
                                    <div className="half-ec">
                                        <input value={user.name} name="name" onChange={handleInputs} placeholder='Your Name' className='cont-half-inp left-inp' />
                                        {errors.name && <div className="error">{errors.name}</div>}

                                    </div>
                                    <div className="half-ec">
                                        <input value={user.phone} name="phone" onChange={handleInputs} placeholder='Your Contact No' className='cont-half-inp right-inp' />
                                        {errors.phone && <div className="error">{errors.phone}</div>}
                                    </div>

                                </div>
                                <div className="half-inp-cont">
                                    <div className="half-ec">
                                        <input value={user.email} name="email" onChange={handleInputs} placeholder='Your Email' className='cont-half-inp left-inp' />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                    </div>
                                    <div className="half-ec">
                                        <input value={user.country} name="country" onChange={handleInputs} placeholder='Your Country' className='cont-half-inp right-inp' />
                                        {errors.country && <div className="error">{errors.country}</div>}
                                    </div>
                                </div>

                                <input type="text" value={user.msg} name="msg" onChange={handleInputs} placeholder='About your project' className='cont-inp-form' />
                                <div className='form-btn'>
                                    <input type={"file"} onChange={showfiles} className="file-inp pos-abs-full" />
                                    <div className="pos-abs-full attach-cont flex-all"><div className='pos-rel-full form-hover flex-all'><div className="black-btn-form black-hover-abs"></div><GrAttachment />Add attachment</div></div>
                                    {files && <div className="file-list">
                                        {files.map((file, index) => {
                                            <div className='file' key={index}>{file}</div>
                                        })
                                        }
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className="cont-div">
                            <div className="cont-div-t">Budget (USD)</div>
                            <div className="cont-options">
                                {
                                    budgets.map((bg, index) => {
                                        return (
                                            <div className='btn-oc' key={index}>
                                                <div className={`cont-need ${budget == index ? 'cont-s' : null} `} onClick={() => { setBudget(index) }}><div className="need-word">{bg}</div></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {budgetError && <div className="budget-error error">PLease select a budget</div>}
                        </div>
                        <div className='btn-cover' onClick={submitForm}>
                            <div className="form-submit-btn flex-all">
                                {
                                    load ?
                                        <div className="pos-abs-full flex-all load-cont-circ">
                                            <div className="loader"></div>
                                        </div>
                                        :
                                        <>
                                        <div className="black-hover-abs sub-abs"></div>
                                         Submit
                                        </>

                                }

                            </div>
                        </div>
                    </div>

                </div>

                <div className="ellipse">
                    <div className='sel'>
                        <img className="elimg" src="/curve.png" />
                    </div>
                </div>
            </div>
            <div className="contact-down">
                <div className="cont-email flex-all"> <a href="mailto:zerrorstudios@gmail.com" ><div className='flex-all cont-es bori'><AiOutlineMail />zerrorstudios.com</div></a><a style={{ color: "rgba(255,255,255,.6)", textDecoration: "none" }} href="tel:+917738802437"><div className='flex-all cont-es'><BsTelephone />+91 77388 02437</div></a></div>
                {/* <div className="down-inner"> */}
                <div className="work-title">How it works</div>
                <div className="work-outer-cont">
                    <div className="work-cont">
                        {works.map((work, index) => {
                            return (
                                <div className="work-div" key={index}>
                                    <div className="black-hover black-hover-abs"></div>
                                    <div className="work-t "><span className='work-i flex-all'>{index + 1}</span> {work.title}</div>
                                    <div className="work-p">{work.p}</div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Contact
