import React from "react"
import recentWorkData from "./data/recentWorkData"
import RecentWork from "./RecentWork"
import Title from "./Title"
const RecentWorkList = function () {
    const recentWorkList = recentWorkData.map(element => {
        return <RecentWork recentWork={element} />
    })
    return (
        <section className="portfolio">
            <Title title="Recent Work" />
            <div className="containers">{recentWorkList}</div>
        </section>

    )
}
export default RecentWorkList