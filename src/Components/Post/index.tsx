
import { format, formatDistanceStrict } from 'date-fns'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import './styles.css'
import { useState, ChangeEvent, FormEvent } from 'react'

interface Author {
    name: string;
    role: string;
    url: string;
}
interface Content {
    type: 'paragraph' | 'link';
    content: string;
}
export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "do LLL 'at' h:mmaaa")

    const publishedDateRelativeToNow = formatDistanceStrict(post.publishedAt, new Date,{
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }
    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }
    const isNewcommentEmpty = newCommentText.length === 0;
    return (
        <article className='post'>
            <header>
                <div className='author'>
                    <Avatar src={post.author.url} />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow} ago</time>
            </header>
            <div className="content">
            {post.content.map((line, index) => {
                if (line.type === 'paragraph') {
                    return <p key={String(index)}>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p key={String(index)}><a href="">{line.content}</a></p>
                }
             })}
            <p> 
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>{' '}
            </p>

            </div>
            <form onSubmit={handleCreateNewComment} className='comment-form'>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder='Wow mate, I loved it!'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button
                        type="submit"
                        disabled={isNewcommentEmpty}
                    >
                        Publish
                    </button>
                </footer>
            </form>
            <div className="comment-list">
                {
                    comments && comments.map((comment, index) => (
                        <Comment
                            key={String(index)}    
                            content={comment}
                            deleteComment={deleteComment}
                        />
                    ))
                }
            </div>
        </article>
    )
}