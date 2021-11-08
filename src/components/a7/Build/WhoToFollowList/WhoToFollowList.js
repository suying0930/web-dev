import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state);
    return (
            <ul className="list-group">
                <li className="list-group-item override-follow">
                    Who to Follow
                </li>
                {
                    Object.entries(who).map(who => {
                        return(<WhoToFollowListItem who={who}/>);
                    })
                }
            </ul>
    );
}

export default WhoToFollowList;