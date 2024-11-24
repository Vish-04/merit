'use client'

// ** Next Imports
import {useState, useEffect} from 'react'
import { useParams, useSearchParams } from 'next/navigation';

const page = () => {

    const [data, setData] = useState<{ emails: string[], names: string[], personalizations: string[] }>({
        emails: [],
        names: [],
        personalizations: []
    });
    const [userName, setUserName] = useState<string>('');
    const [userMajor, setUserMajor] = useState<string>('');

    const fetchDataDavid = async () => {
        try {
            setUserName('David Sweet');
            setUserMajor('in the College of Biological Sciences at UC Davis');
            const emailsResponse = await fetch('/data/emails_es.json');
            const namesResponse = await fetch('/data/names_es.json');
            const personalizationsResponse = await fetch('/data/personalizations_es.json');

            const emails = await emailsResponse.json();
            const names = await namesResponse.json();
            const personalizations = await personalizationsResponse.json();

            console.log(emails)
            console.log(names)

            setData({ emails, names, personalizations });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const params = useParams();
    const name = (params.name || ['noName']) as string[];
    const query = useSearchParams();

    useEffect(() => {
        if (name[0] === 'davids') {
            fetchDataDavid();
        }
    }, [name]);

    return (
        <div className='w-full h-full flex flex-col items-center justify-center p-10'>
            <h1 className='text-2xl font-bold mb-4'>Email Personalizations</h1>
            {data.emails.length > 0 ? (
                data.emails.map((email, index) => (
                    <div key={index} className='w-full max-w-4xl p-4 border border-gray-300 bg-blue-50 rounded-lg shadow-md mb-4'>
                        <h2 className='mb-2 text-lg font-semibold'>{data.names[index]}</h2>
                        <p className='mb-1'><strong>Email:</strong> {email}</p>
                            
                        <p className='mt-4'> {
                            `Dear Professor ${data.names[index]}
My name is ${userName.split(' ')[0]}, and I'm an undergraduate student ${userMajor}.

${data.personalizations[index]}

If you have some time, I would love to schedule a quick meeting or coffee chat to learn more about you and discuss your research.

Thank you for your time, and I look forward to hearing from you.

Kind Regards,
${userName}
`.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))
                        }</p>
                    </div>
                ))
            ) : (
                <div>No emails found</div>
            )}
        </div>
    )
}

export default page