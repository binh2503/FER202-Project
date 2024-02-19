export default function UpdateProfile() {
    return (
        <div className="w-screen h-auto flex justify-center mt-[100px]">
            <div className="w-2/5 h-auto">
                <h2 className="font-mono text-[20px] font-bold text-[#109AE5]">Update Profile</h2>
                <div className="w-full h-[2px] bg-[#109AE5] rounded-[-2px] mt-1"></div>
                <div className="w-full">
                    <div className="w-full flex mt-[10px]">
                        <div className="w-1/2">
                            <div className="w-3/4">
                                <label for="name" className="font-mono text-black text-[20px] font-bold">Full name</label>
                                <input placeholder="Nguyen Van A" type="text" id="name" name="name" className="w-full h-[40px] rounded-[5px] border-[1px] border-black mt-1 pl-[5px] font-mono " />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-3/4">
                                <label for="name" className="font-mono text-black text-[20px] font-bold">Date of birth</label>
                                <input type="date" id="name" name="name" className="w-full h-[40px] rounded-[5px] border-[1px] border-black mt-1 pl-[5px] font-mono" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex mt-[10px]">
                        <div className="w-1/2">
                            <div className="w-3/4">
                                <label for="name" className="font-mono text-black text-[20px] font-bold">Phone number</label>
                                <input placeholder="0xxxxxxxxx" type="text" id="name" name="name" className="w-full h-[40px] rounded-[5px] border-[1px] border-black mt-1 pl-[5px] font-mono " />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-3/4">
                                <label for="name" className="font-mono text-black text-[20px] font-bold">Address</label>
                                <input type="text" id="name" name="name" className="w-full h-[40px] rounded-[5px] border-[1px] border-black mt-1 pl-[5px] font-mono" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="w-1/4 h-[40px] bg-[#109AE5] rounded-[5px] mt-[20px] font-mono text-white text-[20px] font-bold">Update</button>
                </div>
            </div>
        </div>
    );
}