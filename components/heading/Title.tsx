import { ReactNode } from 'react'
import { title } from '../primitives';
import { Divider } from '@heroui/react';

const Title = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col gap-2.5 pb-4">
        <span className={title({ color: "blue" })}>{children}</span>
        <Divider />
    </div>
);

export default Title;
