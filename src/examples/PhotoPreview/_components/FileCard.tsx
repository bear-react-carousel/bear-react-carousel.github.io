import React, {useEffect, useState, useCallback, useRef, forwardRef} from 'react';
import styled, {css} from 'styled-components';

interface IProps {
    name: string,
    thumbUrl?: string,
    onPreview?: (id: number) => void,
}

/**
 * 檔案上傳(含預覽圖)
 * @param style
 */
const FileCard = ({
      name,
      thumbUrl,
      onPreview,
  }: IProps) => {

    const [imagePreviewUrl, setImagePreviewUrl] = useState<string|undefined>(thumbUrl);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const renderFileTaskStatus = () => {

        return <FileInfo>
            <div className="d-flex flex-column flex-grow-1">
                <FileName>{name}</FileName>
                <FileUploadTime>2023-06-12</FileUploadTime>
            </div>
        </FileInfo>;
    };


    return <FileLi
        isEditMode={isEditMode}
        onClick={onPreview}
    >
        <FileThumb>
            <FileThumbContent
                style={{
                    backgroundImage: `url('${imagePreviewUrl}')`,
                }}
            />
        </FileThumb>


        {renderFileTaskStatus()}
    </FileLi>;

};

export default FileCard;





const ActionButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 0;
  transition: opacity .3s;
  flex: 1;
`;



export const FileThumbContent = styled.div`
    width: 100%;
    height: 100%;
    background: center no-repeat;
    background-size: contain;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    text-transform: uppercase;

`;



const FileUploadTime = styled.div`
  color: #8d8b8b;
  font-size: 13px;
  flex: 0 0 auto;

`;




const FileInfo = styled.div`
    display: flex;
  flex-direction: row;
  flex: 1;
`;


const FileName = styled.div`
    font-size: 14px;
  word-break: break-all;
  padding-right: 20px;
  font-weight: 700;
  color: #fff;
  flex: 0 0 auto;

`;


const FileThumb = styled.div`
    width: 112px;
    flex: 0 0 112px;
    margin-right: 20px;
  border-radius: 6px;
  overflow: hidden;
  padding: 4px;
  background-color: #363c42;
`;

const FileLi = styled.div<{
    isEditMode: boolean,
}>`
    display: flex;
  flex-direction: row;
  height: 80px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color .3s, opacity .3s;
  opacity: .9;

  ${props => props.isEditMode === false && css`
    cursor: pointer;
    :hover{
      background-color: #353535;
      opacity: 1;

      ${ActionButtonGroup}{
        opacity: 1;
      }
    }
  `}

`;
