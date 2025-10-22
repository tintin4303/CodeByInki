"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Stack() {
    const logos = [
        "/logos/react.svg",
        "/logos/nextjs.svg",
        "/logos/tailwind.svg",
        "/logos/nodejs.svg",
        "/logos/mongodb.svg",
        "/logos/postgresql.svg",
        "/logos/python.svg",
        "/logos/java.svg",
        "/logos/express.svg",
        "/logos/javascript.svg",
        "/logos/django.svg",
        "/logos/spring.svg",
        "/logos/jquery.svg",
    ];

    return (
        <section id="skills" className="py-10 text-center">
        {/* --- Badges --- */}
        <div className="flex flex-wrap justify-center gap-6 px-5">
            {[
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "MongoDB",
            "PostgreSQL",
            "Python",
            "Java",
            ].map((skill, i) => (
            <span
                key={i}
                className="px-4 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 hover:scale-115 transition "
            >
                {skill}
            </span>
            ))}
        </div>

        {/* --- Sliding Logos --- */}
        <div className="overflow-hidden py-10">
            <Marquee gradient={true} speed={55} pauseOnHover={true}>
            {logos.map((logo, i) => (
                <div key={i} className="mx-12">
                <Image
                    src={logo}
                    alt={logo}
                    width={55}
                    height={55}
                />
                </div>
            ))}
            </Marquee>
        </div>
        </section>
    );
}
