/* eslint-disable react/prop-types */


function ImgOne({ items, index }) {
    return (
        <div className="grid gap-2 grid-cols-[2fr_1fr] overflow-hidden">
            <div className="">
                {items.photos?.[0] && (
                    <img className="w-full h-full" src={'http://localhost:2000/upload/' + items.photos[index = 0]} alt="" />
                )}
            </div>
            <div className="grid">
                {items.photos?.[1] && (
                    <div className="">
                        <img className="mb-2" src={'http://localhost:2000/upload/' + items.photos[index = 1]} alt="" />
                        <img className="h-4/6 object-cover" src={'http://localhost:2000/upload/' + items.photos[index = 2]} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImgOne
