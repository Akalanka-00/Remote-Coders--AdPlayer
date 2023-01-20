import React from 'react'

const TestNavigator = () => {
  return (
    <div className="test">
         <a href='/homepage' className='homePage'>
                HomePage
            </a>
        <h1>With SignUp</h1>
        <div className="row">
            <a href='/customerSignUp' className='customerSignUp'>
                Customer
            </a>

            <a href='/developerSignUp' className='developerSignUp'>
                Game Developer
            </a>

            <a href='/adminSignUp' className='adminSignUp'>
                Admin
            </a>
        </div>

        <h1>Without SignUp</h1>
        <div className="row">
            <a href='/customerSignUp' className='customerSignUp'>
                Customer
            </a>

            <a href='/developerSignUp' className='developerSignUp'>
                Game Developer
            </a>

            <a href='/adminSignUp' className='adminSignUp'>
                Admin
            </a>
        </div>
    </div>
  )
}

export default TestNavigator
