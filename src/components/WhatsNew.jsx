import React, { Fragment } from "react";
import CustomScroller from "react-custom-scroller";
import SectionTitle from "components/SectionTitle";
import WhatsnewEntry from "./WhatsnewEntry";

import { whatsNewData } from "data/whatsnew.js";

function WhatsNew() {
    return (
        <div className="page-section scroll-snap" id="whatsnew">
            <SectionTitle title="What's New" />
            <CustomScroller id="whatsnew-list">
            {
                whatsNewData.slice(0).reverse().map((data, key) => {
                    return (
                        <Fragment key={key}>
                            <label>{data.year}</label>
                            {
                                data.monthlyActivities.slice(0).reverse().map((activityData, activityKey) => {
                                    return (
                                        <WhatsnewEntry 
                                            key={activityKey}
                                            activity = {activityData.activities[0].activity}
                                            organizer = {activityData.activities[0].organizer}
                                            month = {activityData.month}
                                            category= {activityData.activities[0].category}
                                        />
                                    ) 
                                })
                            }
                        </Fragment>
                    );
                })

            }
                
            </CustomScroller>
        </div>
    )
}

export default WhatsNew;