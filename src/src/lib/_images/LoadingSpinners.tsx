import React from "react";
// import '../_styles/LoadingSpinners.scss'
interface IProps {
    type?: 1 | 2
}
export default (props: IProps) => {
    const { type = 1 } = props

    require(`../_styles/LoadingSpinners${type}.scss`)

    return (

        <div className="loader"></div>
    )
}
