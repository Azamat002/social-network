import s from './Music.module.css';

const Music = (props) => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lW49Oc9kNw4"
                    title="YouTube video player" frameBorder="5"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>)
}

export default Music;