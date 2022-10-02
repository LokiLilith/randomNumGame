import { useState } from "react"
type MSGProps = {
    msg: string
}

const Message: React.FC<MSGProps> = ({msg}) => {



    return(
     <p className="message">{msg}</p>
    )
}

export default Message