import { SignUp } from '@clerk/nextjs'

export default function SignIUpPage() {
  return (
    <div className='flex item-center justify-center p-3'>
        <SignUp />
    </div>
  
    );
}