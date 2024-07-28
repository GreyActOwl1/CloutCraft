'use client';
import { useState } from 'react';
import Link from 'next/link';
import { account } from '@/app/api/appwriteClient';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
	e.preventDefault();
	try {
	  await account.create('unique()', email, password);
	  setSuccess('Account created successfully!');
	  setError('');
	} catch (err) {
	  setError('Failed to create account. Please try again.');
	  setSuccess('');
	}
  };

  return (
	<form onSubmit={handleSignup}>
	  <div className="flex flex-wrap -mx-3 mb-4">
		<div className="w-full px-3">
		  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">
			Work Email <span className="text-red-600">*</span>
		  </label>
		  <input
			id="email"
			type="email"
			className="form-input w-full text-gray-300"
			placeholder="you@yourcompany.com"
			required
			value={email}
			onChange={(e) => setEmail(e.target.value)}
		  />
		</div>
	  </div>
	  <div className="flex flex-wrap -mx-3 mb-4">
		<div className="w-full px-3">
		  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">
			Password <span className="text-red-600">*</span>
		  </label>
		  <input
			id="password"
			type="password"
			className="form-input w-full text-gray-300"
			placeholder="Password (at least 10 characters)"
			required
			value={password}
			onChange={(e) => setPassword(e.target.value)}
		  />
		</div>
	  </div>
	  {error && <div className="text-red-600 text-center">{error}</div>}
	  {success && <div className="text-green-600 text-center">{success}</div>}
	  <div className="text-sm text-gray-500 text-center">
		I agree to the  terms of service and{' '}
		<Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">
		  Privacy Policy
		</Link>
		.
	  </div>
	  <div className="flex flex-wrap -mx-3 mt-6">
		<div className="w-full px-3">
		  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
		</div>
	  </div>
	</form>
  );
};

export default SignupForm;