import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showModal, setShowModal] = useState(false);
    const[fname, setFname] = useState('');
    const[remail, setRemail] = useState('');
    const [sname, setSname] = useState('');
    const [npass, setNpass] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('')
    const navigate = useNavigate();

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(email,pass);

        axios.post('http://localhost:5000/users/login/',
            {
                email: email,
                pass: pass,

            }).then((res) => {
                console.log(res); 
                navigate.push('/profile/')               
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });

        setEmail('');
        setPass('');
    }

    const handleRegister = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:5000/users/register/',
            {
                fname : fname,
                sname : sname,
                remail : remail,
                npass : npass,
                dob : dob,
                gender : gender,

            }).then((res) => {
                console.log(res);                
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });

        console.log(fname, sname, remail, npass, dob, gender);
        setFname('');
        setSname('');
        setRemail('');
        setNpass('');
        setDob('');
        setGender('');
    }


    return (
        <div className="grid grid-cols-2 gap-2">
            <div>
                <img className="w-1/3 mx-auto  mt-44"src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="facebook "></img>
                <p className="ml-64 text-3xl">Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div >
                <div className="border ml-40 bg-white mt-36 p-4 rounded-lg shadow-lg grid grid-cols-1 divide-y divide-slate-300 w-96">
                    <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <input name="email" autocomplete="off" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border ml-4 rounded mt-4 w-80 m-2 p-2 h-12 focus:outline-none shadow-inner focus:shadow-md focus:caret-blue-400 focus:border-blue-400" placeholder="Email Address or Phone Number" type="email"></input>
                        </div>
                        <div>
                        <input name="pass" autocomplete="off" id="pass" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Password" className="border ml-4 shadow-inner focus:shadow-md  focus:caret-blue-400 focus:outline-none focus:border-blue-400 p-2 m-2 rounded w-80 h-12" type="password"></input>
                        </div>
                        <button type="submit" className="border ml-4 rounded text-white text-lg font-bold mt-2 bg-fbcol m-2 p-2 h-12 w-80 ">Log In</button>

                        <p className="mt-3 mb-3 text-center text-fbcol">Forgotten password?</p>
                    </form>
                    </div>
                    <div>
                        <button onClick={()=>setShowModal(true)}  className="border ml-16 mt-4  rounded text-white text-lg font-bold mt-4 bg-fbcol2 m-2 p-2 h-12 w-3/5 " >Create New Account</button>
                        {showModal ? 
                        (<div className="absolute inset-0 bg-opacity-50 flex overflow-x-hidden overflow-y-auto justify-center items-center  ">
                            <div className="grid grid-cols-1 divide-y  divide-slate-300">
                            <div className="bg-white p-2 border border-none rounded  shadow-md flex">
                                <div >
                                <h1 className="text-3xl ml-2 font-bold">Sign Up</h1>
                                <p className="ml-2">It's quick and easy.</p>
                                </div>
                                <div>
                                    <button onClick={()=>setShowModal(false)} className="ml-60 text-2xl">x</button>
                                </div>
                            </div>
                            <div className="bg-white border border-none  shadow-md rounded"> 
                                <form onSubmit={handleRegister}>
                                    <div>
                                    <input placeholder="First name" type="text" value={fname} onChange={(e)=>setFname(e.target.value)}className="border focus:outline-none w-44 bg-slate-100 rounded ml-3 mr-2 p-2 mt-3"></input>
                                    <input placeholder="Surname" type="text" value={sname} onChange={(e)=>setSname(e.target.value)} className="border focus:outline-none rounded bg-slate-100 mr-3 p-2 mt-3"></input>
                                    </div>
                                    <div>
                                        <input placeholder="Mobile number or email address" type="email" value={remail} onChange={(e)=>setRemail(e.target.value)} className="w-96 focus:outline-none p-2 mt-2 ml-3 mr-3 border rounded bg-slate-100"></input>
                                    </div>
                                    <div>
                                        <input placeholder="New Password " type="password" value={npass} onChange={(e)=>setNpass(e.target.value)}className="w-96 p-2 focus:outline-none mt-2 border ml-3 mr-3 rounded bg-slate-100"></input>
                                    </div>
                                    <div className="mt-2">
                                        <label className="text-md ml-3 text-slate-400">Date of Birth:</label>
                                        <br></br>
                                        <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} className="w-96 p-2 border rounded ml-3 focus:outline-none mr-3 mb-2 mt-2 text-slate-400"></input>
                                    </div>
                                    <div>
                                        <p className="text-md ml-2 text-slate-400 ml-3 pb-1 ">Gender:</p>
                                        <div className="flex">
                                        <div className="border p-2 ml-3 rounded ">
                                        <label className="mr-5 mb-2 ml-3">Male</label>
                                        <input type='radio' id='gender1' onClick={()=>setGender('Male')} name='gender' value="Male"></input>
                                        </div>
                                        <div className="border p-2 ml-5 rounded">
                                        <label className="mr-5 ml-2">Female</label>
                                        <input type='radio' id='gender2' name='gender' onClick={()=>setGender('Female')} value="Female"></input>
                                        </div>
                                        <div className="border p-2 ml-5 rounded">
                                        <label className="mr-5 ml-3">Others</label>
                                        <input type='radio' id='gender3' name='gender' onClick={()=>setGender('Others')} value="Others"></input>
                                        </div>
                                        </div>


                                    </div>
                                    <button type="submit"  className="border ml-16 mt-4  rounded text-white text-lg font-bold mt-4 bg-fbcol2 m-2 p-2 h-12 w-3/5 " >Sign up</button>
                                </form>
                            </div>
                            </div>
                            
                        </div>) : null}
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Home
