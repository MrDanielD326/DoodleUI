import { ReactNode } from 'react'
import { Divider } from '@heroui/react';

const Title = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col gap-2.5 pb-4 -mt-1.5">
        <span className="text-xl font-bold bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent"> {children} </span>
        <Divider />
    </div>
);

export default Title;
