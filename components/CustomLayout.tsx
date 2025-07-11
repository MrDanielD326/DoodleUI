import { Accordion, AccordionItem, Card, CardBody, CardHeader, Code, Snippet } from '@heroui/react';
import { FC, ReactNode } from 'react';

interface CustomLayoutProps {
    design?: ReactNode;
    code?: ReactNode;
    preview?: ReactNode;
}

const CustomLayout: FC<CustomLayoutProps> = ({ design, code, preview }) => {
    return (
        <div
            className="pt-4 pb-4 flex flex-col gap-y-4">
            <div className="flex flex-row gap-6">
                <Card shadow="sm" className="basis-[60%] pl-8">
                    <CardBody> {design} </CardBody>
                </Card>
                <Card shadow="sm" className="basis-[40%]">
                    <CardHeader>
                        <div className="flex-shrink-0 ml-auto">
                            <Snippet size="lg" color="default" variant="bordered" symbol="">
                                <span className="sr-only"> {code} </span>
                            </Snippet>
                        </div>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4 pb-10">
                        <Accordion isCompact selectionMode="multiple" variant="light" defaultExpandedKeys={["preview", "code"]}>
                            <AccordionItem key="preview" aria-label="Preview" title="Preview">
                                <div className="flex justify-center items-center w-full py-16">
                                    <div style={{ transform: 'scale(3)' }}>
                                        {preview}
                                    </div>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="code" aria-label="Code" title="Code">
                                <Code className="whitespace-pre-wrap font-mono w-full"> {code} </Code>
                            </AccordionItem>
                        </Accordion>
                    </CardBody>
                </Card>
            </div>
        </div >
    );
};

export default CustomLayout;
