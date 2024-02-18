"use client"
import { Button } from '@/components/ui/button';
// Import the necessary dependencies
import { useState } from 'react';

// Inside your functional component
const TextGenerator = () => {

    const [generatedText, setGeneratedText] = useState('');

    const handleButtonClick = () => {
        // Logic to generate random text (replace with your own logic)
        const randomText = 'Random Text: ' + Math.random().toString(36).substring(7);
        setGeneratedText(randomText);
    };


    return (
        <div>
            <div className="flex justify-between items-center mt-4">
                {/* Left side div */}
                <div className=" ml-20 mr-4 flex">
                    <p className="text-lg font-bold">Click the Generate Button?</p>
                </div>

                {/* Right side */}
                <div className='flex mr-20'>
                    <Button onClick={handleButtonClick}>Generate Random Text</Button>
                    {/* Display generated text */}
                    {generatedText && (
                        <div className="ml-4">
                            <p className="text-sm text-gray-500">{generatedText}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TextGenerator;
