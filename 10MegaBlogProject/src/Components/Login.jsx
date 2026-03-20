import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Logo, Input, Button } from './index'
import { login as authLogin } from '../Store/authSlice'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [ error, setError ] = useState("")
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(authLogin({userData}))
          navigate("/")
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='flex items-center justify-center w-full py-16 px-4'>
      <div className='w-full max-w-md'>
        {/* Top decorative accent */}
        <div className='flex justify-center mb-8'>
          <div 
            className='w-20 h-20 rounded-2xl flex items-center justify-center'
            style={{ 
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))',
              border: '1px solid rgba(139, 92, 246, 0.25)',
            }}
          >
            <Logo width="55px" />
          </div>
        </div>

        {/* Card */}
        <div 
          className='rounded-2xl p-10'
          style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(148, 163, 184, 0.12)',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(139, 92, 246, 0.05)'
          }}
        >
          <h2 
            className="text-center text-3xl font-bold leading-tight mb-2"
            style={{ color: '#f1f5f9' }}
          >
            Welcome back
          </h2>
          <p className="text-center text-base mb-8" style={{ color: '#64748b' }}>
            Sign in to continue to your account
          </p>

          {error && (
            <div 
              className="rounded-lg px-4 py-3 mb-6 text-sm text-center"
              style={{ 
                backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                border: '1px solid rgba(239, 68, 68, 0.2)',
                color: '#fca5a5' 
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(login)}>
            <div className='space-y-6'>
              <Input
                label = "Email"
                placeholder = "you@example.com"
                type = "email"
                {...register("email",{
                  required: true,
                  validate: {
                    matchPattern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email address must be valid"
                  }
                })}
              />
              <Input 
                label = "Password"
                placeholder = "••••••••"
                type="password"
                {...register("password",{
                  required: true,
                })}
              />
              <Button
                type="submit"
                className="w-full py-3 text-base"
              >
                Sign In
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(148, 163, 184, 0.15)' }} />
            <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#475569' }}>or</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(148, 163, 184, 0.15)' }} />
          </div>

          <p className="text-center text-base" style={{ color: '#94a3b8' }}>
            Don&apos;t have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold transition-all duration-200 hover:underline"
              style={{ color: '#a78bfa' }}
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
