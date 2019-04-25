import React from "react"


const RecentWork = function (props) {
    const { image, title, content } = props.recentWork
    return (
        <div className="container__a">
            <div className=" placeholder-container">
                <img className="placeholder-pic"
                    src={image} />
            </div>
            <div className="blog-container">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>

    )
}
export default RecentWork