import React from "react"
import Header from "./Header"

import RecentWorkList from "./RecentWorkList"
import Footer from "./Footer"
import ReviewsList from "./ReviewsList"
import FeatureList from "./FeatureList"



const App = function () {
    return (
        <div>
            <Header />

            <FeatureList />

            <RecentWorkList />

            <ReviewsList />

            <Footer />
        </div>
    )
}

export default App