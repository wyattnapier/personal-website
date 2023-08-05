import './Education.css';
import {education} from './ExperienceData.js';

export default function Education () {
    return (
        <div>
            {education.map((experience) => (
                <ul>
                    <li key={experience.school}>
                        <h2>{experience.school} | {experience.town}, {experience.state}</h2>
                        <h5>{experience.startDate} - {experience.endDate}</h5>
                        {experience.otherInfo.map((entry) => (
                            <body>{entry}</body>
                        ))}
                        <body>GPA: {experience.GPA}</body>
                    </li>
                </ul>
            ))}
        </div>
    )
}