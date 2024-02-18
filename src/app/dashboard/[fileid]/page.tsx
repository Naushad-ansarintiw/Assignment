"use client"
import TextGenerator from "@/components/TextGenerator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from 'next/navigation'

// Inside your functional component
const MyComponent = () => {

    const key = useParams();

    // Extract the value of the 'key' parameter

    return (
        <>
            <Button className=" ml-[40rem] mb-9">
                <Link href={`https://utfs.io/f/${key.fileid}`}>
                    <span>Click to See You PDF Here</span>
                </Link>
            </Button>
            <TextGenerator />
            <TextGenerator />
            <TextGenerator />
            <TextGenerator />
        </>
    );
};

export default MyComponent;
