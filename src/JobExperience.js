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
                        <h2>{job.company} | {job.town}, {job.state}</h2>
                        <h3>{job.jobTitle}</h3>
                        <h5>{job.type}: {job.startDate} - {job.endDate}</h5>
                        {job.description.map((entry => (
                            <li>
                                <body>{entry}</body>
                            </li>
                        )))}
                        {job.showReference ? 
                        <body>{job.referenceName}: {job.referenceContact}</body> : <div></div>}
                    </li>
                </ul>
            ))}
        </div>
    )
}