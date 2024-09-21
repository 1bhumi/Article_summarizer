import React, { useState } from 'react'
import '../App.css'

function Article() {

    const [input, setInput] = useState('');
    const [summary, setSummary] = useState('');
    const [text, setText] = useState('');
    const [useUrl, setUseUrl] = useState(true);

    const changeHandler = (event) => {
        setInput(event.target.value);
    }

    const changeTextHandler = (event) => {
        setText(event.target.value);
    }

    const SummaryData = async () => {
        let url = ''
        let options = {}


        if (useUrl) {
            url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(input)}&lang=en&engine=2`
            options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '5bc39fe5e5msh48f82c268b223c9p1a34abjsn889754aae74b',
                    'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
                }
            };

            fetch(url, options)
                .then(data => data.json())
                .then(data => setSummary(data.summary))
                .catch(error => console.log(error))




        } else {
            url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text`;
            options = {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': '1c475494d3msh430991ea5ce990cp1592a2jsnf393ca1f9120',
                    'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: text, lang: "en", engine: '2' })
            };
        }

        fetch(url, options)
            .then(data => data.json())
            .then(data => setSummary(data.summary))
            .catch(error => console.log(error))
    }

    return (
        <div className="min-h-screen bg-buff p-6  bg-top bg-no-repeat bg-cover">

            <h1 className='text-center text-gray-900 text-6xl font-bold my-9 font-montserrat'>Article Summarizer</h1>

            <div className='text-center'>
                <button
                    className={`bg-raisinblack hover:bg-black font-mono text-white border-none px-4 py-2 ${useUrl ? 'active' : ''}`}
                    onClick={() => setUseUrl(true)}>
                    Add URL
                </button>
                <button
                    className={`bg-raisinblack hover:bg-black font-mono text-white border-none px-4 py-2 ${!useUrl ? 'active' : ''}`}
                    onClick={() => setUseUrl(false)}>
                    Add Text
                </button>
            </div>

            <div className='text-center my-8'>
                {useUrl ? (
                    <input className='border border-black rounded-md pl-2 h-8 w-1/2' type='url' placeholder='Enter your URL'
                        value={input} onChange={changeHandler} required />
                ) : (
                    <textarea
                        className="border border-black rounded-md p-2 h-12 w-1/2"
                        placeholder="Enter your text"
                        value={text}
                        onChange={changeTextHandler}
                        required
                    />
                )}
            </div>

            <div className='text-center'>
                <button className='border hover:bg-black bg-raisinblack font-mono text-white w-1/4 p-3 mb-5  border-none rounded-lg' onClick={SummaryData}>Generate</button>
            </div>

            <textarea
                className="border border-gray-500 text-gray-700 p-2 mx-auto block h-80 w-7/12 resize-none"
                value={summary}
                readOnly
                rows={10}
                cols={50}
                wrap="soft" // Enables text wrapping
            />

        </div>
    );
}

export default Article;
