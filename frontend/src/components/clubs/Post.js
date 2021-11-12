import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";
import styles from "./Post_className" 

function Post({ displayName, username, verified, text, image, avatar }) 
{
    return (
        <div className={styles.post}>
            <div className={styles.post__avatar}>
                <Avatar src={avatar} />
            </div>
            <div className={styles.post__body}>
                <div className={styles.post__header}>
                    <div className={styles.post__headerText}>
                        {displayName}{" is a stupid guy"}
                        <span className={styles.post__headerSpecial}>
                            {verified && <VerifiedUser className={styles.post__badge} />} @
                            {username}
                        </span>
                    </div>
                    <div className={styles.post__headerDescription}>
                        <p></p>
                    </div>
                </div>
                <img src="" alt="" />
                    <div className={styles.post__footer}>
                        <ChatBubbleOutline fontSize="small" />
                        <Repeat fontSize="small" />
                        <FavoriteBorder fontSize="small" />
                        <Publish fontSize="small" />
                    </div>
            </div>
        </div>
    
    );
}

export default Post;