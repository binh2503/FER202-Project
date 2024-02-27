import { UilUser } from '@iconscout/react-unicons'
export default function UserInformation() {
    return (
        <div className="w-screen h-auto flex justify-center items-center mt-[10px]">
            <div className="w-3/4 h-auto">
                <h2 className="font-mono text-[20px] font-bold text-[#109AE5]">User Information</h2>
                <div className="w-full h-[2px] bg-[#109AE5] rounded-[-2px] mt-1"></div>
                <div className="w-full h-auto flex">
                    <div className="w-1/4 mt-[20px]">
                        <div className="w-[200px] h-[200px] bg-[#109AE5] rounded-[200px] flex justify-center items-center">
                            <UilUser size={100} color={"#fff"} />
                        </div>
                    </div>
                    <div className="w-3/4 mt-[20px]">
                        <div className="w-full h-auto">
                            <p className='font-mono text-[30px] font-extrabold mb-[20px]'>Personal</p>
                            <div className='flex '>
                                <p className='text-[20px] font-mono font-bold'>Full name:</p>
                                <p className='text-[20px] font-mono ml-[10px]'>Do Gia Binh.</p>
                            </div>
                            <div className='flex '>
                                <p className='text-[20px] font-mono font-bold'>Date of birth:</p>
                                <p className='text-[20px] font-mono ml-[10px]'>31/07/2003.</p>
                            </div>
                            <div className='flex '>
                                <p className='text-[20px] font-mono font-bold'>Email:</p>
                                <p className='text-[20px] font-mono ml-[10px]'>binhdg@gmail.com</p>
                            </div>
                            <div className='flex '>
                                <p className='text-[20px] font-mono font-bold'>Phone number:</p>
                                <p className='text-[20px] font-mono ml-[10px]'>0836740238.</p>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#109AE5] mt-[20px]'></div>

                        <div className='w-full mt-[20px]'>
                            <p className='font-mono text-[30px] font-extrabold mb-[20px]'>Booking History</p>
                            <div className='w-full mt-[20px]'>
                                <table className="w-full mt-8">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">STT</th>
                                            <th className="px-4 py-2">Doctor Name</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Time</th>
                                            <th className="px-4 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Add table rows here */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-[#109AE5] mt-[20px]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}