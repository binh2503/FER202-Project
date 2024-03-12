import { UilUser, UilSignout, UilBell } from '@iconscout/react-unicons'
import Signup from './Signup';
export default function Header() {
    return (
        <div className="w-screen h-auto bg-white flex justify-center">
            <div className="flex justify-between h-[100px] w-4/5">
                <div className="h-full flex">
                    <a className="h-full" href="/homepage"><img className="h-full" src="https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew=" /></a>
                    <div className="h-full flex items-center ml-[-20px]">
                        <a href="/homepage">
                            <p className="font-mono text-[#0493B3] text-[35px] font-bold">Healthcare</p>
                        </a>
                    </div>
                </div>
                <div className="h-full flex items-center">
                    <div className="gap-[50px] flex">
                        <a className="text-[18px] font-mono font-bold" href="#">Home</a>
                        <a className="text-[18px] font-mono font-bold" href="#">About</a>
                        <a className="text-[18px] font-mono font-bold" href="#">Specialist</a>
                        <a className="text-[18px] font-mono font-bold" href="/doctor-list">Doctors</a>
                        <a className="text-[18px] font-mono font-bold" href="#">Contact</a>
                        <a className="text-[18px] font-mono font-bold" href="/booking">Booking</a>
                    </div>
                </div>
                <div className="h-full flex items-center gap-[20px]">
                    <div className='relative'>
                        <button className="h-[40px] w-[40px] bg-[#0872BB] flex justify-center items-center text-white font-mono font-bold rounded-[30px]"><UilBell /></button>
                        <div className='absolute border w-[18px] h-[18px] bg-white rounded-[10px] top-[25px] left-[25px] flex items-center justify-center'>
                            <p className='font-bold font-mono text-[#FF0000] text-[14px]' >1</p>
                        </div>
                    </div>
                    <a href="/profile">
                        <button className="h-[40px] w-[40px] bg-[#0872BB] flex justify-center items-center text-white font-mono font-bold rounded-[30px]"><UilUser /></button>
                    </a>
                    <a href="/">
                        <button className="h-[40px] w-[40px] bg-[#0872BB] flex justify-center items-center text-white font-mono font-bold rounded-[30px]"><UilSignout /></button>
                    </a>
                </div>
            </div>
        </div>
    );
}