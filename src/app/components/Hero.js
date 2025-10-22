import Image from 'next/image';

export default function Hero() {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col sm:flex-row sm:justify-around mx-10 p-10 glass-effect w-fit h-fit gap-2">
                <div className="flex justify-center">
                    <Image
                    src="/CodeByInki.svg"
                    alt="Inki"
                    width={300}
                    height={300}
                    className='pb-2'
                    />
                </div>

                <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold">Hi! I&apos;m <span className="text-blue-800">Inki</span>, a full-stack developer.</h1>
                <p className="mt-4 text-lg">Welcome to the place where I stash all my projects.</p>
                <p>I mainly focus on MERN stack with NextJS but I explore other stacks too!</p>
                <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-700 transition w-fit">
                    View All My Work →
                </button>
                </div>
            </div>
        </div>
    );
}