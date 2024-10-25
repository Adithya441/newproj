'use client'

import React, { useState } from 'react'
import axios from 'axios'

// Replace these with your actual service details
const CLIENT_ID = 'fooClientId'
const CLIENT_SECRET = 'secret'
const BASE_URL = 'http://10.10.69.123:9987/UHES-0.0.1/WS/getcommunicationstatus?officeid=100-0'
const TOKEN_URL = 'http://10.10.69.123:9987/UHES-0.0.1/oauth/token'

export default function Apicall() {
  const [username, setUsername] = useState('Admin')
  const [password, setPassword] = useState('Admin@123')
  const [accessToken, setAccessToken] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(TOKEN_URL, 
        new URLSearchParams({
          grant_type: 'client-credentials',
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          username,
          password
        }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      setAccessToken(response.data.access_token)
    } catch (err) {
      setError('Failed to authenticate. Please check your credentials.')
      console.error('Authentication error:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchData = async () => {
    if (!accessToken) return

    setLoading(true)
    setError(null)

    try {
      const response = await axios.get(`${BASE_URL}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      setData(response.data)
    } catch (err) {
      setError('Failed to fetch data. Please try again.')
      console.error('Data fetching error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">OAuth Password Grant Example</h2>
      <div className="space-y-4">
        {!accessToken ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div style={{margin: '20px 20px'}}>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div style={{margin: '20px 20px'}}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              style={{backgroundColor:'black', margin: '20px 20px'}}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        ) : (
          <button
            onClick={fetchData}
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Fetching...' : 'Fetch Data'}
          </button>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {data && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Fetched Data:</h3>
            <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto text-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}