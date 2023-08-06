import './Extracurr.css';
import {extras} from './ExperienceData.js';


export default function Extracurr () {
    return (
        <div>
            {extras.map((activity) => (
                <ul>
                    <li>
                        <h2>{activity.org} | {activity.town}, {activity.state}</h2> 
                        <h3>{activity.role}</h3>
                        <h5>{activity.startDate} - {activity.endDate}</h5>
                        {activity.description.map((info) => (
                            <body>{info}</body>
                        ))}
                    </li>
                </ul>
            ))}
        </div>
    )
}