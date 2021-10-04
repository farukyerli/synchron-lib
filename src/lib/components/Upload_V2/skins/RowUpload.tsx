import React from 'react';
import { IClasses, IRowItems, IRowTexts, IUploadActions, IUploadFileType } from '../type';
import './styles/RowUpload.scss'


interface IProps {
    disabled?: boolean;
    upLoadText?: string;
    onChange?: (files: IUploadFileType[]) => void;
    classes?: IClasses;
    rowItems?: IRowItems;
    actionButtons?: IUploadActions;
    text?: IRowTexts;

}

const RowUploadForm = (props: IProps) => {
    const { classes, rowItems, actionButtons } = props;
    return (
        <div className={`component-container ${classes?.componentContainer}`}>
            <section className={`${classes?.section}`}>
                <div className="columns">{rowItems?.Column1 ||
                    <i
                        // className="fas fa-eye" 
                        onClick={() => actionButtons?.Download && actionButtons.Download('')}
                        className={`fas fa-download column1 ${classes?.Column1}`}></i>
                    //  <img src={require("./images/icon/upload.png")} className={`column1 ${classes?.row1}`} alt="" />
                }</div>
                <div className="columns column2">{rowItems?.Column2 || 'Column2'}</div>
                {rowItems?.Column3 && <div className="columns">{rowItems?.Column3 || 'Column3'}</div>}
                {rowItems?.Column4 && <div className="columns">{rowItems?.Column4 || 'Column4'}</div>}
                {(actionButtons?.Delete || actionButtons?.Edit || actionButtons?.View) &&
                    <div className="columns column5">
                        {rowItems?.Column5 || (
                            <>
                                <i className="fas fa-eye" onClick={() => actionButtons?.View && actionButtons.View('')}></i>
                                <i className="fas fa-pencil-alt" onClick={() => actionButtons?.Edit && actionButtons.Edit('')}></i>
                                <i className="fas fa-trash" onClick={() => actionButtons?.Delete && actionButtons.Delete('')}></i>
                            </>
                        )}
                    </div>}
                {rowItems?.Column6 && <div className="columns" >
                    {rowItems?.Column6 || 'Column6'}
                </div>}
            </section>
        </div>

    )
};
export default RowUploadForm
