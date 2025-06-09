import React from 'react';

function About() {

    return (
        <main className="w-[75%] flex justify-self-center m-auto">
            <div className="flex flex-col justify-center items-center bg-[var(--color-light-bg)] text-[var(--color-primary-text)] p-8 m-4 rounded-lg shadow-[4px_4px_8px_rgba(0,79,111,0.8)]">
                <h1 className="text-7xl font-bold p-6">About SPARK</h1>


                <p className="p-6 text-2xl"><span className="font-bold text-3xl">Scientific Partnership for Advancing Research and Knowledge</span> (SPARK) is a cutting-edge organization dedicated to pushing the boundaries of science and technology. Bringing together brilliant minds from diverse fields, SPARK pioneers advancements in quantum computing, bioprinting, space research, AI-drive models (chatbots, computer vision, and robotics), software development, chemistry, medical innovation and hypothetical science concepts. Our mission is to foster collaboration, innovation, and groundbreaking discoveries that shape the future of technology and humanity. Whether exploring the mysteries of space, revolutionizing medicine, or developing next-gen artificial intelligence, SPARK is at the forefront of scientific progress.</p>
            </div>
        </main>
    );
}

export default About;
