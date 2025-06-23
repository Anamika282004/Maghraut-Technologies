import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
const CallMail = ()=>{
    return <>
    <div className="flex justify-center space-x-6 mt-6">
  <div className="flex items-center space-x-2 text-black">
    <EnvelopeIcon className="h-5 w-5 text-blue-600" />
    <span>info@maghrauttech.com</span>
  </div>
  <div className="flex items-center space-x-2 text-black">
    <PhoneIcon className="h-5 w-5 text-blue-600" />
    <span>+91 98765 43210</span>
  </div>
</div>
    </>
}
export default CallMail;