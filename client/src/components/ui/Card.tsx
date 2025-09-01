import ShareIcon from "../../icons/ShareIcon"
import DeleteIcon from "../../icons/DeleteIcon"
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";



interface CardProps {
    type: 'youtube' | 'tweet',
    link: string,
    title: string
}



const Card = (props: CardProps) => {
    return (
      <div className="w-70 h-100 overflow-auto  p-3 min-h-3xl rounded-md bg-gray-100 shadow-md outline-1 outline-gray-300">               {/* max-h-100 overflow-auto */}
          {/* First child */}
          <div className="flex justify-between">
              <span className="flex items-center gap-2">
                  {props.type === 'youtube' && <FaYoutube color="red"/>}
                  {props.type === 'tweet' && <FaTwitter color="skyblue"/>}
                  <h3 className="font-medium">{props.title}</h3>
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                  <ShareIcon />
                  <DeleteIcon />
              </span>
          </div>
          
          {/* Second child */}
          <div className="pt-4">
                { props.type === 'youtube' && 
                    <iframe 
                        className="rounded-lg mt-2"
                        width="100%"
                        src={props.link.replace('/watch', '/embed').replace('?v=', '/')}   // /watch - /embed, ?v= - /
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                }

                { props.type === 'tweet' && 
                    <div>
                        <blockquote className="twitter-tweet">
                            <a href={props.link.replace('x.com', 'twitter.com')}></a>
                        </blockquote> 
                        <script async src="https://platform.twitter.com/widgets.js"></script>
                    </div>
                }
          </div> 
          
      </div>
    )
}



export default Card