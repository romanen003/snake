import React from "react";

type PropsType = {
    filled: boolean,
    isFood: boolean
}

export const Col = React.memo(({ filled, isFood }: PropsType) => {
    return (
        <div className={`gridItem ${filled && 'is-tail'} ${isFood && 'is-food'}`}/>
    )
})
