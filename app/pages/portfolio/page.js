import ISS from '../../../public/assets/iss-tracker.png';
import Santa from '../../../public/assets/cyber-santa.png';
import Taker from '../../../public/assets/note-taker.png';
import Employee from '../../../public/assets/employee-directory.png';
import Fit from '../../../public/assets/fitness-tracker.png';
import Eat from '../../../public/assets/eat-da-burger.png';
import ProjectCard from '@/app/components/projectCard/projectCard';


const Portfolio = () => {
    return (
        <div class='bg-[#EEEDEB]' id='portfolio'>
            <div class='row'>
                <div class='col-3' />
                <div class='col-6 space-y-4'>
                    <h2 class='flex justify-center text-4xl text-[#2B2B2B] mt-8'>Portfolio</h2>
                    <ProjectCard
                        title='ISS Tracker'
                        img={ISS}
                        description='HTML // CSS // JavaScript'
                        proUrl='/pages/projects/tracker'
                    />

                    <ProjectCard
                        title='Cyber Santa'
                        img={Santa}
                        description='Handlebar.js // Node.js // MySQL'
                        proUrl='/pages/projects/cyber'
                    />

                    <ProjectCard
                        title='Employee Directory'
                        img={Employee}
                        description='React.js // Node.js // CSS'
                        proUrl='/pages/projects/directory'
                    />

                    <ProjectCard
                        title='Note Taker'
                        img={Taker}
                        description='HTML5 // Node.js // Express.js'
                        proUrl='/pages/projects/note'
                    />

                    <ProjectCard
                        title='Fitness Tracker'
                        img={Fit}
                        description='HTML5 // CSS // Node.js // MongoDb'
                        proUrl='/pages/projects/fitness'
                    />

                    <ProjectCard
                        title='Eat Da Burger!'
                        img={Eat}
                        description='Handlebars.js// Node.js // MySQL'
                        proUrl='/pages/projects/burger'
                    />
                </div>
                <div class='col-3' />
            </div>
        </div>
    );
}

export default Portfolio;