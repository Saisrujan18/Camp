import React from 'react'
import {post_styles} from "./clubs_className"

export default function Event(props) 
{
    return(
        <div className={post_styles.post__body}>
                        
            <div className={post_styles.post__userInfo}>
                <div className={post_styles.post__title}>{props.title}</div>
                <div className={post_styles.post__userName}>{props.username}</div>
            </div>
    
            <div className={post_styles.post__description}>{props.description}</div>
            
            <div className={post_styles.post__imageHolder}>
                {props.hasImage && <img className={post_styles.post__image} src={props.imageData} alt="Couldn't load. Please try again"></img>}
            </div>
        
        </div>
    )
}
