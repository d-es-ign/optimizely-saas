"use client";
import Button from "@/components/atoms/Button/Button";
import LoadingSpinner from "@/components/atoms/LoadingSpinner/LoadingSpinner";
import Text from "@/components/atoms/Text/Text";
import replaceValuesInLabel from "@/components/utility/helpers/replaceValuesInLabel";
import React, { useRef, useState } from "react";
import { getComplimentaryColoursAction } from "@/app/colour-properties/_utils/actions";
import UploadIcon from "@/components/atoms/Icon/UploadIcon";
import SizeEnum from "@/components/models/enums/SizeEnum";
import { useFormStatus } from "react-dom";

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
  readonly accept?: string;
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
  accept = "*",
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

  const { pending } = useFormStatus();

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

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className=" tw-flex tw-items-center tw-justify-between tw-px-[20px] lg:tw-px-[100px] tw-py-[60px] lg:tw-w-[640px] tw-border-2 tw-border-grey-40 tw-border-dashed">
      <div
        style={{
          display: status === FileStatuses.UPLOADING ? "none" : "block",
        }}
      >
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
          <form ref={formRef} action={getComplimentaryColoursAction}>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              ref={hiddenFileInput}
              accept={accept}
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
                        {uploadedFileName + files[0].name}
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
                    type="submit"
                    modifier="outline"
                    onClick={() => {
                      setStatus(FileStatuses.UPLOADING);
                      formRef?.current?.submit();
                    }}
                    disabled={
                      status === FileStatuses.UPLOADING ||
                      status === FileStatuses.SUCCESS
                    }
                  />
                )}
              </>
            ) : (
              <Button
                type="button"
                modifier="outline"
                label={addFilesLabel}
                onClick={handleClick}
              />
            )}
          </form>
        </div>
      </div>
      <UploadIcon />

      {FileStatuses.UPLOADING === status && (
        <p className="tw-mb-xs tw-flex tw-flex-row tw-items-center tw-gap-xxs">
          <LoadingSpinner size={SizeEnum.Large} loadingLabel={loadingLabel} />
          <Text variant="label-12" className="tw-text-grey-70">
            {loadingLabel}
          </Text>
        </p>
      )}
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
