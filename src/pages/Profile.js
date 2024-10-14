import React from 'react';

const profiles = [
    {
        name: 'Flavianus Putratama',
        nim: '21120122140105',
        group: 'Kelompok 31',
        followers: 150, 
        imgSrc: 'https://avatars.githubusercontent.com/u/128948529?v=4',
        github: 'https://github.com/FlavianusPutratama'
    },
    {
        name: 'Najla Fairuz Azzahra',
        nim: '21120122140110',
        group: 'Kelompok 31',
        followers: 120, 
        imgSrc: 'https://avatars.githubusercontent.com/u/128947833?v=4', 
        github: 'https://github.com/NajlaFairuzAzzahra' 
    },
    {
        name: 'Tangguh Chairunnisa',
        nim: '21120122140103',
        group: 'Kelompok 31',
        followers: 100, 
        imgSrc: 'https://avatars.githubusercontent.com/u/126763587?v=4', 
        github: 'https://github.com/tcnisaa' 
    },
    {
        name: 'Nicolaus Evan Widyatna',
        nim: '21120122140140',
        group: 'Kelompok 31',
        followers: 90, 
        imgSrc: 'https://avatars.githubusercontent.com/u/129579744?v=4', 
        github: 'https://github.com/Nicolauzzz' 
    },
];

export default function Profile() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', textAlign: 'center', padding: '20px' }}>
            {profiles.map((profile, index) => (
                <div key={index} style={{ marginBottom: '40px' }}>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={profile.imgSrc} 
                            alt={profile.name} 
                            style={{ width: '200px', borderRadius: '10px', marginBottom: '20px' }} 
                        />
                    </a>
                    <h1>{profile.name}</h1>
                    <p>NIM: {profile.nim}</p>
                    <p>{profile.group}</p>
                    <p>Followers: {profile.followers}</p> {/* Display follower count */}
                </div>
            ))}
        </div>
    );
}
