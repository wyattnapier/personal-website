import './JobExperience.css';
import {workExperience} from './ExperienceData.js';

export default function JobExperience () {
    return (
        <div>
            <h1>This is the job experience I have!</h1>
            {console.log(workExperience)}
            {workExperience.map((job) => (
                <ul>
                    <li key={job.jobTitle}>
                        <h1>{job.company} | {job.town}, {job.state}</h1>
                        <h2>{job.jobTitle}</h2>
                    </li>
                </ul>
            ))}
        </div>
    )
}