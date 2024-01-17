'use client';
import {useState, useEffect, useRef} from 'react';

const TabButton = ({ items }) => {

    const [selectTab, setSelectTab] = useState(0);

    const buttonRef = useRef();

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    return (
        <div class='flex justify-center items-center py-12'>
        <div class='max-w-md flex flex-col gap-y-2 w-full'>
            <div class='bg-[#bfaa8f] p-1 flex justify-between items-center gap-x-2 text-white rounded-md'>
                {items.map((item, index) => (
                    <button 
                    ref={index === 0 ? buttonRef : null}
                    key={index}
                    onClick={() => setSelectTab(index)}
                    class={`outline-none w-full p-2 hover:bg-[#BFB5A7] rounded-md ${selectTab === index ? 'bg-white text-[#bfaa8f]' : ''}`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div class='bg-[#EEEDEB] p-2'>
                {items.map((item, index) => {
                    <div class={`${selectTab === index ? '' : 'hidden'}`}>
                        {item.content}
                    </div>
                })}
            </div>
        </div>
        </div>
    )
};

export default TabButton;