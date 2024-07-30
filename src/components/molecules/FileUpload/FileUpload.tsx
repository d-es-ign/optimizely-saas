"use client";
import Button from "@/components/atoms/Button/Button";
import LoadingSpinner from "@/components/atoms/LoadingSpinner/LoadingSpinner";
import Text from "@/components/atoms/Text/Text";
import replaceValuesInLabel from "@/components/utility/helpers/replaceValuesInLabel";
import Icon from "@/components/atoms/Icon/Icon";
import React, { useRef, useState } from "react";

export interface Props {
  readonly addFilesLabel: string;
  readonly chooseFileLabel: string;
  readonly discardLabel: string;
  readonly endpoint?: string;
  readonly errorMessage: string;
  readonly filesHaveLabel: string;
  readonly filesHasLabel: string;
  readonly loadingLabel: string;
  readonly modal: unknown; // TODO: Implement modal when component is available
  readonly multiple?: boolean;
  readonly submitFileLabel: string;
  readonly successMessage: string;
  readonly title?: string;
  readonly uploadDescription: string;
  readonly uploadedFileName: string;
  readonly uploadCallback?: () => void;
}

enum FileStatuses {
  INITIAL = "initial",
  UPLOADING = "uploading",
  SUCCESS = "success",
  FAIL = "fail",
}

const FileUpload = ({
  addFilesLabel,
  chooseFileLabel,
  discardLabel,
  endpoint,
  errorMessage,
  filesHaveLabel = "Files have",
  filesHasLabel = "File has",
  loadingLabel,
  multiple = false,
  submitFileLabel,
  successMessage,
  title = "Upload file",
  uploadDescription,
  uploadedFileName,
  uploadCallback,
}: Props) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<FileStatuses>(FileStatuses.INITIAL);
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setStatus(FileStatuses.INITIAL);
      setFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (files) {
      setStatus(FileStatuses.UPLOADING);
      const formData = new FormData();

      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      try {
        if (!endpoint) throw new Error("no endpoint setup");

        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
        });

        setStatus(response.ok ? FileStatuses.SUCCESS : FileStatuses.FAIL);

        uploadCallback?.();
      } catch (error) {
        console.error(error);
        setStatus(FileStatuses.FAIL);
      }

      setTimeout(handleReset, 5000);
    }
  };

  // Programmatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  // Function to reset the input element
  const handleReset = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = "";
      setFiles(null);
    }
    setStatus(FileStatuses.INITIAL);
  };

  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-px-[20px] lg:tw-px-[100px] tw-py-[60px] lg:tw-w-[640px] tw-border-2 tw-border-grey-40 tw-border-dashed">
      <div>
        <label htmlFor="file" className="tw-sr-only">
          {addFilesLabel}
        </label>

        <Text variant="body-14-semibold">{title}</Text>
        <Text
          variant="body-small"
          className="tw-pb-xs tw-pt-xxs tw-text-grey-70"
        >
          {uploadDescription}
        </Text>
        <Result
          status={status}
          loadingLabel={loadingLabel}
          successMessage={successMessage}
          errorMessage={errorMessage}
          fileCount={files?.length}
          filesHasLabel={filesHasLabel}
          filesHaveLabel={filesHaveLabel}
        />
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            ref={hiddenFileInput}
            multiple={multiple}
            className="tw-hidden" // Make the html file input element invisible
          />

          {files ? (
            <>
              <div className="tw-flex tw-flex-row tw-items-baseline tw-gap-xs">
                <Button
                  label={discardLabel}
                  variant="grey30"
                  onClick={handleReset}
                />
                <Button
                  label={chooseFileLabel}
                  modifier="outline"
                  onClick={handleClick}
                />
                {multiple ? (
                  <Button
                    buttonClasses="tw-mt-xs"
                    label={submitFileLabel}
                    onClick={handleUpload}
                    disabled={
                      status === FileStatuses.UPLOADING ||
                      status === FileStatuses.SUCCESS
                    }
                  />
                ) : (
                  files[0] && (
                    <Text
                      variant="body-small"
                      className="tw-hidden tw-text-grey-70 md:tw-block"
                    >
                      {replaceValuesInLabel(uploadedFileName, [files[0].name])}
                    </Text>
                  )
                )}
              </div>
              {files[0] && (
                <Text
                  variant="body-small"
                  className="tw-pt-4 tw-text-grey-70 md:tw-hidden"
                >
                  {replaceValuesInLabel(uploadedFileName, [files[0].name])}
                </Text>
              )}
              {multiple ? (
                <ul className="tw-p-xs">
                  {Array.from(files).map((file) => (
                    <li key={file.name} className="tw-list-disc">
                      <Text
                        variant="body-small"
                        className="tw-pt-xxs tw-text-grey-70"
                      >
                        {file.name}
                      </Text>
                    </li>
                  ))}
                </ul>
              ) : (
                <Button
                  buttonClasses="tw-mt-xs"
                  label={submitFileLabel}
                  onClick={handleUpload}
                  disabled={
                    status === FileStatuses.UPLOADING ||
                    status === FileStatuses.SUCCESS
                  }
                />
              )}
            </>
          ) : (
            <Button label={addFilesLabel} onClick={handleClick} />
          )}
        </div>
      </div>
      <Icon
        name={"download"}
        className={"tw-rotate-180 tw-mr-[20px]"}
        size={"2rem"}
      />
    </div>
  );
};

const Result = ({
  errorMessage,
  fileCount,
  filesHasLabel,
  filesHaveLabel,
  loadingLabel,
  status,
  successMessage,
}: {
  errorMessage: string;
  fileCount?: number;
  filesHasLabel: string;
  filesHaveLabel: string;
  loadingLabel: string;
  status: FileStatuses;
  successMessage: string;
}) => {
  if (status === FileStatuses.SUCCESS && fileCount) {
    return (
      <Text as="p" variant="label-12" className="tw-pb-xs tw-text-green">
        {fileCount > 1 ? filesHaveLabel : filesHasLabel}
        {successMessage}
      </Text>
    );
  } else if (status === FileStatuses.FAIL) {
    return (
      <Text as="p" variant="label-12" className="tw-pb-xs tw-text-red">
        {errorMessage}
      </Text>
    );
  } else if (status === FileStatuses.UPLOADING) {
    return (
      <p className="tw-mb-xs tw-flex tw-flex-row tw-items-center tw-gap-xxs">
        <LoadingSpinner loadingLabel={loadingLabel} />
        <Text variant="label-12" className="tw-text-grey-70">
          {loadingLabel}
        </Text>
      </p>
    );
  } else {
    return null;
  }
};

export default FileUpload;
