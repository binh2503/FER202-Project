export default function Booking() {
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full bg-[#DDE5F4] flex justify-center items-center">
                <div className="w-[700px] h-[400px] bg-white rounded-[30px] flex flex-col items-center">
                    <p className="text-[#0493B3] font-mono font-bold text-[35px] mt-[20px]">Booking an appointment</p>
                    <div className="flex gap-[10px]">
                        <div className="w-[300px] h-[40px] mt-[20px] flex items-center">
                            <select className="w-[300px] h-[40px] border-[1px] border-[#0493B3] rounded-[30px] pl-[10px]">
                                <option>Select doctor</option>
                                <option>Dr. John Doe</option>
                                <option>Dr. Jane Doe</option>
                                <option>Dr. Michael Doe</option>
                            </select>
                        </div>
                        <div className="w-[300px] h-[40px] mt-[20px] flex items-center">
                            <input className="w-[300px] h-[40px] border-[1px] border-[#0493B3] rounded-[30px] pl-[10px]" type="text" placeholder="Your phone number" />
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="w-[300px] h-[40px] mt-[20px] flex items-center">
                            <input className="w-[300px] h-[40px] border-[1px] border-[#0493B3] rounded-[30px] px-[10px]" type="time" placeholder="Select date" />
                        </div>
                        <div className="w-[300px] h-[40px] mt-[20px] flex items-center">
                            <input className="w-[300px] h-[40px] border-[1px] border-[#0493B3] rounded-[30px] px-[10px]" type="date" placeholder="Select date" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[500px] h-[80px] mt-[20px] flex items-center">
                            <input className="w-[500px] h-[80px] border-[1px] border-[#0493B3] rounded-[10px] px-[10px] items-start" type="text" placeholder="Enter your symptoms" />
                        </div>
                    </div>
                    <div className="w-[300px] h-[40px] mt-[20px] flex items-center">
                        <button className="w-[300px] h-[40px] bg-[#0872BB] text-white font-mono font-bold rounded-[30px]">Book the doctor</button>
                    </div>
                </div>
            </div>
        </div>
    );
}