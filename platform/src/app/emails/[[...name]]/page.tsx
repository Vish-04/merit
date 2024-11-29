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
            setUserMajor('in the College of Agricultural and Environmental Sciences at UC Davis');
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

    const fetchDataNathan = async () => {
        try {
            setUserName('Nathan Buntzen');
            setUserMajor('in the College of Biological Sciences at UC Davis');
            
            const emailsResponse = await fetch('/data/emails_mcb.json');
            const namesResponse = await fetch('/data/names_mcb.json');
            const personalizationsResponse = await fetch('/data/repersonalization_mcb_2.json');

            const emailsResponseTwo = await fetch('/data/emails_genetics.json');
            const namesResponseTwo = await fetch('/data/names_genetics.json');
            const personalizationsResponseTwo = await fetch('/data/repersonalization_genetics_2.json');

            const emails = (await emailsResponse.json()).concat(await emailsResponseTwo.json());
            const names = (await namesResponse.json()).concat(await namesResponseTwo.json());
            const personalizations = (await personalizationsResponse.json()).concat(await personalizationsResponseTwo.json());

            console.log(emails);
            console.log(names);

            setData({ emails, names, personalizations });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const params = useParams();
    const name = (params.name || ['noName']) as string[];
    const query = useSearchParams();

    useEffect(() => {
        if (name[0] === 'davids') {
            fetchDataDavid();
        } else if (name[0] === 'nathanb') {
            fetchDataNathan();
        }
    }, [name]);

    return (
        <div className='w-full min-w-screen min-h-screen h-full flex flex-col items-center justify-center p-10'>
            <h1 className='text-2xl font-bold mb-4'>Email Personalizations</h1>
            {data.emails.length > 0 ? (
                data.emails.map((email, index) => (
                    <div key={index} className='w-full max-w-4xl p-4 border border-gray-300 bg-blue-50 rounded-lg shadow-md mb-4'>
                        <h2 className='mb-2 text-lg font-semibold'>{data.names[index]}</h2>
                        <p className='mb-1'><strong>Email:</strong> {email}</p>
                            
                        <p className='mt-4'> {
                            `Dear Professor ${data.names[index].replace('\n', '')},

I hope your Thanksgiving week is starting well!

My name is ${userName.split(' ')[0]}, and I'm an undergraduate student ${userMajor}.

${data.personalizations[index]}

If you have some time, I would love to schedule a quick meeting or coffee chat to learn more about you and discuss your research.

Thank you for your time, and I look forward to hearing from you!

Sincerely,
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