import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import whoService from "../../../../services/whoService";

const selectAllWho = (state) => state.who.whoList;

const WhoToFollowList = () => {
    const whoList = useSelector(selectAllWho);
    const dispatch = useDispatch();
    useEffect(() =>
        whoService.findAllWho()
            .then(who => {
                console.log('findAllWho:', who);
                dispatch({
                    type: 'FIND-ALL-WHO',
                    payload: who,
                });
            }), []);
    return (
            <ul className="list-group">
                <li className="list-group-item override-follow">
                    Who to Follow
                </li>
                {
                    whoList.map((whoItem, idx) => {
                        return(<WhoToFollowListItem key={idx} who={whoItem}/>);
                    })
                }
            </ul>
    );
}

export default WhoToFollowList;
