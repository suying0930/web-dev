import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who.whoList;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    return (
            <ul className="list-group">
                <li className="list-group-item override-follow">
                    Who to Follow
                </li>
                {
                    who.map(whoItem => {
                        return(<WhoToFollowListItem who={whoItem}/>);
                    })
                }
            </ul>
    );
}

export default WhoToFollowList;
