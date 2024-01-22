import { Avatar } from '../Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import './styles.css'
import { useState } from 'react'

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
}
export function Comment({ content, deleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment() {
        console.log('oi')

        deleteComment(content)
    }
    function handleLikeCount() {
        setLikeCount((prev) => {
            return prev + 1;
        })
    }
    return(
        <div className="comment">
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/30300674?v=4" />
            <div className="comment-box">
                <div className="comment-content">
                    <header>
                        <div className="author-and-time">
                            <strong>Eduardo Franco</strong>
                            <time title="11th may at 08:13" dateTime="2024-05-11 08:10:30">about 1h ago</time>
                        </div>
                        <button
                            title="Delete comment"
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp /> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}