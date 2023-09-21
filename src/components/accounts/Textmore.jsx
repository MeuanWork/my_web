

function Textmore({ items }) {
    return (
        <div className="px-10 py-6">
            <h1 className="text-2xl">What you'll learn</h1>
            <div className="flex gap-1">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </p>
                <p dangerouslySetInnerHTML={{__html:items.description}}/>
            </div>
        </div>
    )
}

export default Textmore
