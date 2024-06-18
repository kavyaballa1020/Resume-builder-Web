import React from 'react';
import './Resume.css';

const Resume = ({ resumeData }) => {
    return (
        <div className="resume-container">
            <div className="header">
                <h1>{resumeData.name || 'Your Name'}</h1>
                <h2>{resumeData.title || 'Your Title'}</h2>
            </div>
            <div className="content">
                <div className="left-column">
                    <section>
                        <h3>Contact</h3>
                        <p>📞 {resumeData.contact?.phone}</p>
                        <p>📧 {resumeData.contact?.email}</p>
                        {resumeData.contact?.linkedin && <p>🔗 <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>}
                        {resumeData.contact?.github && <p>💻 <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>}
                        <p>🏠 {resumeData.contact?.address}</p>
                    </section>
                    <section>
                        <h3>Skills</h3>
                        <ul>
                            {resumeData.skills?.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h3>Certificates</h3>
                        <ul>
                            {resumeData.certificates?.map((cert, index) => (
                                <li key={index}>{cert}</li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h3>Languages</h3>
                        <ul>
                            {resumeData.languages?.map((lang, index) => (
                                <li key={index}>{lang}</li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className="right-column">
                    <section>
                        <h3>Profile</h3>
                        <p>{resumeData.profileText || 'No profile available.'}</p>
                    </section>
                    <section>
                        <h3>Education</h3>
                        <ul>
                            {resumeData.education?.map((edu, index) => (
                                <li key={index}>
                                    <h4>{edu.degree}</h4>
                                    <p>{edu.institution}</p>
                                    <p>{edu.startYear} - {edu.endYear}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h3>Experience</h3>
                        <ul>
                            {resumeData.experience?.map((exp, index) => (
                                <li key={index}>
                                    <h4>{exp.position}</h4>
                                    <p>{exp.company}</p>
                                    <p>{exp.startMonth} {exp.startYear} - {exp.endMonth} {exp.endYear}</p>
                                    <p>{exp.internships}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="download-button-container">
                <button className="download-button" onClick={() => window.print()}>Download Resume</button>
            </div>
        </div>
    );
};

export default Resume;
