import AboutImage from '../assets/about-img.png'

export default function About() {
    return (
        <section>
            <div className='text-center text-5xl font-bold'>ABOUT ME</div>
            <div className="flex flex-col md:flex-row  px-5 md:py-30">
                <div className='py-5 md:w-1/2'>
                <img className='md:m-20' src={AboutImage} />
                </div>
                <div className='md:w-1/2 flex justify-center'> 
                <div className='flex flex-col justify-center text-2xl'><br />
                    <p className='pb-5'> Hi, My name is Sree Ram S S . I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap</p>
                    <p className='pb-5'>I am proficient in Frontend skills like HTML, CSS, React.js, Redux, Redux Tool Kit, Tailwind CSS and many more.</p>
                    <p className='pb-5'>In backend I know Node.js, Express.js and  MongoDB</p>
                </div>
                </div>
            </div>
        </section>
    )
}