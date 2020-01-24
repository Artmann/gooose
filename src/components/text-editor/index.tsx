import React, { ReactElement, useRef, FormEvent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

import TextArea from '../design/text-area';

export interface UploadFileEvent {
  file: File;
  textPosition: number;
}

interface TextEditorProps {
  isUploadingFile: boolean;
  onChange: (text: string) => void;
  onUploadedFile: (event: UploadFileEvent) => Promise<void>;
  placeholder: string;
  text: string;
  uploadErrorMessage?: string;
}

const UploadField = styled.div`
  border-top: dashed 1px ${ props => props.theme.borderColor };
  color: ${ props => props.theme.textColor }
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.75rem 0.5rem;
  width: 100%;
`;
const FileInput = styled.input`
  display: none;
`;
const defaultUploadMessage = 'Attach files by dragging & dropping, selecting or pasting them.';

function getTextPosition(element: HTMLTextAreaElement): number {
  if (!element) {
    return 0;
  }

  const stringPosition = element.selectionStart;

  return stringPosition;
}

export default function TextEditor({
  isUploadingFile,
  onChange,
  onUploadedFile,
  placeholder,
  text,
  uploadErrorMessage
  }: TextEditorProps): ReactElement {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const uploadFile = useCallback(async(file: File) => {
    if (!textAreaRef.current) {
      return;
    }

    onUploadedFile({
      file,
      textPosition: getTextPosition(textAreaRef.current)
    });
  }, [ onUploadedFile ]);

  const uploadFieldHandler = () => {
    fileInputRef.current?.click();
  };

  const selectFileHandler = (e: FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) {
      return;
    }

    const [ file ] = Array.from(e.currentTarget.files);

    uploadFile(file);
  };

  const onDrop = useCallback((files: File[]) => {
    if (files.length === 0) {
      return;
    }

    const [ file ] = files;

    uploadFile(file);
  }, [ uploadFile ]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div { ...getRootProps() }>
      <TextArea
        disabled={ isUploadingFile }
        onChange={ onChange }
        placeholder={ placeholder }
        ref={ textAreaRef }
        rows={ 15 }
        value={ text }
      />

      <UploadField onClick={ uploadFieldHandler }>
        { uploadErrorMessage ? uploadErrorMessage : (isUploadingFile ? 'Uploadign file...' : defaultUploadMessage) }
      </UploadField>
      <FileInput
      { ...getInputProps() }
        accept="image/x-png,image/gif,image/jpeg"
        onChange={ selectFileHandler }
        ref={ fileInputRef }
        type="file"
        />

    </div>
  );
}
