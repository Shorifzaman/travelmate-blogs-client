import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import GoogleSignIn from './GoogleSignIn'
import TextField from './TextField'
import Brand from './Brand'
import useAuth from '../../hooks/useAuth'

const SignInScreen = () => {
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    })
    const { signInUser } = useAuth()

        // handle change
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

    }
    //handle submit form 
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signInUser(userInput.email, userInput.password)
    }

    //form inputs
    const Inputs = [
        { id: 1, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
        { id: 2, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
    ]
    return (
        <>
{/* <div class="flex items-center">
  
  <img src="http://tourtoday.com.bd/wp-content/uploads/2017/02/slider.jpg" alt="gdf" />
  <div>
    <strong>Andrew Alfred</strong>
    <span>Technical advisor</span>
  </div>
</div> */}
        <main className="h-screen w-full banner">
            <div className="flex justify-center items-center h-screen grid grid-cols-6 gap-4">
                {/* logo  */}
                <Brand />
                {/* sign up form  */}
                <h1>SignInScreen</h1>
                <form className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-6">
                        {Inputs.map(input => (
                            <TextField
                                key={input.id}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={input.value}
                                name={input.name}
                                onChange={handleChange}
                            />
                        ))}
                    </div>
                    <Button text="Sign In" />
                    <Link to="/signup">
                        <p className="text-base text-primary text-center my-6 hover:underline">Need an account ?</p>
                    </Link>

                    <GoogleSignIn text="Sign In With Google" />
                </form>
            </div>
        </main>
       
        </>
    )
}

export default SignInScreen;
