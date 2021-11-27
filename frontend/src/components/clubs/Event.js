import React from 'react'
import {
    VerifiedUser,
    Person
} from "@material-ui/icons";
import {post_styles} from "./clubs_className"

export default function Event(props) 
{
    return(
        <div className={post_styles.post__body}>
            
            <div className={post_styles.post__header}>
                <container className={post_styles.post__avatar}>
                    <svg className={post_styles.post__w_h_full}>
                        <Person/>
                    </svg>
                </container>
                <div className={post_styles.post__info}>
                    <div className={post_styles.post__title}>{props.title}</div>
                    <div className={post_styles.post__userInfo}>
                        <div className={post_styles.post__userName}>{props.username}</div>
                        {props.verified && <VerifiedUser className={post_styles.post__verified}/>}
                        <div className={post_styles.post__userID}>{"@"+props.userid}</div>
                        <div className={post_styles.post__flex_grow}/>
                    </div>
                    <div className={post_styles.post__flex_grow}/>
                </div>
            </div>
            
            <div className={post_styles.post__description}>{props.description}</div>
            <div className={post_styles.post__imageHolder}>
                {props.hasImage && <img className={post_styles.post__image} src={props.imageData} alt="Couldn't load. Please try again"></img>}
            </div>
            {/* <div className="flex flex-row w-full px-4 py-1 justify-around">
                <div><Favorite/></div>
                <div><Bookmark/></div>
                <div><AddComment/></div>
            </div> */}
            {props.registarable && <button>R</button>}
        </div>
    )
}
