import React, { useCallback } from 'react'

import { useDropzone } from 'react-dropzone'

import Typography from '@components/UI/Typography'

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {
  Container,
  DropZoneContainer,
  UploadContainer,
  WrapperText,
} from './styles'

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]

      onFileUploaded(file)
    },
    [onFileUploaded],
  )
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'text/csv': [],
    },
  })

  return (
    <Container>
      <UploadContainer>
        <DropZoneContainer {...getRootProps()}>
          <input {...getInputProps()} accept="image/*" />
          <>
            <FileUploadOutlinedIcon sx={{ color: '#CAB780', fontSize: 42 }} />
            <WrapperText>
              <Typography align="center" lineHeight="35px" color={'#716E6A'}>
                Anexe a tabela de frete
              </Typography>
              <InfoOutlinedIcon sx={{ color: '#C1C1C1', fontSize: 18 }} />
            </WrapperText>
          </>
        </DropZoneContainer>
      </UploadContainer>
    </Container>
  )
}

export default Dropzone
