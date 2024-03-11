import { Tab } from '@headlessui/react'
import BookingHistory from './BookingHistory';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function MedicalHistoryTabs() {
    return (
        <div className='w-auto mt-[10px]'>
            <Tab.Group>
                <Tab.List className="font-mono flex text-[20px]  bg-[#109AE5] rounded-[30px]">
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#109AE5] rounded-[30px] py-[10px] px-[30px]',

                            selected
                                ? 'bg-white text-[#109AE5] shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>Booking History</Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#109AE5] rounded-[30px] py-[10px] px-[30px]',

                            selected
                                ? 'bg-white text-[#109AE5] shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>Medical</Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'bg-[#109AE5] rounded-[30px] py-[10px] px-[30px]',

                            selected
                                ? 'bg-white text-[#109AE5] shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>Diseases</Tab>

                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel><BookingHistory /></Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}