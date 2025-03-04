import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='flex item-center justify-center p-3'>
        <SignIn />
    </div>
  
    );
}