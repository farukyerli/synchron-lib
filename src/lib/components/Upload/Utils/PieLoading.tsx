import React from 'react';
import { IPieChartLoading } from '../type';
import './PieLoading.scss'

interface IProps extends IPieChartLoading {
    ratio: number;
}

const PieLoading = (props: IProps) => {
    const { ratio, backgroundColor = '#fff', foregroundColor = '#1a908d', width = '25px', height = '25px' } = props;
    return <div className="pie" style={{
        backgroundImage: `conic-gradient(${foregroundColor} ${ratio * 360}deg, ${backgroundColor} 0 )`,
        width,
        height

    }}></div>
};
export default PieLoading
