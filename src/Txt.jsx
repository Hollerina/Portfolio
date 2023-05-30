import { useCallback } from 'react';
import { useState, useEffect } from 'react'
/**
 *Allows for the typing effect which is displayed on the home page. 
 * @param {*} props 
 * @returns Content to be displayed
 */
function Txt(props){
    //Create useStates for index as well as the content
    const [content, setContent] = useState("");
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState(true);

    //To determine if needs to be stopped or not
    const useSkip = useCallback(
        () => setActive(act => !act)
        , []
    );

    //UseEffect allowing for each element in the text to be added at a time interval.
    useEffect(() => {
        if(index >=props.txt.length || !active){
            setContent((content) => props.txt);
            return;
        }
        setTimeout(() => {
            setContent((content) => content + props.txt.charAt(index));
            setIndex((index) => index + 1);
        }, 43);
    }, [content, active]);


    return (
        <div className='flex-text'>
            <p>{content}</p>
            <button onClick={useSkip} class="button" type='button'>Skip</button>
        </div>
        
    )
}

export default Txt