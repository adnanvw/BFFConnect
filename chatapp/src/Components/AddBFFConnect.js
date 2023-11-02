import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import './BFFConnect.css'

function AddBFFConnect({addchattoggler,addchattoggle}) {

    const [BFFConnectusername, setBFFConnectUsername] = useState()
    const { user } = useContext(AuthContext)

    const API_URL = process.env.REACT_APP_API_URL

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`${API_URL}api/users/?username=${BFFConnectusername}`)
            setBFFConnectUsername("")
            const data = {
                senderId: user._id,
                receiverId: response.data._id
            }
            await axios.post(API_URL+'api/chatrooms', data)
        }
        catch (err) {
        }
        window.location.reload();
    }

    return (
        <div className='add-BFFConnect-background'>
            <div className={addchattoggle?"add-BFFConnect-open":"add-BFFConnectnnectnnectnnect-close"}>
                <div className="close-div" ><span onClick={addchattoggler}><p className="close-symbol">x</p></span></div>
                <form>
                    <img className='add-BFFConnect-img' src='assets/addBFFConnect.png' alt=''></img>
                    <input type="text" placeholder="Enter Username of BFFConnect" value={BFFConnectusername} onChange={(e) => { setBFFConnectUsername(e.target.value) }} required />
                    <button onClick={handleSubmit}>ADD BFFConnect</button>
                </form>
            </div>
        </div>
    )
}

export default AddBFFConnect
