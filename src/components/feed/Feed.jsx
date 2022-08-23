import React, { useState,useEffect } from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
// import { useState,useEffect } from 'react'
import axios from "axios"

export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    async function fetchPosts(){
      const res = await axios.get("posts/timeline/629bbd90cd01596b89b3c520")
      console.log(res);
    }
    fetchPosts()
  },[])
  return (
    <div>
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {/* {Posts.map((p)=>(
                    <Post key={p.id} post={p}/>
                ))} */}
            </div>
        </div>
    </div>
  )
}
