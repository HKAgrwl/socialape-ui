import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData'
import { useState } from 'react';

export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler=()=>{
        setLike(isLiked? like-1:like+1)
        setIsLiked(isLiked? false:true)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={PF + Users.find((u)=> u.id===post.userId).profilePicture}alt="" />
                    <div className="postUsername">{Users.filter((u)=> u.id===post.userId)[0].username}</div>
                    <div className="postDate">{post.date}</div>
                </div>
                <div className="postTopRight"></div>
                <MoreVertIcon/>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={PF + post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src={`${PF}like.png`} alt="" onClick={likeHandler} />
                    <img className='likeIcon' src={`${PF}heart.png`} alt="" />
                    <span className="postLikeCounter">{like} likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
